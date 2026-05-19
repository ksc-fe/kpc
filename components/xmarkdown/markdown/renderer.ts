/**
 * Markdown 渲染器
 *
 * 基于 markdown-it 生成 token，再转换为 Intact VNode。
 */

import MarkdownIt from 'markdown-it';
import {registerHighlightLanguages, normalizeLanguage} from './highlight';
import {renderCodeBlock} from './codeblock';
import {renderMermaidBlock} from './mermaid';
import {
    createElementNode,
    createKeyGenerator,
    createTextNode,
    parseHtmlFragment,
    parseSanitizedHtmlFragment,
    renderTreeNodes,
    type XMarkdownRenderTreeNode,
} from './renderTree';
import type {
    XMarkdownPlugin,
    XMarkdownRegisterRenderedBlock,
    XMarkdownRenderOptions,
    XMarkdownRenderResult,
    XMarkdownRenderedBlock,
    XMarkdownRenderedBlockType,
    XMarkdownRenderedStableBlock,
    XMarkdownSourceBlock,
} from './types';

// 初始化语法高亮语言
registerHighlightLanguages();

/**
 * 创建 Markdown 渲染器
 */
export function createMarkdownRenderer(options: XMarkdownRenderOptions = {}) {
    const prefixCls = options.prefixCls || 'k';
    // 创建 Markdown-it 实例
    const markdown = new MarkdownIt({
        html: !!options.allowHtml,
        linkify: true,
        breaks: true,
        typographer: true,
        langPrefix: 'language-',
    });

    // 启用数学公式渲染
    if (options.enableFormula !== false && options.formulaRuntime) {
        markdown.use(options.formulaRuntime.texmath, {
            engine: options.formulaRuntime.katex,
            delimiters: options.formulaDelimiters || ['dollars', 'beg_end'],
            katexOptions: {
                throwOnError: false,
                strict: 'ignore',
                macros: options.formulaMacros || {},
            },
        });
    }
    // 应用 Markdown 扩展插件
    applyMarkdownPlugins(markdown, options.plugins);

    return {
        // 渲染整段 Markdown 源码
        render(source: string): XMarkdownRenderResult {
            return renderSource(source, createDocumentKey(source));
        },
        // 解析顶层块级源码片段
        parseBlocks(source: string): XMarkdownSourceBlock[] {
            return parseSourceBlocks(source);
        },

        // 渲染单个块级源码片段
        renderBlock(
            block: XMarkdownSourceBlock,
            registerBlock?: XMarkdownRegisterRenderedBlock
        ): XMarkdownRenderedStableBlock {
            const result = renderSource(block.source, block.key, registerBlock);

            return {
                key: block.key,
                source: block.source,
                nodes: result.nodes,
                blocks: result.blocks,
            };
        },
    };

    /**
     * 渲染整段 Markdown 源码
     */
    function renderSource(
        source: string,
        keySeed: string,
        registerBlock?: XMarkdownRegisterRenderedBlock
    ): XMarkdownRenderResult {
        const nextKey = createKeyGenerator(`xmarkdown-${keySeed}`);
        const {env, blocks} = createRenderEnv(registerBlock);
        // 解析 Markdown 源码
        const tokens = markdown.parse(source || '', env);
        // 将 tokens 转换为渲染树节点
        const builtNodes = buildNodesFromTokens(tokens, options, nextKey, env);
        // 应用渲染树转换插件
        const nodes = applyRenderTreeTransforms(builtNodes, source, options);
        
        return {
            nodes: renderTreeNodes(nodes, options),
            blocks,
        };
    }

    /**
     * 解析顶层块级源码片段
     */
    function parseSourceBlocks(source: string): XMarkdownSourceBlock[] {
        const normalized = normalizeSource(source);
        if (!normalized) return [];
        if (!normalized.trim()) return [];

        const tokens = markdown.parse(normalized, {});
        const ranges = collectTopLevelBlockRanges(tokens);

        if (!ranges.length) {
            return [{
                key: createBlockKey('document', 0, normalized),
                source: normalized,
            }];
        }

        const lines = normalized.split('\n');
        return ranges.map(({type, start, end}, index) => {
            const blockSource = lines.slice(start, end).join('\n');
            return {
                key: createBlockKey(type, index, blockSource),
                source: blockSource,
            };
        });
    }

    /**
     * 将 block token 转成渲染树节点
     */
    function buildNodesFromTokens(
        tokens: any[],
        rendererOptions: XMarkdownRenderOptions,
        nextNodeKey: (scope?: string) => string,
        env: any
    ) {
        const root = createElementNode('div', {}, [], nextNodeKey('root'));
        const stack = [root];

        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            const parent = stack[stack.length - 1];

            if (token.type === 'inline') {
                parent.children.push(...buildInlineNodes(token.children || [], rendererOptions, nextNodeKey));
                continue;
            }

            if (token.type === 'fence' || token.type === 'code_block') {
                const info = String(token.info || '');
                const language = normalizeLanguage(info);
                const source = String(token.content || '').replace(/\n$/, '');
                parent.children.push(
                    language === 'mermaid' && rendererOptions.enableMermaid !== false
                        ? renderMermaidBlock(source, info, rendererOptions, env)
                        : renderCodeBlock(source, info, rendererOptions, env)
                );
                continue;
            }

            if (token.type === 'math_block') {
                parent.children.push(...renderMathNodes(String(token.content || ''), true, rendererOptions, nextNodeKey));
                continue;
            }

            if (token.type === 'html_block') {
                parent.children.push(...parseSanitizedHtmlFragment(String(token.content || ''), rendererOptions, nextNodeKey));
                continue;
            }

            if (token.type === 'hr') {
                parent.children.push(createElementNode('hr', tokenAttrsToObject(token), [], nextNodeKey('hr')));
                continue;
            }

            if (token.nesting === 1) {
                if (token.type === 'table_open') {
                    const wrapper = createElementNode('div', {
                        className: `${prefixCls}-xmarkdown-table-wrap`,
                    }, [], nextNodeKey('table-wrap'));
                    const table = createElementNode('table', tokenAttrsToObject(token), [], nextNodeKey('table'));
                    wrapper.children.push(table);
                    parent.children.push(wrapper);
                    stack.push(wrapper);
                    stack.push(table);
                    continue;
                }

                const element = createElementNode(token.tag, tokenAttrsToObject(token), [], nextNodeKey(token.tag));
                parent.children.push(element);
                stack.push(element);
                continue;
            }

            if (token.nesting === -1) {
                if (token.type === 'table_close') {
                    stack.pop();
                    stack.pop();
                    continue;
                }

                stack.pop();
            }
        }

        return root.children;
    }

    /**
     * 将 inline token 转成渲染树节点
     */
    function buildInlineNodes(
        tokens: any[],
        rendererOptions: XMarkdownRenderOptions,
        nextNodeKey: (scope?: string) => string
    ) {
        const root = createElementNode('span', {}, [], nextNodeKey('inline-root'));
        const stack = [root];

        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            const parent = stack[stack.length - 1];

            if (token.type === 'text') {
                parent.children.push(createTextNode(String(token.content || '')));
                continue;
            }

            if (token.type === 'softbreak' || token.type === 'hardbreak') {
                parent.children.push(createElementNode('br', {}, [], nextNodeKey('br')));
                continue;
            }

            if (token.type === 'code_inline') {
                parent.children.push(createElementNode('code', {
                    className: `${prefixCls}-xmarkdown-inline-code`,
                }, [createTextNode(String(token.content || ''))], nextNodeKey('code-inline')));
                continue;
            }

            if (token.type === 'image') {
                parent.children.push(createElementNode('img', {
                    ...tokenAttrsToObject(token),
                    alt: token.content || token.attrGet?.('alt') || '',
                }, [], nextNodeKey('image')));
                continue;
            }

            if (token.type === 'math_inline' || token.type === 'math_inline_double') {
                parent.children.push(...renderMathNodes(
                    String(token.content || ''),
                    token.type !== 'math_inline',
                    rendererOptions,
                    nextNodeKey
                ));
                continue;
            }

            if (token.type === 'html_inline') {
                const collected = collectInlineHtmlFragment(tokens, i, rendererOptions, nextNodeKey);
                if (collected) {
                    parent.children.push(...collected.nodes);
                    i = collected.endIndex;
                    continue;
                }

                parent.children.push(...parseSanitizedHtmlFragment(String(token.content || ''), rendererOptions, nextNodeKey));
                continue;
            }

            if (token.nesting === 1) {
                const element = createElementNode(token.tag, tokenAttrsToObject(token), [], nextNodeKey(token.tag || token.type));
                parent.children.push(element);
                stack.push(element);
                continue;
            }

            if (token.nesting === -1) {
                stack.pop();
            }
        }

        return root.children;
    }

    /**
     * 收集成对的 inline HTML 片段
     */
    function collectInlineHtmlFragment(
        tokens: any[],
        startIndex: number,
        rendererOptions: XMarkdownRenderOptions,
        nextNodeKey: (scope?: string) => string
    ) {
        const current = parseHtmlToken(String(tokens[startIndex].content || ''));
        if (!current || current.kind !== 'open') return null;

        let depth = 1;
        let fragment = String(tokens[startIndex].content || '');

        for (let i = startIndex + 1; i < tokens.length; i++) {
            const token = tokens[i];
            fragment += getInlineTokenRawContent(token);

            if (token.type === 'html_inline') {
                const next = parseHtmlToken(String(token.content || ''));
                if (next && next.tag === current.tag) {
                    if (next.kind === 'open') {
                        depth++;
                    } else if (next.kind === 'close') {
                        depth--;
                    }
                }
            }

            if (depth === 0) {
                return {
                    endIndex: i,
                    nodes: parseSanitizedHtmlFragment(fragment, rendererOptions, nextNodeKey),
                };
            }
        }

        return null;
    }
}

/**
 * 应用 Markdown 扩展插件
 */
function applyMarkdownPlugins(markdown: any, plugins?: XMarkdownPlugin[]) {
    if (!plugins || !plugins.length) return;

    plugins.forEach((plugin) => {
        plugin.extendMarkdown?.(markdown);
    });
}

/**
 * 应用渲染树转换插件
 */
function applyRenderTreeTransforms(
    nodes: XMarkdownRenderTreeNode[],
    source: string,
    options: XMarkdownRenderOptions
) {
    const plugins = options.plugins;
    if (!plugins || !plugins.length) return nodes;

    let nextNodes = nodes;

    plugins.forEach((plugin) => {
        if (!plugin.transformRenderTree) return;

        const transformed = plugin.transformRenderTree(nextNodes, {
            source,
            options,
        });

        if (transformed) {
            nextNodes = transformed;
        }
    });

    return nextNodes;
}

/**
 * 创建渲染期上下文
 */
function createRenderEnv(registerBlock?: XMarkdownRegisterRenderedBlock) {
    const blocks: Record<string, XMarkdownRenderedBlock> = {};
    let blockId = 0;

    return {
        env: {
            registerBlock(type: string, blockSource: string, language: string) {
                const id = registerBlock
                    ? registerBlock(type as XMarkdownRenderedBlockType, blockSource, language)
                    : `xmarkdown-block-${blockId++}`;
                blocks[id] = {
                    id,
                    type: type as XMarkdownRenderedBlockType,
                    source: blockSource,
                    language,
                };
                return id;
            },
        },
        blocks,
    };
}

/**
 * 渲染数学公式节点
 */
function renderMathNodes(
    source: string,
    displayMode: boolean,
    options: XMarkdownRenderOptions,
    nextKey: (scope?: string) => string
) {
    const runtime = options.formulaRuntime;
    if (!runtime || !runtime.katex || typeof runtime.katex.renderToString !== 'function') {
        return [createTextNode(source)];
    }

    try {
        const html = runtime.katex.renderToString(source, {
            displayMode,
            throwOnError: false,
            strict: 'ignore',
            macros: options.formulaMacros || {},
        });

        return parseHtmlFragment(html, nextKey);
    } catch (e) {
        return [createTextNode(source)];
    }
}

/**
 * 提取 token 属性对象
 */
function tokenAttrsToObject(token: any) {
    if (!token || !Array.isArray(token.attrs)) return {};

    return token.attrs.reduce((result: Record<string, any>, [name, value]: [string, any]) => {
        result[name === 'class' ? 'className' : name] = value;
        return result;
    }, {});
}

/**
 * 解析 HTML token 的标签信息
 */
function parseHtmlToken(content: string) {
    const normalized = content.trim();
    if (!normalized) return null;

    const closeMatch = normalized.match(/^<\/([A-Za-z][\w-]*)\s*>$/);
    if (closeMatch) {
        return {
            kind: 'close' as const,
            tag: closeMatch[1].toLowerCase(),
        };
    }

    const openMatch = normalized.match(/^<([A-Za-z][\w-]*)([\s\S]*?)>$/);
    if (!openMatch) return null;

    return {
        kind: /\/>$/.test(normalized) ? 'self' as const : 'open' as const,
        tag: openMatch[1].toLowerCase(),
    };
}

/**
 * 还原 inline token 的原始文本
 */
function getInlineTokenRawContent(token: any) {
    if (!token) return '';

    switch (token.type) {
    case 'text':
        return String(token.content || '');
    case 'softbreak':
    case 'hardbreak':
        return '\n';
    case 'html_inline':
        return String(token.content || '');
    default:
        return String(token.content || '');
    }
}

/**
 * 收集顶层 block 的行号范围
 */
function collectTopLevelBlockRanges(tokens: any[]) {
    const ranges: Array<{type: string; start: number; end: number}> = [];
    let depth = 0;

    tokens.forEach((token) => {
        const atTopLevel = depth === 0;
        if (atTopLevel) {
            const range = getTokenLineRange(token);
            if (range) {
                ranges.push({
                    type: token.type || token.tag || 'block',
                    ...range,
                });
            }
        }

        if (token.nesting === 1) {
            depth++;
        } else if (token.nesting === -1) {
            depth = Math.max(depth - 1, 0);
        }
    });

    return mergeAdjacentRanges(ranges);
}

/**
 * 获取 token 对应的源码行号范围
 */
function getTokenLineRange(token: any) {
    if (token && Array.isArray(token.map) && token.map.length === 2) {
        return {
            start: token.map[0],
            end: token.map[1],
        };
    }

    return null;
}

/**
 * 合并重复的顶层 block 范围
 */
function mergeAdjacentRanges(ranges: Array<{type: string; start: number; end: number}>) {
    const merged: Array<{type: string; start: number; end: number}> = [];

    ranges.forEach((range) => {
        const previous = merged[merged.length - 1];
        if (!previous || previous.start !== range.start || previous.end !== range.end) {
            merged.push(range);
        }
    });

    return merged;
}

/**
 * 生成整段文档的渲染 key
 */
function createDocumentKey(source: string) {
    return `document-${hashString(normalizeSource(source))}`;
}

/**
 * 生成顶层 block 的稳定 key
 */
function createBlockKey(type: string, index: number, source: string) {
    return `${type}-${index}-${hashString(source)}`;
}

/**
 * 统一标准化 Markdown 源码
 */
function normalizeSource(source: string) {
    return String(source || '').replace(/\r\n?/g, '\n');
}

/**
 * 生成轻量级字符串哈希
 */
function hashString(source: string) {
    let hash = 0;

    for (let i = 0; i < source.length; i++) {
        hash = (hash * 33 + source.charCodeAt(i)) >>> 0;
    }

    return hash.toString(36);
}

export type {XMarkdownRenderOptions, XMarkdownRenderResult} from './types';
export {
    renderCodeBlock,
    renderMermaidBlock,
};

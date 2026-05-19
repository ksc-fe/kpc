/**
 * 流式渲染
 */

import {_$} from '../../../i18n';
import {escapeHtml} from './utils';
import {
    createElementNode,
    createKeyGenerator,
    createTextNode,
    renderTreeNodes,
} from './renderTree';
import type {
    OpenFenceInfo,
    StreamingMarkdownSegments,
    XMarkdownRenderOptions,
    XMarkdownStreamingTailCache,
} from './types';

const STREAM_INCOMPLETE_REGEX = {
    image: [/^!\[[^\]\r\n]{0,1000}$/, /^!\[[^\r\n]{0,1000}\]\(*[^)\r\n]{0,1000}$/],
    link: [/^\[[^\]\r\n]{0,1000}$/, /^\[[^\r\n]{0,1000}\]\(*[^)\r\n]{0,1000}$/],
    html: [/^<\/$/, /^<\/?[a-zA-Z][a-zA-Z0-9-]{0,100}[^>\r\n]{0,1000}$/],
    emphasis: [/^(\*{1,3}|_{1,3})(?!\s)(?!.*\1$)[^\r\n]{0,1000}$/],
    list: [/^[-+*]\s{0,3}$/, /^[-+*]\s{1,3}(\*{1,3}|_{1,3})(?!\s)(?!.*\1$)[^\r\n]{0,1000}$/],
    'inline-code': [/^`[^`\r\n]{0,300}$/],
} as const;

/**
 * 创建流式尾部缓存
 */
export function createStreamingTailCache(): XMarkdownStreamingTailCache {
    return {
        processedLength: 0,
        completeMarkdown: '',
        pending: '',
        token: 'text',
    };
}

/**
 * 判断源码中是否包含公式语法
 */
export function containsFormulaSyntax(
    source: string,
    delimiters?: string | string[]
): boolean {
    if (!source) return false;

    const activeDelimiters = Array.isArray(delimiters)
        ? delimiters
        : delimiters ? [delimiters] : ['dollars', 'beg_end'];

    if (activeDelimiters.includes('dollars') && /(^|[^\\])\${1,2}[\s\S]+?(^|[^\\])\${1,2}/.test(source)) {
        return true;
    }

    if (activeDelimiters.includes('beg_end') && /\\begin\{[\s\S]+?\\end\{/.test(source)) {
        return true;
    }

    if (activeDelimiters.includes('brackets') && /\\\[[\s\S]+?\\\]/.test(source)) {
        return true;
    }

    return false;
}

/**
 * 将流式 Markdown 拆分为 stable 和 tail 两段
 */
export function splitMarkdownForStreaming(
    source: string,
    cache?: XMarkdownStreamingTailCache
): StreamingMarkdownSegments {
    const normalized = (source || '').replace(/\r\n?/g, '\n');
    if (!normalized) {
        resetCache(cache);
        return {stableSource: '', tailText: '', openFence: null};
    }

    const openFence = findOpenFence(normalized);
    if (openFence) {
        resetCache(cache);
        const tailText = normalized.slice(openFence.start);
        const language = extractLanguageFromFence(tailText);
        return {
            stableSource: normalized.slice(0, openFence.start),
            tailText,
            openFence: {...openFence, language},
        };
    }

    const openMathBlock = findOpenMathBlock(normalized);
    if (openMathBlock) {
        resetCache(cache);
        return {
            stableSource: normalized.slice(0, openMathBlock.start),
            tailText: normalized.slice(openMathBlock.start),
            openFence: null,
        };
    }

    const inlineTail = resolveInlineStreamingTail(normalized, cache);
    if (inlineTail.tailText) {
        return {
            stableSource: inlineTail.stableSource,
            tailText: inlineTail.tailText,
            openFence: null,
        };
    }

    const trailingBlock = findTrailingIncompleteBlock(normalized);
    if (trailingBlock) {
        resetCache(cache);
        return {
            stableSource: normalized.slice(0, trailingBlock.start),
            tailText: normalized.slice(trailingBlock.start),
            openFence: null,
        };
    }

    return {
        stableSource: normalized,
        tailText: '',
        openFence: null,
    };
}

/**
 * 渲染尚未进入 stable 区的尾部内容
 */
export function renderMarkdownTail(
    tailText: string,
    openFence: OpenFenceInfo | null = null,
    options: XMarkdownRenderOptions = {}
) {
    if (!tailText) return [];

    const nextKey = createKeyGenerator('xmarkdown-tail');
    const prefixCls = options.prefixCls || 'k';

    if (openFence) {
        return renderTreeNodes([renderOpenCodeBlock(tailText, openFence, prefixCls, nextKey)], options);
    }

    const children: any[] = [];
    tailText.split('\n').forEach((line, index, lines) => {
        children.push(createTextNode(line));
        if (index < lines.length - 1) {
            children.push(createElementNode('br', {}, [], nextKey('br')));
        }
    });

    return renderTreeNodes([createElementNode('span', {
        'data-kpc-xmarkdown-tail': 'true',
    }, children, nextKey('tail'))], options);
}

/**
 * 转义 tail 中的 HTML 文本
 */
export function escapeMarkdownHtml(text: string): string {
    return escapeHtml(text);
}

/**
 * 识别 inline 级别的未完成 token
 */
function resolveInlineStreamingTail(
    source: string,
    cache = createStreamingTailCache()
) {
    const expectedPrefix = cache.completeMarkdown + cache.pending;
    if (!source.startsWith(expectedPrefix)) {
        resetCache(cache);
    }

    const chunk = source.slice(cache.processedLength);
    if (chunk) {
        cache.processedLength += chunk.length;

        for (const char of chunk) {
            cache.pending += char;
            recognizeToken(cache);

            if (cache.token === 'text') {
                commitCache(cache);
            }
        }
    }

    const tailText = getPendingTail(cache);
    return {
        stableSource: cache.completeMarkdown,
        tailText,
    };
}

/**
 * 更新当前缓存中的 token 状态
 */
function recognizeToken(cache: XMarkdownStreamingTailCache) {
    if (cache.token === 'text') {
        if (cache.pending.startsWith('!')) {
            cache.token = 'image';
            if (!isStreamingValid(cache.token, cache.pending)) {
                cache.token = 'text';
            }
            return;
        }

        if (cache.pending.startsWith('[')) {
            cache.token = 'link';
            return;
        }

        if (cache.pending.startsWith('<')) {
            cache.token = 'html';
            return;
        }

        if (cache.pending.startsWith('*') || cache.pending.startsWith('_')) {
            cache.token = 'emphasis';
            return;
        }

        if (/^[-+*]/.test(cache.pending)) {
            cache.token = 'list';
            return;
        }

        if (cache.pending.startsWith('|')) {
            cache.token = 'table';
            return;
        }

        if (cache.pending.startsWith('`')) {
            cache.token = 'inline-code';
        }

        return;
    }

    if (cache.token === 'list') {
        const commitPrefix = getListCommitPrefix(cache.pending);
        if (commitPrefix) {
            cache.completeMarkdown += commitPrefix;
            cache.pending = cache.pending.slice(commitPrefix.length);
            cache.token = 'text';
            recognizeToken(cache);
            return;
        }
    }

    if (!isStreamingValid(cache.token, cache.pending)) {
        cache.token = 'text';
    }
}

/**
 * 提交当前已确认稳定的缓存内容
 */
function commitCache(cache: XMarkdownStreamingTailCache) {
    if (cache.pending) {
        cache.completeMarkdown += cache.pending;
        cache.pending = '';
    }
    cache.token = 'text';
}

/**
 * 获取仍需保留在 tail 中的内容
 */
function getPendingTail(cache: XMarkdownStreamingTailCache) {
    if (!cache.pending || cache.token === 'text') {
        return '';
    }

    if (cache.token === 'image' && cache.pending === '!') {
        return '';
    }

    if (cache.token === 'table' && cache.pending.split('\n').length > 2) {
        commitCache(cache);
        return '';
    }

    return cache.pending;
}

/**
 * 重置流式尾部缓存
 */
function resetCache(cache?: XMarkdownStreamingTailCache) {
    if (!cache) return;

    cache.processedLength = 0;
    cache.completeMarkdown = '';
    cache.pending = '';
    cache.token = 'text';
}

/**
 * 判断 pending 内容是否仍是未完成 token
 */
function isStreamingValid(
    token: XMarkdownStreamingTailCache['token'],
    pending: string
) {
    switch (token) {
    case 'link':
        return STREAM_INCOMPLETE_REGEX.link.some((re) => re.test(pending));
    case 'image':
        return STREAM_INCOMPLETE_REGEX.image.some((re) => re.test(pending));
    case 'html':
        return STREAM_INCOMPLETE_REGEX.html.some((re) => re.test(pending));
    case 'emphasis':
        return STREAM_INCOMPLETE_REGEX.emphasis.some((re) => re.test(pending));
    case 'list':
        return STREAM_INCOMPLETE_REGEX.list.some((re) => re.test(pending));
    case 'table':
        return isTableIncomplete(pending);
    case 'inline-code':
        return STREAM_INCOMPLETE_REGEX['inline-code'].some((re) => re.test(pending));
    default:
        return false;
    }
}

/**
 * 判断当前表格片段是否仍未闭合
 */
function isTableIncomplete(markdown: string) {
    if (markdown.includes('\n\n')) return false;

    const lines = markdown.split('\n');
    if (lines.length <= 1) return true;

    const [header, separator] = lines;
    if (!/^\|.*\|$/.test(header.trim())) return false;

    const columns = separator.trim()
        .split('|')
        .map((column) => column.trim())
        .filter(Boolean);

    const separatorRegex = /^:?-+:?$/;
    return columns.every((column, index) => {
        return index === columns.length - 1
            ? column === ':' || separatorRegex.test(column)
            : separatorRegex.test(column);
    });
}

/**
 * 识别列表前缀中可提前提交的部分
 */
function getListCommitPrefix(pending: string) {
    const listPrefix = pending.match(/^([-+*]\s{0,3})/)?.[1];
    const rest = listPrefix ? pending.slice(listPrefix.length) : '';
    return listPrefix && rest.startsWith('`') ? listPrefix : null;
}

/**
 * 查找未闭合的代码围栏
 */
function findOpenFence(source: string): {marker: string; size: number; start: number} | null {
    let lineStart = 0;
    let openFence: {marker: string; size: number; start: number} | null = null;

    while (lineStart <= source.length) {
        const lineEnd = source.indexOf('\n', lineStart);
        const nextLineStart = lineEnd === -1 ? source.length + 1 : lineEnd + 1;
        const line = lineEnd === -1 ? source.slice(lineStart) : source.slice(lineStart, lineEnd);
        const match = line.match(/^ {0,3}(`{3,}|~{3,})/);

        if (match) {
            const marker = match[1].charAt(0);
            const size = match[1].length;

            if (!openFence) {
                openFence = {marker, size, start: lineStart};
            } else if (openFence.marker === marker && size >= openFence.size) {
                openFence = null;
            }
        }

        if (lineEnd === -1) break;
        lineStart = nextLineStart;
    }

    return openFence;
}

/**
 * 查找未闭合的块级公式
 */
function findOpenMathBlock(source: string): {start: number} | null {
    const lines = source.split('\n');
    let inMathBlock = false;
    let mathBlockStart = -1;
    let currentPos = 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const lineTrimmed = line.trim();

        if (lineTrimmed === '$$') {
            if (!inMathBlock) {
                inMathBlock = true;
                mathBlockStart = currentPos + line.indexOf('$$');
            } else {
                inMathBlock = false;
                mathBlockStart = -1;
            }
        }

        currentPos += line.length + 1;
    }

    if (inMathBlock && mathBlockStart >= 0) {
        return {start: mathBlockStart};
    }

    return null;
}

/**
 * 提取未闭合代码围栏的语言标记
 */
function extractLanguageFromFence(tailText: string): string | undefined {
    const firstLineEnd = tailText.indexOf('\n');
    const firstLine = firstLineEnd === -1 ? tailText : tailText.slice(0, firstLineEnd);
    const match = firstLine.match(/^ {0,3}`{3,}(\S*)/);
    return match && match[1] ? match[1].trim().toLowerCase() : undefined;
}

/**
 * 渲染未闭合的代码围栏
 */
function renderOpenCodeBlock(
    tailText: string,
    openFence: OpenFenceInfo,
    prefixCls: string,
    nextKey: (scope?: string) => string
) {
    const lines = tailText.split('\n');
    const language = openFence.language || '';
    const languageClass = language ? `hljs language-${language}` : 'hljs';
    const languageLabel = language || _$('代码');
    const codeLines = lines.slice(1).join('\n');

    return createElementNode('div', {
        className: `${prefixCls}-xmarkdown-code-block`,
        'data-kpc-code-block': 'true',
        'data-kpc-language': languageLabel,
        'data-kpc-open-fence': 'true',
    }, [
        createElementNode('div', {
            className: `${prefixCls}-xmarkdown-code-toolbar`,
        }, [
            createElementNode('span', {
                className: `${prefixCls}-xmarkdown-code-language`,
            }, [createTextNode(languageLabel)], nextKey('code-language')),
        ], nextKey('code-toolbar')),
        createElementNode('div', {
            className: `${prefixCls}-xmarkdown-code-body`,
        }, [
            createElementNode('pre', {
                className: 'hljs',
            }, [
                createElementNode('code', {
                    className: languageClass,
                }, [createTextNode(codeLines)], nextKey('open-code')),
            ], nextKey('open-pre')),
        ], nextKey('code-body')),
    ], nextKey('open-block'));
}

/**
 * 查找行尾可能尚未完成的块级内容
 */
function findTrailingIncompleteBlock(source: string): {start: number} | null {
    if (!source || source.endsWith('\n')) return null;

    const lastNewLineIndex = source.lastIndexOf('\n');
    const start = lastNewLineIndex === -1 ? 0 : lastNewLineIndex + 1;
    const line = source.slice(start);

    if (/^ {0,3}#{1,6}(?:\s|$)/.test(line)) {
        return {start};
    }

    if (hasUnmatchedInlineCode(line)) {
        return {start};
    }

    if (hasUnmatchedEmphasis(line)) {
        return {start};
    }

    if (hasUnmatchedMath(line)) {
        return {start};
    }

    return null;
}

/**
 * 判断行内代码是否未闭合
 */
function hasUnmatchedInlineCode(line: string): boolean {
    const matches = line.match(/`+/g);
    if (!matches) return false;
    return matches.reduce((count, value) => count + value.length, 0) % 2 === 1;
}

/**
 * 判断强调语法是否未闭合
 */
function hasUnmatchedEmphasis(line: string): boolean {
    if (countUnescapedMarkers(line, '**') % 2 === 1) return true;
    if (countUnescapedMarkers(line, '*') % 2 === 1) return true;
    if (countUnescapedMarkers(line, '__') % 2 === 1) return true;
    if (countUnescapedMarkers(line, '_') % 2 === 1) return true;
    return false;
}

/**
 * 判断行内数学公式是否未闭合
 */
function hasUnmatchedMath(line: string): boolean {
    let count = 0;

    for (let i = 0; i < line.length; i++) {
        if (line.charAt(i) !== '$') continue;
        if (isEscaped(line, i)) continue;

        count++;

        while (i + 1 < line.length && line.charAt(i + 1) === '$') {
            i++;
        }
    }

    return count % 2 === 1;
}

/**
 * 统计未转义标记的出现次数
 */
function countUnescapedMarkers(line: string, marker: string): number {
    let count = 0;
    const markerLength = marker.length;

    for (let i = 0; i <= line.length - markerLength; i++) {
        if (line.slice(i, i + markerLength) !== marker) continue;
        if (isEscaped(line, i)) continue;
        if (markerLength === 1 && line.charAt(i + 1) === marker) continue;
        if (marker === '__' && line.charAt(i + markerLength) === '_') continue;

        count++;
        i += markerLength - 1;
    }

    return count;
}

/**
 * 判断当前位置是否被转义
 */
function isEscaped(line: string, index: number): boolean {
    let backslashCount = 0;
    for (let i = index - 1; i >= 0 && line.charAt(i) === '\\'; i--) {
        backslashCount++;
    }
    return backslashCount % 2 === 1;
}

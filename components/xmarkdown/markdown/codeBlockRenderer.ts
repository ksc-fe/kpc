/**
 * 代码块自定义渲染
 */

import {normalizeLanguage} from './highlight';
import {createIslandNode} from './renderTree';
import type {
    XMarkdownCodeBlockRenderContext,
    XMarkdownCodeBlockRenderers,
    XMarkdownRenderOptions,
    XMarkdownRenderedBlockType,
} from './types';

/**
 * 使用自定义代码块渲染器
 */
export function renderCustomCodeBlock(
    source: string,
    info: string,
    blockType: XMarkdownRenderedBlockType,
    options: XMarkdownRenderOptions
) {
    const context = createCodeBlockRenderContext(source, info, blockType, options);
    const renderer = resolveCodeBlockRenderer(context, options.codeBlockRenderers);
    if (!renderer) return null;

    const rendered = renderer(context);
    if (rendered === undefined) return null;

    return createIslandNode(rendered, true);
}

/**
 * 创建代码块渲染上下文
 */
function createCodeBlockRenderContext(
    source: string,
    info: string,
    blockType: XMarkdownRenderedBlockType,
    options: XMarkdownRenderOptions
): XMarkdownCodeBlockRenderContext {
    const language = extractCodeBlockLanguage(info);

    return {
        source,
        info,
        language,
        normalizedLanguage: normalizeLanguage(language),
        blockType,
        prefixCls: options.prefixCls || 'k',
        streaming: !!options.streaming,
        typing: !!options.typing,
    };
}

/**
 * 按 fenced code 语言匹配自定义渲染器
 */
function resolveCodeBlockRenderer(
    context: XMarkdownCodeBlockRenderContext,
    renderers?: XMarkdownCodeBlockRenderers
) {
    if (!renderers) return;

    if (context.language && renderers[context.language]) {
        return renderers[context.language];
    }

    if (context.normalizedLanguage && renderers[context.normalizedLanguage]) {
        return renderers[context.normalizedLanguage];
    }
}

/**
 * 提取 fenced code 的语言标记
 */
function extractCodeBlockLanguage(info: string) {
    return info ? info.split(/\s+/, 1)[0].trim().toLowerCase() : '';
}

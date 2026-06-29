/**
 * Markdown 渲染模块
 *
 * 提供可配置的 Markdown 渲染功能，支持：
 * - 代码语法高亮
 * - 数学公式（KaTeX）
 * - Mermaid 图表
 * - 流式渲染优化
 * - 自定义标签渲染器
 */

// 类型导出
export type {
    XMarkdownFormulaDelimiter,
    XMarkdownRenderOptions,
    XMarkdownRenderResult,
    XMarkdownFormulaRuntime,
    XMarkdownPlugin,
    XMarkdownRenderTreeTransform,
    XMarkdownRenderTreeTransformContext,
    XMarkdownTagAttrs,
    XMarkdownTagAttrsGetter,
    XMarkdownTagRenderers,
    XMarkdownTagAttrsContext,
    XMarkdownTagRenderContext,
    XMarkdownCodeBlockRenderContext,
    XMarkdownCodeBlockRenderer,
    XMarkdownCodeBlockRenderers,
    XMarkdownRenderedIsland,
    XMarkdownRenderedBlock,
    XMarkdownRenderedBlockType,
    XMarkdownRenderedStableBlock,
    XMarkdownRegisterRenderedBlock,
    XMarkdownSourceBlock,
    XMarkdownStreamingRenderResult,
} from './types';
export type {
    XMarkdownRenderTreeNode,
    XMarkdownRenderTreeElementNode,
    XMarkdownRenderTreeIslandNode,
    XMarkdownRenderTreeTextNode,
} from './renderTree';

// 渲染器
export {createMarkdownRenderer} from './renderer';

// 流式渲染
export {
    containsFormulaSyntax,
    resolveStreamingRenderResult,
} from './streaming';

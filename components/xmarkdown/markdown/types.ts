/**
 * 类型定义
 *
 * 集中定义 Markdown 渲染相关的所有类型。
 */

import type {XMarkdownRenderTreeNode} from './renderTree';

/** 数学公式分隔符类型 */
export type XMarkdownFormulaDelimiter =
    | 'dollars'
    | 'brackets'
    | 'doxygen'
    | 'gitlab'
    | 'julia'
    | 'kramdown'
    | 'beg_end';

/** Markdown 渲染配置 */
export interface XMarkdownRenderOptions {
    prefixCls?: string
    allowHtml?: boolean
    showCodeHeader?: boolean
    enableMermaid?: boolean
    enableFormula?: boolean
    formulaDelimiters?: XMarkdownFormulaDelimiter | XMarkdownFormulaDelimiter[]
    formulaMacros?: Record<string, string>
    sanitizeOptions?: Record<string, any>
    plugins?: XMarkdownPlugin[]
    tagAttrs?: XMarkdownTagAttrs
    tagRenderers?: XMarkdownTagRenderers
    codeBlockRenderers?: XMarkdownCodeBlockRenderers
    streaming?: boolean
    typing?: boolean
    formulaRuntime?: XMarkdownFormulaRuntime | null
    normalizeRendererOutput?: (value: any) => any
}

/** 数学公式运行时（KaTeX + texmath） */
export interface XMarkdownFormulaRuntime {
    katex: any
    texmath: any
}

/** 标签属性上下文 */
export interface XMarkdownTagAttrsContext {
    tag: string
    attrs: Record<string, any>
    html: string
    textContent: string
}

/** 标签属性获取器 */
export type XMarkdownTagAttrsGetter = (context: XMarkdownTagAttrsContext) => Record<string, any> | undefined;
export type XMarkdownTagAttrs = Record<string, Record<string, any> | XMarkdownTagAttrsGetter>;

/** 标签渲染上下文 */
export interface XMarkdownTagRenderContext extends XMarkdownTagAttrsContext {
    innerHTML: string
    streaming: boolean
    typing: boolean
}

/** 标签渲染器 */
export type XMarkdownTagRenderer = (context: XMarkdownTagRenderContext) => any;
export type XMarkdownTagRenderers = Record<string, XMarkdownTagRenderer>;

/** 代码块渲染上下文 */
export interface XMarkdownCodeBlockRenderContext {
    source: string
    info: string
    language: string
    normalizedLanguage: string
    blockType: XMarkdownRenderedBlockType
    prefixCls: string
    streaming: boolean
    typing: boolean
}

/** 代码块渲染器 */
export type XMarkdownCodeBlockRenderer = (context: XMarkdownCodeBlockRenderContext) => any;
export type XMarkdownCodeBlockRenderers = Record<string, XMarkdownCodeBlockRenderer>;

/** 渲染树转换上下文 */
export interface XMarkdownRenderTreeTransformContext {
    source: string
    options: XMarkdownRenderOptions
}

/** 渲染树转换器 */
export type XMarkdownRenderTreeTransform = (
    nodes: XMarkdownRenderTreeNode[],
    context: XMarkdownRenderTreeTransformContext
) => XMarkdownRenderTreeNode[] | void;

/** Markdown 扩展插件 */
export interface XMarkdownPlugin {
    extendMarkdown?: (markdown: any) => void
    transformRenderTree?: XMarkdownRenderTreeTransform
}

/** 渲染后的岛屿（用于自定义标签渲染） */
export interface XMarkdownRenderedIsland {
    id: string
    value: any
}

/** 代码块类型 */
export type XMarkdownRenderedBlockType = 'code' | 'mermaid';

/** 渲染后的代码块信息 */
export interface XMarkdownRenderedBlock {
    id: string
    type: XMarkdownRenderedBlockType
    source: string
    language: string
}

export type XMarkdownRegisterRenderedBlock = (
    type: XMarkdownRenderedBlockType,
    source: string,
    language: string
) => string;

/** Markdown 渲染结果 */
export interface XMarkdownRenderResult {
    nodes: any[]
    blocks: Record<string, XMarkdownRenderedBlock>
}

export interface XMarkdownSourceBlock {
    key: string
    source: string
}

export interface XMarkdownRenderedStableBlock extends XMarkdownSourceBlock {
    nodes: any[]
    blocks: Record<string, XMarkdownRenderedBlock>
}

/** 流式渲染结果 */
export interface XMarkdownStreamingRenderResult {
    source: string
    trailingNodes: any[]
}

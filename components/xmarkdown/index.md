---
title: Markdown 富文本
category: AI对话组件
order: 111
sidebar: doc
---

> **v3.8.0 新增**

# 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 要渲染的 Markdown 内容，支持 `string` 和 `number` | `string` &#124; `number` | `undefined` |
| loading | 展示加载态。适合在内容尚未返回、或希望先占位再展示正文时使用 | `boolean` | `false` |
| typing | 开启打字动画，也可传入步进配置。适合 AI 输出、演示讲解等需要渐进展示的场景。`suffix` 控制生成中的三点动效；`keepPrefix` 控制内容修订时是否保留公共前缀，默认 `true`；`resumeFrom` 可指定断线重连后的已渲染起点 | `boolean` &#124; `XMarkdownTyping` | `false` |
| streaming | 标记当前内容仍在持续追加。常与 `typing` 配合，用于承接模型流式输出 | `boolean` | `false` |
| allowHtml | 允许解析 Markdown 中的原始 HTML。适合需要混排少量业务 HTML 片段时使用；处理不可信内容时建议同时关注 `sanitizeOptions` | `boolean` | `false` |
| showCodeHeader | 控制代码块头部工具栏是否展示。想保留代码块样式但隐藏语言栏和复制入口时可以关闭 | `boolean` | `true` |
| enableMermaid | 控制 `mermaid` 是否按图表渲染 | `boolean` | `true` |
| mermaidConfig | Mermaid 配置项。适合统一调整主题、间距、配色等图表表现 | `Partial<MermaidConfig>` | `undefined` |
| enableFormula | 控制公式渲染能力是否开启 | `boolean` | `true` |
| formulaDelimiters | 指定启用哪些公式分隔符模式。适合和业务侧已有 Markdown 约定对齐 | `XMarkdownFormulaDelimiter \| XMarkdownFormulaDelimiter[]` | `["dollars", "beg_end"]` |
| formulaMacros | 传入 KaTeX 宏定义，适合沉淀业务里的常用公式别名。key 需包含反斜杠前缀，如 `'\\RR'` | `Record<string, string>` | `undefined` |
| sanitizeOptions | 额外的 DOMPurify 配置。需要放开自定义标签、属性或细调 HTML 白名单时使用；适合在明确内容来源和渲染要求时配置 | `Record<string, any>` | `undefined` |
| plugins | Markdown 扩展插件。适合做解析扩展或统一的渲染树加工，属于更底层的扩展能力 | `XMarkdownPlugin[]` | `undefined` |
| tagAttrs | 按标签补充属性。适合统一补 `class`、`data-*`、`target / rel` 等轻量增强 | `XMarkdownTagAttrs` | `undefined` |
| tagRenderers | 按标签接管渲染。适合把某些标签映射成业务组件或组件库组件；日常定制优先级通常高于 `plugins` | `XMarkdownTagRenderers` | `undefined` |
| codeBlockRenderers | 按 code 的语言类型接管整块代码块渲染。适合自定义 `ts`、`json`、`mermaid` 等代码块样式；接管后对应块的展示行为由使用方控制 | `XMarkdownCodeBlockRenderers` | `undefined` |

```ts
interface XMarkdownTyping {
    interval?: number
    step?: number
    suffix?: boolean
    keepPrefix?: boolean
    resumeFrom?: string | number | 'content'
}

type XMarkdownFormulaDelimiter =
    | 'dollars'
    | 'brackets'
    | 'doxygen'
    | 'gitlab'
    | 'julia'
    | 'kramdown'
    | 'beg_end';

interface MermaidConfig {
    [key: string]: any
}

// plugins

interface XMarkdownRenderTreeTextNode {
    type: 'text'
    content: string
}

interface XMarkdownRenderTreeElementNode {
    type: 'element'
    tag: string
    attrs: Record<string, any>
    children: XMarkdownRenderTreeNode[]
    key?: string
}

interface XMarkdownRenderTreeIslandNode {
    type: 'island'
    value: any
    block: boolean
}

type XMarkdownRenderTreeNode =
    | XMarkdownRenderTreeTextNode
    | XMarkdownRenderTreeElementNode
    | XMarkdownRenderTreeIslandNode;

interface XMarkdownRenderOptions {
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
}

interface XMarkdownRenderTreeTransformContext {
    source: string
    options: XMarkdownRenderOptions
}

type XMarkdownRenderTreeTransform = (
    nodes: XMarkdownRenderTreeNode[],
    context: XMarkdownRenderTreeTransformContext
) => XMarkdownRenderTreeNode[] | void;

interface XMarkdownPlugin {
    extendMarkdown?: (markdown: MarkdownIt) => void
    transformRenderTree?: XMarkdownRenderTreeTransform
}

// tagAttrs

interface XMarkdownTagAttrsContext {
    tag: string
    attrs: Record<string, any>
    html: string
    textContent: string
}

type XMarkdownTagAttrsGetter = (
    context: XMarkdownTagAttrsContext
) => Record<string, any> | undefined;

type XMarkdownTagAttrs = Record<
    string,
    Record<string, any> | XMarkdownTagAttrsGetter
>;

// tagRenderers

interface XMarkdownTagRenderContext extends XMarkdownTagAttrsContext {
    innerHTML: string
    streaming: boolean
    typing: boolean
}

type XMarkdownTagRenderer = (context: XMarkdownTagRenderContext) => any;

type XMarkdownTagRenderers = Record<string, XMarkdownTagRenderer>;

// codeBlockRenderers

interface XMarkdownCodeBlockRenderContext {
    source: string
    info: string
    language: string
    normalizedLanguage: string
    blockType: 'code' | 'mermaid'
    prefixCls: string
    streaming: boolean
    typing: boolean
}

type XMarkdownCodeBlockRenderer = (
    context: XMarkdownCodeBlockRenderContext
) => any;

type XMarkdownCodeBlockRenderers = Record<
    string,
    XMarkdownCodeBlockRenderer
>;
```

`XMarkdownRenderTreeNode` 是 `transformRenderTree` 收到的节点结构：

- `text`：普通文本节点，只包含 `content`
- `element`：普通标签节点，包含 `tag / attrs / children`
- `island`：内部渲染节点类型，用于承载自定义渲染结果（当前主要由 codeBlockRenderers 产生）

示例（`transformRenderTree` 中可见到的真实节点形态）：

```ts
const exampleNodes: XMarkdownRenderTreeNode[] = [
    {
        type: 'element',
        tag: 'p',
        attrs: {},
        children: [
            {type: 'text', content: '这是一段普通文本。'},
        ],
    },
    {
        type: 'island',
        // island.value 是自定义渲染结果（如 codeBlockRenderers 返回的 VNode）
        value: VNode,
        block: true,
    },
];
```

`XMarkdownRenderTreeTransformContext` 里常用两个字段：

- `source`：当前这一轮传入的原始 Markdown 字符串
- `options`：当前渲染配置，结构与组件属性基本对应，常见如 `streaming / typing / allowHtml / tagRenderers`

# 事件

| 名称 | 说明 | 回调参数 |
| --- | --- | --- |
| typing | 打字动画推进时触发，适合联动外部状态或做进度展示 | `(renderedContent: string, currentContent: string) => void` |
| typingComplete | 当前这一轮内容展示完成时触发 | `(content: string) => void` |
| codeCopy | 成功复制代码或源码后触发 | `(code: string, language: string) => void` |
| mermaidError | Mermaid 图表渲染失败时触发 | `(error: Error, source: string) => void` |

# 扩展点

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| loading | 自定义加载态 | - |
| empty | 自定义空态内容。仅在没有内容、也不处于 loading / streaming 等等待状态时显示 | - |

# 使用建议

- 需要补属性但不改结构时，优先用 `tagAttrs`。
- 需要把某个标签替换成业务组件时，优先用 `tagRenderers`。
- 需要按语言接管 fenced code 时，使用 `codeBlockRenderers`。
- 需要扩展 Markdown 解析规则或统一加工渲染树时，使用 `plugins`。
- 像模型输出里的 `[1]` 引用、来源列表这类业务协议，建议通过 `plugins` 显式适配，不建议把它们当成组件默认语义依赖。
- 处理不可信内容时，建议保持 `allowHtml` 关闭；确实需要开启时，再按需配置 `sanitizeOptions`。
- `plugins` 和 `codeBlockRenderers` 更适合高级自定义场景，建议优先使用更高层、影响范围更小的扩展方式。

# 外部参考

- `sanitizeOptions`：参考 [DOMPurify 官方配置说明](https://github.com/cure53/DOMPurify)
- `mermaidConfig`：参考 [Mermaid Config Schema](https://mermaid.js.org/config/schema-docs/config)
- `formulaMacros`：参考 [KaTeX Options / macros](https://katex.org/docs/options)
- `formulaDelimiters`：参考 [markdown-it-texmath delimiters](https://github.com/goessner/markdown-it-texmath)
- `plugins`：参考 [markdown-it 官方文档](https://github.com/markdown-it/markdown-it)

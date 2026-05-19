import {Component, TypeDefs} from 'intact';
import type {MermaidConfig} from 'mermaid';
import template from './xmarkdown.vdt';
import {useConfigContext} from '../config';
import type {Events} from '../types';
import {useXMarkdownDisplay} from './useXMarkdownDisplay';
import {useXMarkdownContent} from './useXMarkdownContent';
import type {
    XMarkdownCodeBlockRenderers,
    XMarkdownFormulaDelimiter,
    XMarkdownPlugin,
    XMarkdownTagAttrs,
    XMarkdownTagRenderers,
} from './markdown';

export interface XMarkdownTyping {
    interval?: number
    step?: number
}

export interface XMarkdownProps {
    content?: string | number
    loading?: boolean
    typing?: boolean | XMarkdownTyping
    streaming?: boolean
    allowHtml?: boolean
    showCodeHeader?: boolean
    enableMermaid?: boolean
    mermaidConfig?: Partial<MermaidConfig>
    enableFormula?: boolean
    formulaDelimiters?: XMarkdownFormulaDelimiter | XMarkdownFormulaDelimiter[]
    formulaMacros?: Record<string, string>
    sanitizeOptions?: Record<string, any>
    plugins?: XMarkdownPlugin[]
    tagAttrs?: XMarkdownTagAttrs
    tagRenderers?: XMarkdownTagRenderers
    codeBlockRenderers?: XMarkdownCodeBlockRenderers
}

export interface XMarkdownEvents {
    typing: [string, string]
    typingComplete: [string]
    codeCopy: [string, string]
    mermaidError: [Error, string]
}

export interface XMarkdownBlocks {
    loading: null
    empty: null
}

const typeDefs: Required<TypeDefs<XMarkdownProps>> = {
    content: [String, Number],
    loading: Boolean,
    typing: [Boolean, Object],
    streaming: Boolean,
    allowHtml: Boolean,
    showCodeHeader: Boolean,
    enableMermaid: Boolean,
    mermaidConfig: Object,
    enableFormula: Boolean,
    formulaDelimiters: [String, Array],
    formulaMacros: Object,
    sanitizeOptions: Object,
    plugins: Array,
    tagAttrs: Object,
    tagRenderers: Object,
    codeBlockRenderers: Object,
};

/**
 * 组件默认属性
 */
const defaults = (): Partial<XMarkdownProps> => ({
    content: undefined,
    loading: false,
    typing: false,
    streaming: false,
    allowHtml: false,
    showCodeHeader: true,
    enableMermaid: true,
    mermaidConfig: undefined,
    enableFormula: true,
    formulaDelimiters: ['dollars', 'beg_end'],
    formulaMacros: undefined,
    sanitizeOptions: undefined,
    plugins: undefined,
    tagAttrs: undefined,
    tagRenderers: undefined,
    codeBlockRenderers: undefined,
});

/**
 * 组件事件声明
 */
const events: Events<XMarkdownEvents> = {
    typing: true,
    typingComplete: true,
    codeCopy: true,
    mermaidError: true,
};

export class XMarkdown extends Component<XMarkdownProps, XMarkdownEvents, XMarkdownBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private config = useConfigContext();
    private display = useXMarkdownDisplay(() => this.getPrefixCls());
    private contentModel = useXMarkdownContent(
        this.display.getRenderedBlockData,
        () => this.getPrefixCls()
    );

    /**
     * 挂载后同步展示与交互状态
     */
    mounted() {
        this.display.onMounted();
        this.contentModel.onMounted();
    }

    /**
     * 更新后同步交互内容
     */
    updated() {
        this.contentModel.onUpdated();
    }

    /**
     * 卸载前清理资源
     */
    beforeUnmount() {
        this.contentModel.onBeforeUnmount();
        this.display.onBeforeUnmount();
    }

    /**
     * 获取组件前缀类名
     */
    private getPrefixCls() {
        return this.config?.k || 'k';
    }
}

import DOMPurify from 'dompurify';
import {createVNode} from 'intact';
import type {XMarkdownRenderOptions} from './types';

export interface XMarkdownRenderTreeTextNode {
    type: 'text'
    content: string
}

export interface XMarkdownRenderTreeElementNode {
    type: 'element'
    tag: string
    attrs: Record<string, any>
    children: XMarkdownRenderTreeNode[]
    key?: string
}

export interface XMarkdownRenderTreeIslandNode {
    type: 'island'
    value: any
    block: boolean
}

export type XMarkdownRenderTreeNode =
    | XMarkdownRenderTreeTextNode
    | XMarkdownRenderTreeElementNode
    | XMarkdownRenderTreeIslandNode;

const VOID_TAGS = new Set([
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr',
]);
const BLOCK_TAGS = new Set([
    'address', 'article', 'aside', 'blockquote', 'details', 'dialog', 'div', 'dl', 'fieldset',
    'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header',
    'hr', 'main', 'nav', 'ol', 'p', 'pre', 'section', 'table', 'ul',
]);

/**
 * 创建节点 key 生成器
 */
export function createKeyGenerator(prefix = 'xmarkdown-node') {
    let index = 0;
    return (scope = 'node') => `${prefix}-${scope}-${index++}`;
}

/**
 * 创建文本节点
 */
export function createTextNode(content: string): XMarkdownRenderTreeTextNode {
    return {
        type: 'text',
        content,
    };
}

/**
 * 创建元素节点
 */
export function createElementNode(
    tag: string,
    attrs: Record<string, any> = {},
    children: XMarkdownRenderTreeNode[] = [],
    key?: string
): XMarkdownRenderTreeElementNode {
    return {
        type: 'element',
        tag,
        attrs,
        children,
        key,
    };
}

/**
 * 创建自定义渲染节点
 */
export function createIslandNode(value: any, block = false): XMarkdownRenderTreeIslandNode {
    return {
        type: 'island',
        value,
        block,
    };
}

/**
 * 清洗并解析 HTML 片段
 */
export function parseSanitizedHtmlFragment(
    html: string,
    options: XMarkdownRenderOptions,
    nextKey: (scope?: string) => string
) {
    const sanitized = sanitizeHtmlFragment(html, options.sanitizeOptions);
    return parseHtmlFragment(sanitized, nextKey);
}

/**
 * 解析 HTML 片段为渲染树节点
 */
export function parseHtmlFragment(
    html: string,
    nextKey: (scope?: string) => string
) {
    if (!html) return [] as XMarkdownRenderTreeNode[];
    if (typeof DOMParser === 'undefined') {
        return [createTextNode(html)];
    }

    const parser = new DOMParser();
    const document = parser.parseFromString(`<body>${html}</body>`, 'text/html');
    return convertDomChildrenToRenderNodes(document.body.childNodes, nextKey);
}

/**
 * 将渲染树节点转换为 VNode
 */
export function renderTreeNodes(
    nodes: XMarkdownRenderTreeNode[],
    options: XMarkdownRenderOptions
) {
    const rendered: any[] = [];
    nodes.forEach((node) => {
        appendRenderedValue(rendered, renderTreeNode(node, options));
    });
    return rendered;
}

/**
 * 序列化渲染树节点
 */
export function serializeRenderTreeNodes(nodes: XMarkdownRenderTreeNode[]) {
    return nodes.map(serializeRenderTreeNode).join('');
}

/**
 * 获取渲染树的纯文本内容
 */
export function getTextContent(nodes: XMarkdownRenderTreeNode[]) {
    return nodes.map(getNodeTextContent).join('');
}

/**
 * 渲染单个渲染树节点
 */
function renderTreeNode(
    node: XMarkdownRenderTreeNode,
    options: XMarkdownRenderOptions
): any {
    if (node.type === 'text') {
        return node.content;
    }

    if (node.type === 'island') {
        return normalizeRendererOutput(node.value, options);
    }

    const normalizedParagraph = normalizeParagraphNode(node, options);
    if (normalizedParagraph) {
        return normalizedParagraph;
    }

    const attrs = applyTagAttrs(node, options);
    const renderer = options.tagRenderers?.[node.tag];

    if (renderer) {
        const rendered = renderer({
            tag: node.tag,
            attrs,
            html: serializeElement(node.tag, attrs, node.children),
            innerHTML: serializeRenderTreeNodes(node.children),
            textContent: getTextContent(node.children),
            streaming: !!options.streaming,
            typing: !!options.typing,
        });

        if (rendered !== undefined) {
            return normalizeRendererOutput(rendered, options);
        }
    }

    const children = renderTreeNodes(node.children, options);
    const props = toVNodeProps(attrs, node.key);

    return createVNode(node.tag, props, children);
}

/**
 * 规范化只包含块级子节点的段落
 */
function normalizeParagraphNode(
    node: XMarkdownRenderTreeElementNode,
    options: XMarkdownRenderOptions
) {
    if (node.tag !== 'p') return null;

    const blockChildren = node.children.filter((child) => isParagraphBlockChild(child, options));
    if (!blockChildren.length) return null;

    const hasInlineContent = node.children.some((child) => {
        if (isParagraphBlockChild(child, options)) return false;
        return child.type !== 'text' || !!child.content.trim();
    });
    if (hasInlineContent) return null;

    const rendered: any[] = [];
    node.children.forEach((child) => {
        if (child.type === 'text' && !child.content.trim()) return;
        appendRenderedValue(rendered, renderTreeNode(child, options));
    });

    return rendered;
}

/**
 * 判断节点是否可作为段落中的块级子节点
 */
function isParagraphBlockChild(
    node: XMarkdownRenderTreeNode,
    options: XMarkdownRenderOptions
) {
    if (node.type === 'island') {
        return node.block;
    }

    return node.type === 'element'
        && (BLOCK_TAGS.has(node.tag) || !!options.tagRenderers?.[node.tag]);
}

/**
 * 应用默认属性和自定义标签属性
 */
function applyTagAttrs(
    node: XMarkdownRenderTreeElementNode,
    options: XMarkdownRenderOptions
) {
    const attrs = {...node.attrs};
    applyDefaultElementAttrs(node.tag, attrs);

    const resolver = options.tagAttrs?.[node.tag];
    if (!resolver) return attrs;

    const resolved = typeof resolver === 'function'
        ? resolver({
            tag: node.tag,
            attrs: {...attrs},
            html: serializeElement(node.tag, attrs, node.children),
            textContent: getTextContent(node.children),
        })
        : resolver;

    if (!resolved) return attrs;
    return mergeAttrs(attrs, resolved);
}

/**
 * 合并标签属性
 */
function mergeAttrs(
    baseAttrs: Record<string, any>,
    patch: Record<string, any>
) {
    const attrs = {...baseAttrs};

    Object.keys(patch).forEach((name) => {
        const value = patch[name];
        const normalizedName = normalizeAttrName(name);

        if (value === undefined || value === null || value === false) {
            delete attrs[normalizedName];
            return;
        }

        attrs[normalizedName] = value;
    });

    return attrs;
}

/**
 * 规范化自定义渲染器输出
 */
function normalizeRendererOutput(value: any, options: XMarkdownRenderOptions) {
    const normalize = options.normalizeRendererOutput;
    return normalize ? normalize(value) : value;
}

/**
 * 将渲染结果安全地压入数组
 */
function appendRenderedValue(target: any[], value: any) {
    if (value === undefined || value === null || value === false) return;

    if (Array.isArray(value)) {
        value.forEach((item) => appendRenderedValue(target, item));
        return;
    }

    target.push(value);
}

/**
 * 应用元素默认属性
 */
function applyDefaultElementAttrs(tag: string, attrs: Record<string, any>) {
    if (tag === 'a') {
        const href = attrs.href || '';
        if (/^(https?:)?\/\//i.test(href)) {
            if (!attrs.target) {
                attrs.target = '_blank';
            }
            if (!attrs.rel) {
                attrs.rel = 'noopener noreferrer';
            }
        }
        return;
    }

    if (tag === 'img') {
        if (!attrs.loading) {
            attrs.loading = 'lazy';
        }
        if (!attrs.decoding) {
            attrs.decoding = 'async';
        }
    }
}

/**
 * 将属性对象转换为 VNode props
 */
function toVNodeProps(attrs: Record<string, any>, key?: string) {
    const props = key ? {key} : {} as Record<string, any>;

    Object.keys(attrs).forEach((name) => {
        const value = attrs[name];
        if (value === undefined || value === null || value === false) return;

        props[normalizeAttrName(name)] = value;
    });

    return props;
}

/**
 * 规范化属性名
 */
function normalizeAttrName(name: string) {
    return name === 'class' ? 'className' : name;
}

/**
 * 清洗 HTML 片段
 */
function sanitizeHtmlFragment(html: string, sanitizeOptions?: Record<string, any>) {
    return DOMPurify.sanitize(html, {
        USE_PROFILES: {html: true, mathMl: true},
        ALLOW_DATA_ATTR: true,
        ADD_ATTR: ['target', 'rel', 'class', 'loading', 'decoding', 'type', 'title'],
        ...sanitizeOptions,
    });
}

/**
 * 将 DOM 子节点转换为渲染树节点
 */
function convertDomChildrenToRenderNodes(
    nodes: NodeListOf<ChildNode> | ChildNode[],
    nextKey: (scope?: string) => string
) {
    const result: XMarkdownRenderTreeNode[] = [];

    Array.from(nodes).forEach((node) => {
        appendDomNode(result, node, nextKey);
    });

    return result;
}

/**
 * 追加单个 DOM 节点到渲染树结果
 */
function appendDomNode(
    result: XMarkdownRenderTreeNode[],
    node: ChildNode,
    nextKey: (scope?: string) => string
) {
    if (node.nodeType === Node.TEXT_NODE) {
        if (!node.textContent) return;
        result.push(createTextNode(node.textContent));
        return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return;

    const element = node as Element;
    const attrs = Array.from(element.attributes).reduce<Record<string, any>>((current, attribute) => {
        current[normalizeAttrName(attribute.name)] = attribute.value;
        return current;
    }, {});

    result.push(createElementNode(
        element.tagName.toLowerCase(),
        attrs,
        convertDomChildrenToRenderNodes(element.childNodes as NodeListOf<ChildNode>, nextKey),
        nextKey(element.tagName.toLowerCase())
    ));
}

/**
 * 序列化单个渲染树节点
 */
function serializeRenderTreeNode(node: XMarkdownRenderTreeNode): string {
    if (node.type === 'text') {
        return escapeHtml(node.content);
    }

    if (node.type === 'island') {
        return '';
    }

    return serializeElement(node.tag, node.attrs, node.children);
}

/**
 * 序列化元素节点
 */
function serializeElement(
    tag: string,
    attrs: Record<string, any>,
    children: XMarkdownRenderTreeNode[]
) {
    const serializedAttrs = Object.keys(attrs).reduce<string[]>((result, name) => {
        const value = attrs[name];
        if (value === undefined || value === null || value === false) return result;

        const attrName = name === 'className' ? 'class' : name;
        if (value === true) {
            result.push(attrName);
            return result;
        }

        const attrValue = attrName === 'style' && value && typeof value === 'object'
            ? styleObjectToString(value)
            : String(value);

        result.push(`${attrName}="${escapeHtml(attrValue)}"`);
        return result;
    }, []);

    const openTag = serializedAttrs.length
        ? `<${tag} ${serializedAttrs.join(' ')}>`
        : `<${tag}>`;

    if (VOID_TAGS.has(tag)) {
        return openTag;
    }

    return `${openTag}${serializeRenderTreeNodes(children)}</${tag}>`;
}

/**
 * 获取单个节点的文本内容
 */
function getNodeTextContent(node: XMarkdownRenderTreeNode): string {
    if (node.type === 'text') {
        return node.content;
    }

    if (node.type === 'island') {
        return '';
    }

    return getTextContent(node.children);
}

/**
 * 将 style 对象序列化为字符串
 */
function styleObjectToString(style: Record<string, any>) {
    return Object.keys(style)
        .filter((key) => style[key] !== undefined && style[key] !== null && style[key] !== '')
        .map((key) => `${toKebabCase(key)}: ${style[key]}`)
        .join('; ');
}

/**
 * 将驼峰命名转换为 kebab-case
 */
function toKebabCase(value: string) {
    return value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}

/**
 * 转义 HTML 文本
 */
function escapeHtml(text: string) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

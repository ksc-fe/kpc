---
title: 引用与来源
order: 8
---

这个示例演示一种更常见的业务接法：正文有 `[1][2]` 这类来源占位符，可以通过 `plugins.transformRenderTree` 把正文里的占位符增强成可点击跳转的小圆标。

```vdt
import {Button, XMarkdown} from 'kpc';

<div class="xmarkdown-demo-citations">
    <div class="xmarkdown-demo-citations-actions">
        <Button type="primary" ev-click={this.restart}>重新渲染</Button>
    </div>
    <XMarkdown
        content={this.get('content')}
        typing={this.get('typing')}
        streaming={this.get('streaming')}
        plugins={[this.getCitationPlugin()]}
    />
</div>
```

```styl
.xmarkdown-demo-citations
    display flex
    flex-direction column
    gap 12px

    .xmarkdown-demo-citations-actions
        display flex
        flex-wrap wrap
        gap 8px

    .xmarkdown-demo-citation-badge
        display inline-flex
        align-items center
        justify-content center
        min-width 22px
        height 22px
        margin 0 2px
        padding 0 6px
        border-radius 999px
        background #e8f3ff
        color #1677ff
        font-size 12px
        font-weight 600
        line-height 1
        text-decoration none
        vertical-align middle

    .xmarkdown-demo-citation-badge:hover
        background #d7ebff
```

```ts
import {bind} from 'kpc';
import type {
    XMarkdownPlugin,
    XMarkdownRenderTreeNode,
} from 'kpc';

interface XMarkdownTyping {
    interval: number
    step: number
}

interface Props {
    content: string
    typing: boolean | XMarkdownTyping
    streaming: boolean
}

const BODY_CONTENT = [
    '# XMarkdown 引用与来源',
    '',
    '`XMarkdown` 可以承接标题、列表、代码块和 Mermaid 图表等常见 Markdown 内容[1]。',
    '',
    '在组件库接模型 SSE 时，正文往往会先逐步输出；等来源信息整理完成后，再把 `Sources` 列表追加到内容尾部[2]。',
    '',
    '这样既不会在组件内部擅自改写来源标记，也方便不同业务按自己的协议决定来源展示方式。',
].join('\n');

const SOURCES = [{
    title: 'King Design 组件文档',
    link: 'https://design.ksyun.com/',
}, {
    title: 'Mermaid 官方文档',
    link: 'https://mermaid.js.org/',
}];

const TYPING = {
    interval: 24,
    step: 4,
};

const SOURCE_CONTENT = [
    '## Sources',
    '',
    ...SOURCES.map((item, index) => `${index + 1}. [${item.title}](${item.link})`),
].join('\n');

const FULL_CONTENT = `${BODY_CONTENT}\n\n${SOURCE_CONTENT}`;

function replaceCitationMarkers(nodes: XMarkdownRenderTreeNode[]): XMarkdownRenderTreeNode[] {
    const nextNodes: XMarkdownRenderTreeNode[] = [];

    nodes.forEach((node) => {
        if (node.type === 'text') {
            nextNodes.push(...splitCitationText(node.content));
            return;
        }

        if (node.type !== 'element') {
            nextNodes.push(node);
            return;
        }

        if (node.tag === 'code' || node.tag === 'pre' || node.tag === 'a') {
            nextNodes.push(node);
            return;
        }

        nextNodes.push({
            ...node,
            children: replaceCitationMarkers(node.children),
        });
    });

    return nextNodes;
}

function splitCitationText(text: string): XMarkdownRenderTreeNode[] {
    const nodes: XMarkdownRenderTreeNode[] = [];
    const pattern = /\[(\d+)\]/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = pattern.exec(text))) {
        const citationIndex = Number(match[1]) - 1;
        const citation = SOURCES[citationIndex];

        if (match.index > lastIndex) {
            nodes.push(createTextNode(text.slice(lastIndex, match.index)));
        }

        nodes.push(citation
            ? createCitationBadge(match[1], citation.link)
            : createTextNode(match[0]));
        lastIndex = match.index + match[0].length;
    }

    if (!nodes.length) {
        return [createTextNode(text)];
    }

    if (lastIndex < text.length) {
        nodes.push(createTextNode(text.slice(lastIndex)));
    }

    return nodes;
}

function createCitationBadge(index: string, href: string): XMarkdownRenderTreeNode {
    return {
        type: 'element',
        tag: 'a',
        attrs: {
            className: 'xmarkdown-demo-citation-badge',
            href,
            target: '_blank',
            rel: 'noopener noreferrer',
            title: `查看来源 ${index}`,
            'aria-label': `查看来源 ${index}`,
        },
        children: [
            createTextNode(index),
        ],
    };
}

function createTextNode(content: string): XMarkdownRenderTreeNode {
    return {
        type: 'text',
        content,
    };
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            content: FULL_CONTENT,
            typing: false,
            streaming: false,
        };
    }

    private bodyTimer: number | null = null;
    private appendTimer: number | null = null;
    private cursor = 0;

    getCitationPlugin(): XMarkdownPlugin {
        return {
            transformRenderTree: (nodes) => replaceCitationMarkers(nodes),
        };
    }

    @bind
    restart() {
        this.clearTimers();
        this.cursor = 0;
        this.set({
            content: '',
            typing: false,
            streaming: false,
        });

        this.appendTimer = window.setTimeout(() => {
            this.appendTimer = null;
            this.set({
                typing: TYPING,
                streaming: true,
            });

            this.bodyTimer = window.setInterval(() => {
                this.cursor += 14;
                const nextContent = BODY_CONTENT.slice(0, this.cursor);
                this.set('content', nextContent);

                if (nextContent.length >= BODY_CONTENT.length) {
                    clearInterval(this.bodyTimer!);
                    this.bodyTimer = null;
                    this.appendTimer = window.setTimeout(() => {
                        this.appendTimer = null;
                        this.set({
                            content: FULL_CONTENT,
                            streaming: false,
                        });
                    }, 300);
                }
            }, 80);
        }, 0);
    }

    clearTimers() {
        if (this.bodyTimer !== null) {
            clearInterval(this.bodyTimer);
            this.bodyTimer = null;
        }

        if (this.appendTimer !== null) {
            clearTimeout(this.appendTimer);
            this.appendTimer = null;
        }
    }

    beforeUnmount() {
        this.clearTimers();
    }
}
```

```react-methods
componentWillUnmount() {
    this.clearTimers();
}
```

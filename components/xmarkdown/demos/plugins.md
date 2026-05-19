---
title: 插件扩展
order: 5
---

`plugins` 适合承载更正式的 Markdown 扩展逻辑：`extendMarkdown` 负责在 `markdown-it` 的 token 阶段补充解析能力，`transformRenderTree` 负责在渲染树转 VNode 前统一调整结构。下面这个示例演示了两件事：一是把引用块增强成提示卡片，二是给二级标题自动追加“插件已处理”徽标。

```vdt
import {XMarkdown} from 'kpc';

<div class="xmarkdown-demo-plugins">
    <XMarkdown
        content={this.get('content')}
        plugins={[this.getPlugin()]}
    />
</div>
```

```styl
.xmarkdown-demo-plugins
    .xmarkdown-demo-plugin-tip
        background linear-gradient(180deg,rgb(95, 129, 179) 0%, #ffffff 100%)
        color #244055

    .xmarkdown-demo-plugin-tip p
        margin 0

    .xmarkdown-demo-plugin-badge
        display inline-flex
        align-items center
        margin-left 8px
        padding 2px 8px
        border-radius 999px
        background #e8f3ff
        color #1677ff
        font-size 12px
        font-weight 600
        vertical-align middle
```

```ts
import type {
    XMarkdownPlugin,
    XMarkdownRenderTreeNode,
} from 'kpc';

interface Props {
    content: string
}

const CONTENT = `# 插件扩展示例

> 这段提示块没有额外写 HTML，而是由 \`extendMarkdown\` 在 token 阶段给引用块补上样式类名。

## 发布建议

- 先把基础渲染能力稳定下来
- 再补正式扩展口子和示例
- 最后完善测试和文档

## 实现边界

\`transformRenderTree\` 更适合做结构层加工，例如统一给标题补徽标、包装节点或插入额外提示。`;

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            content: CONTENT,
        };
    }

    getPlugin(): XMarkdownPlugin {
        return {
            extendMarkdown: (markdown: any) => {
                markdown.core.ruler.push('xmarkdown-demo-tip', (state: any) => {
                    state.tokens.forEach((token: any) => {
                        if (token.type === 'blockquote_open') {
                            token.attrJoin('class', 'xmarkdown-demo-plugin-tip');
                        }
                    });
                });
            },
            transformRenderTree: (nodes) => this.appendHeadingBadge(nodes),
        };
    }

    appendHeadingBadge(nodes: XMarkdownRenderTreeNode[]): XMarkdownRenderTreeNode[] {
        return nodes.map((node) => {
            if (node.type !== 'element') return node;

            const nextNode = {
                ...node,
                children: this.appendHeadingBadge(node.children),
            };

            if (nextNode.tag !== 'h2') return nextNode;

            return {
                ...nextNode,
                children: [
                    ...nextNode.children,
                    this.createBadgeNode('插件已处理'),
                ],
            };
        });
    }

    createBadgeNode(text: string): XMarkdownRenderTreeNode {
        return {
            type: 'element',
            tag: 'span',
            attrs: {
                className: 'xmarkdown-demo-plugin-badge',
            },
            children: [
                {
                    type: 'text',
                    content: text,
                },
            ],
        };
    }
}
```

```tsx
import React from 'react';
import {
    XMarkdown,
    type XMarkdownPlugin,
    type XMarkdownRenderTreeNode,
} from '@king-design/react';
import './index.styl';

interface State {
    content: string
}

const CONTENT = `# 插件扩展示例

> 这段提示块没有额外写 HTML，而是由 \`extendMarkdown\` 在 token 阶段给引用块补上样式类名。

## 发布建议

- 先把基础渲染能力稳定下来
- 再补正式扩展口子和示例
- 最后完善测试和文档

## 实现边界

\`transformRenderTree\` 更适合做结构层加工，例如统一给标题补徽标、包装节点或插入额外提示。`;

export default class Demo extends React.Component<{}, State> {
    state: State = {
        content: CONTENT,
    };

    getPlugin = (): XMarkdownPlugin => ({
        extendMarkdown: (markdown: any) => {
            markdown.core.ruler.push('xmarkdown-demo-tip', (state: any) => {
                state.tokens.forEach((token: any) => {
                    if (token.type === 'blockquote_open') {
                        token.attrJoin('class', 'xmarkdown-demo-plugin-tip');
                    }
                });
            });
        },
        transformRenderTree: (nodes) => this.appendHeadingBadge(nodes),
    });

    appendHeadingBadge = (nodes: XMarkdownRenderTreeNode[]): XMarkdownRenderTreeNode[] => {
        return nodes.map((node) => {
            if (node.type !== 'element') return node;

            const nextNode = {
                ...node,
                children: this.appendHeadingBadge(node.children),
            };

            if (nextNode.tag !== 'h2') return nextNode;

            return {
                ...nextNode,
                children: [
                    ...nextNode.children,
                    this.createBadgeNode('插件已处理'),
                ],
            };
        });
    };

    createBadgeNode = (text: string): XMarkdownRenderTreeNode => ({
        type: 'element',
        tag: 'span',
        attrs: {
            className: 'xmarkdown-demo-plugin-badge',
        },
        children: [
            {
                type: 'text',
                content: text,
            },
        ],
    });

    render() {
        const Markdown = XMarkdown as any;

        return (
            <div className="xmarkdown-demo-plugins">
                <Markdown
                    content={this.state.content}
                    plugins={[this.getPlugin()]}
                />
            </div>
        );
    }
}
```

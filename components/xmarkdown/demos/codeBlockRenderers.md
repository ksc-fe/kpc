---
title: 代码块接管
order: 6
---

`codeBlockRenderers` 用于按语言类型接管整块代码块渲染。

```vdt
import {XMarkdown} from 'kpc';

<div class="xmarkdown-demo-code-block-renderers">
    <XMarkdown
        content={this.get('content')}
        codeBlockRenderers={this.getCodeBlockRenderers()}
    />
</div>
```

```styl
.xmarkdown-demo-code-block-renderers
    .xmarkdown-demo-code-shell
        overflow hidden
        border 1px solid #d8e6ff
        border-radius 16px
        background linear-gradient(180deg, #0f172a 0%, #18253a 100%)
        box-shadow 0 14px 32px rgba(15, 23, 42, 0.18)

    .xmarkdown-demo-code-shell-head
        display flex
        align-items center
        justify-content space-between
        padding 10px 14px
        color rgba(255, 255, 255, 0.76)
        font-size 12px
        letter-spacing 0.04em
        text-transform uppercase

    .xmarkdown-demo-code-shell-body
        margin 0
        padding 14px 16px 18px
        color #e2e8f0
        font-size 13px
        line-height 1.7
        white-space pre-wrap

    .xmarkdown-demo-mermaid-placeholder
        padding 18px 20px
        border 1px dashed #b8d4ff
        border-radius 16px
        background linear-gradient(180deg, #f7fbff 0%, #eef6ff 100%)

    .xmarkdown-demo-mermaid-placeholder-title
        margin-bottom 8px
        color #1677ff
        font-size 13px
        font-weight 600

    .xmarkdown-demo-mermaid-placeholder code
        display block
        white-space pre-wrap
        color #244055
        font-size 12px
        line-height 1.7
```

```ts
import {createVNode} from 'intact';
import type {
    XMarkdownCodeBlockRenderContext,
    XMarkdownCodeBlockRenderers,
} from 'kpc';

interface Props {
    content: string
}

const CONTENT = `# 代码块接管示例

\`\`\`ts
export function greet(name: string) {
    return \`hello, \${name}\`;
}
\`\`\`

\`\`\`mermaid
flowchart TD
    A[默认 Mermaid] --> B[接管后改成业务卡片]
\`\`\``;

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            content: CONTENT,
        };
    }

    getCodeBlockRenderers(): XMarkdownCodeBlockRenderers {
        return {
            ts: (context: XMarkdownCodeBlockRenderContext) => createVNode(
                'section',
                {className: 'xmarkdown-demo-code-shell'},
                [
                    createVNode(
                        'div',
                        {className: 'xmarkdown-demo-code-shell-head'},
                        [
                            createVNode('span', null, 'TypeScript'),
                            createVNode('span', null, context.blockType),
                        ]
                    ),
                    createVNode(
                        'pre',
                        {className: 'xmarkdown-demo-code-shell-body'},
                        context.source
                    ),
                ]
            ),
            mermaid: (context: XMarkdownCodeBlockRenderContext) => createVNode(
                'section',
                {className: 'xmarkdown-demo-mermaid-placeholder'},
                [
                    createVNode(
                        'div',
                        {className: 'xmarkdown-demo-mermaid-placeholder-title'},
                        '这里由业务接管 Mermaid'
                    ),
                    createVNode('code', null, context.source),
                ]
            ),
        };
    }
}
```

```vue3
<template>
    <div class="xmarkdown-demo-code-block-renderers">
        <XMarkdown
            :content="content"
            :codeBlockRenderers="codeBlockRenderers"
        />
    </div>
</template>

<script lang="ts">
import {defineComponent, h} from 'vue';
import {
    XMarkdown,
    type XMarkdownCodeBlockRenderContext,
    type XMarkdownCodeBlockRenderers,
} from '@king-design/vue';

const CONTENT = `# 代码块接管示例

\`\`\`ts
export function greet(name: string) {
    return \`hello, \${name}\`;
}
\`\`\`

\`\`\`mermaid
flowchart TD
    A[默认 Mermaid] --> B[接管后改成业务卡片]
\`\`\``;

export default defineComponent({
    components: {
        XMarkdown,
    },
    data() {
        return {
            content: CONTENT,
        };
    },
    computed: {
        codeBlockRenderers(): XMarkdownCodeBlockRenderers {
            return {
                ts: (context: XMarkdownCodeBlockRenderContext) => h(
                    'section',
                    {class: 'xmarkdown-demo-code-shell'},
                    [
                        h(
                            'div',
                            {class: 'xmarkdown-demo-code-shell-head'},
                            [
                                h('span', null, 'TypeScript'),
                                h('span', null, context.blockType),
                            ]
                        ),
                        h(
                            'pre',
                            {class: 'xmarkdown-demo-code-shell-body'},
                            context.source
                        ),
                    ]
                ),
                mermaid: (context: XMarkdownCodeBlockRenderContext) => h(
                    'section',
                    {class: 'xmarkdown-demo-mermaid-placeholder'},
                    [
                        h(
                            'div',
                            {class: 'xmarkdown-demo-mermaid-placeholder-title'},
                            '这里由业务接管 Mermaid'
                        ),
                        h('code', null, context.source),
                    ]
                ),
            };
        },
    },
});
</script>

<style lang="stylus" src="./index.styl"></style>
```

```vue
<template>
    <div class="xmarkdown-demo-code-block-renderers">
        <XMarkdown
            :content="content"
            :codeBlockRenderers="codeBlockRenderers"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
    XMarkdown,
    type XMarkdownCodeBlockRenderContext,
    type XMarkdownCodeBlockRenderers,
} from '@king-design/vue-legacy';

const CONTENT = `# 代码块接管示例

\`\`\`ts
export function greet(name: string) {
    return \`hello, \${name}\`;
}
\`\`\`

\`\`\`mermaid
flowchart TD
    A[默认 Mermaid] --> B[接管后改成业务卡片]
\`\`\``;

export default Vue.extend({
    components: {
        XMarkdown,
    },
    data() {
        return {
            content: CONTENT,
        };
    },
    computed: {
        codeBlockRenderers(): XMarkdownCodeBlockRenderers {
            const h = this.$createElement;

            return {
                ts: (context: XMarkdownCodeBlockRenderContext) => h(
                    'section',
                    {class: 'xmarkdown-demo-code-shell'},
                    [
                        h(
                            'div',
                            {class: 'xmarkdown-demo-code-shell-head'},
                            [
                                h('span', 'TypeScript'),
                                h('span', context.blockType),
                            ]
                        ),
                        h(
                            'pre',
                            {class: 'xmarkdown-demo-code-shell-body'},
                            context.source
                        ),
                    ]
                ),
                mermaid: (context: XMarkdownCodeBlockRenderContext) => h(
                    'section',
                    {class: 'xmarkdown-demo-mermaid-placeholder'},
                    [
                        h(
                            'div',
                            {class: 'xmarkdown-demo-mermaid-placeholder-title'},
                            '这里由业务接管 Mermaid'
                        ),
                        h('code', context.source),
                    ]
                ),
            };
        },
    },
});
</script>

<style lang="stylus" src="./index.styl"></style>
```

```tsx
import React from 'react';
import {
    XMarkdown,
    type XMarkdownCodeBlockRenderContext,
    type XMarkdownCodeBlockRenderers,
} from '@king-design/react';
import './index.styl';

interface State {
    content: string
}

const CONTENT = `# 代码块接管示例

\`\`\`ts
export function greet(name: string) {
    return \`hello, \${name}\`;
}
\`\`\`

\`\`\`mermaid
flowchart TD
    A[默认 Mermaid] --> B[接管后改成业务卡片]
\`\`\``;

export default class Demo extends React.Component<{}, State> {
    state: State = {
        content: CONTENT,
    };

    getCodeBlockRenderers = (): XMarkdownCodeBlockRenderers => ({
        ts: (context: XMarkdownCodeBlockRenderContext) => (
            <section className="xmarkdown-demo-code-shell">
                <div className="xmarkdown-demo-code-shell-head">
                    <span>TypeScript</span>
                    <span>{context.blockType}</span>
                </div>
                <pre className="xmarkdown-demo-code-shell-body">
                    {context.source}
                </pre>
            </section>
        ),
        mermaid: (context: XMarkdownCodeBlockRenderContext) => (
            <section className="xmarkdown-demo-mermaid-placeholder">
                <div className="xmarkdown-demo-mermaid-placeholder-title">
                    这里由业务接管 Mermaid
                </div>
                <code>{context.source}</code>
            </section>
        ),
    });

    render() {
        return (
            <div className="xmarkdown-demo-code-block-renderers">
                <XMarkdown
                    content={this.state.content}
                    codeBlockRenderers={this.getCodeBlockRenderers()}
                />
            </div>
        );
    }
}
```

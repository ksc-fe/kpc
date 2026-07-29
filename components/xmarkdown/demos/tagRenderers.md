---
title: 标签增强
order: 4
---

`tagAttrs` 适合给现有标签补属性，`tagRenderers` 适合把标签映射成业务自己的组件。如下这个示例：给外链补统一属性、把自定义 `notice-card` 渲染成业务卡片，以及把 Markdown 表格映射成组件库 `Table`。

```vdt
import {XMarkdown, Button} from 'kpc';

<div class="xmarkdown-demo-tag-renderers">
    <div class="xmarkdown-demo-tag-renderers-actions">
        <Button type="primary" ev-click={this.restartTyping}>重新开始打字</Button>
    </div>
    <XMarkdown
        allowHtml
        typing={this.get('typing')}
        content={this.get('content')}
        sanitizeOptions={this.get('sanitizeOptions')}
        tagAttrs={this.getTagAttrs()}
        tagRenderers={this.getTagRenderers()}
    />
</div>
```

```styl
.xmarkdown-demo-tag-renderers
    .xmarkdown-demo-tag-renderers-actions
        margin-bottom 16px

    .xmarkdown-demo-tag-card
        padding 14px 16px
        border 1px solid #d8e6ff
        border-radius 14px
        background linear-gradient(180deg, #f6faff 0%, #ffffff 100%)
        box-shadow 0 10px 24px rgba(22, 119, 255, 0.08)

    .xmarkdown-demo-tag-card-title
        margin-bottom 6px
        color #1677ff
        font-size 13px
        font-weight 600

    .xmarkdown-demo-tag-card-body
        color #244055
        line-height 1.7

    .xmarkdown-demo-tag-link
        font-weight 600

    .xmarkdown-demo-tag-table
        margin 12px 0
```

```ts
import {createVNode} from 'intact';
import {bind, Table, TableColumn} from 'kpc';
import type {
    XMarkdownTagAttrs,
    XMarkdownTagAttrsContext,
    XMarkdownTagRenderContext,
    XMarkdownTagRenderers,
} from 'kpc';

interface Props {
    content: string
    typing: boolean | {
        interval: number
        step: number
    }
    sanitizeOptions: Record<string, any>
}

interface TableColumnItem {
    key: string
    title: string
}

type TableRowItem = {
    id: string
    [key: string]: string
};

const CONTENT = `# 标签增强示例

<notice-card title="发布建议">优先把核心交互、Demo 和单测一起补齐，再进入发版检查。</notice-card>

| 阶段 | 负责人 | 状态 |
| --- | --- | --- |
| 设计评审 | Daisy | 已完成 |
| 联调验证 | Alex | 进行中 |

更多规范可以参考 [King Design](https://design.ksyun.com/)。

> 这段普通引用块仍然保持默认渲染。`;

const TYPING = {
    interval: 18,
    step: 3,
};

export default class extends Component<Props> {
    static template = template;

    private restartTimer: number | null = null;

    static defaults() {
        return {
            content: CONTENT,
            typing: false,
            sanitizeOptions: {
                ADD_TAGS: ['notice-card'],
                ADD_ATTR: ['title'],
            },
        };
    }

    getTagAttrs(): XMarkdownTagAttrs {
        return {
            a: (context: XMarkdownTagAttrsContext) => /^(https?:)?\/\//i.test(context.attrs.href || '')
                ? {
                    className: 'xmarkdown-demo-tag-link',
                    'data-track': 'xmarkdown-demo-link',
                }
                : undefined,
        };
    }

    getTagRenderers(): XMarkdownTagRenderers {
        return {
            'notice-card': (context: XMarkdownTagRenderContext) => createVNode(
                'div',
                {className: 'xmarkdown-demo-tag-card'},
                [
                    createVNode(
                        'div',
                        {className: 'xmarkdown-demo-tag-card-title'},
                        context.attrs.title || '发布建议'
                    ),
                    createVNode(
                        'div',
                        {className: 'xmarkdown-demo-tag-card-body'},
                        context.textContent
                    ),
                ]
            ),
            table: (context: XMarkdownTagRenderContext) => {
                const parsed = parseMarkdownTable(context.html);
                if (!parsed) return undefined;

                return createVNode(
                    'div',
                    {className: 'xmarkdown-demo-tag-table'},
                    [
                        createVNode(
                            Table as any,
                            {
                                data: parsed.data,
                                rowKey: (item: TableRowItem) => item.id,
                                checkType: 'none',
                            },
                            parsed.columns.map((column) => createVNode(TableColumn as any, {
                                key: column.key,
                                title: column.title,
                            }))
                        ),
                    ]
                );
            },
        };
    }

    @bind
    restartTyping() {
        if (this.restartTimer) {
            clearTimeout(this.restartTimer);
        }

        this.set('typing', false);
        this.set('content', '');
        this.restartTimer = window.setTimeout(() => {
            this.restartTimer = null;
            this.set('typing', TYPING);
            this.set('content', CONTENT);
        }, 0);
    }
}

function parseMarkdownTable(html: string) {
    if (typeof DOMParser === 'undefined') return null;

    const parser = new DOMParser();
    const document = parser.parseFromString(html, 'text/html');
    const table = document.querySelector('table');
    if (!table) return null;

    const headerCells = Array.from(table.querySelectorAll('thead th'));
    if (!headerCells.length) return null;

    const columns: TableColumnItem[] = headerCells.map((cell, index) => ({
        key: `column-${index}`,
        title: cell.textContent?.trim() || `列 ${index + 1}`,
    }));

    const data: TableRowItem[] = Array.from(table.querySelectorAll('tbody tr')).map((row, rowIndex) => {
        return columns.reduce<TableRowItem>((item, column, columnIndex) => {
            const cell = row.children[columnIndex] as HTMLElement | undefined;
            item[column.key] = cell?.textContent?.trim() || '';
            return item;
        }, {
            id: `row-${rowIndex}`,
        });
    });

    return {columns, data};
}
```

```vue3
<template>
    <div class="xmarkdown-demo-tag-renderers">
        <div class="xmarkdown-demo-tag-renderers-actions">
            <Button type="primary" @click="restartTyping">重新开始打字</Button>
        </div>
        <XMarkdown
            allowHtml
            :typing="typing"
            :content="content"
            :sanitizeOptions="sanitizeOptions"
            :tagAttrs="tagAttrs"
            :tagRenderers="tagRenderers"
        />
    </div>
</template>

<script lang="ts">
import {defineComponent, h} from 'vue';
import {
    Button,
    Table,
    TableColumn,
    XMarkdown,
    type XMarkdownTagAttrs,
    type XMarkdownTagRenderers,
} from '@king-design/vue';

const CONTENT = `# 标签增强示例

<notice-card title="发布建议">优先把核心交互、Demo 和单测一起补齐，再进入发版检查。</notice-card>

| 阶段 | 负责人 | 状态 |
| --- | --- | --- |
| 设计评审 | Daisy | 已完成 |
| 联调验证 | Alex | 进行中 |

更多规范可以参考 [King Design](https://design.ksyun.com/)。

> 这段普通引用块仍然保持默认渲染。`;

const TYPING = {
    interval: 18,
    step: 3,
};

const sanitizeOptions = {
    ADD_TAGS: ['notice-card'],
    ADD_ATTR: ['title'],
};

const tagAttrs: XMarkdownTagAttrs = {
    a: (context) => /^(https?:)?\/\//i.test(context.attrs.href || '')
        ? {
            className: 'xmarkdown-demo-tag-link',
            'data-track': 'xmarkdown-demo-link',
        }
        : undefined,
};

export default defineComponent({
    components: {
        Button,
        XMarkdown,
    },
    data() {
        return {
            content: CONTENT,
            typing: false as boolean | typeof TYPING,
            sanitizeOptions,
            tagAttrs,
            restartTimer: null as number | null,
        };
    },
    computed: {
        tagRenderers(): XMarkdownTagRenderers {
            return {
                'notice-card': (context) => h(
                    'div',
                    {class: 'xmarkdown-demo-tag-card'},
                    [
                        h(
                            'div',
                            {class: 'xmarkdown-demo-tag-card-title'},
                            context.attrs.title || '发布建议'
                        ),
                        h(
                            'div',
                            {class: 'xmarkdown-demo-tag-card-body'},
                            context.textContent
                        ),
                    ]
                ),
                table: (context) => {
                    const parsed = parseMarkdownTable(context.html);
                    if (!parsed) return undefined;

                    return h(
                        'div',
                        {class: 'xmarkdown-demo-tag-table'},
                        [
                            h(
                                Table as any,
                                {
                                    data: parsed.data,
                                    rowKey: (item: any) => item.id,
                                    checkType: 'none',
                                },
                                {
                                    default: () => parsed.columns.map((column) => h(TableColumn as any, {
                                        key: column.key,
                                        title: column.title,
                                    })),
                                }
                            ),
                        ]
                    );
                },
            };
        },
    },
    methods: {
        restartTyping() {
            if (this.restartTimer) {
                clearTimeout(this.restartTimer);
            }

            this.typing = false;
            this.content = '';
            this.restartTimer = window.setTimeout(() => {
                this.restartTimer = null;
                this.typing = TYPING;
                this.content = CONTENT;
            }, 0);
        },
    },
});

function parseMarkdownTable(html: string) {
    if (typeof DOMParser === 'undefined') return null;

    const parser = new DOMParser();
    const document = parser.parseFromString(html, 'text/html');
    const table = document.querySelector('table');
    if (!table) return null;

    const headerCells = Array.from(table.querySelectorAll('thead th'));
    if (!headerCells.length) return null;

    const columns = headerCells.map((cell, index) => ({
        key: `column-${index}`,
        title: cell.textContent?.trim() || `列 ${index + 1}`,
    }));

    const data = Array.from(table.querySelectorAll('tbody tr')).map((row, rowIndex) => {
        return columns.reduce((item, column, columnIndex) => {
            const cell = row.children[columnIndex] as HTMLElement | undefined;
            item[column.key] = cell?.textContent?.trim() || '';
            return item;
        }, {
            id: `row-${rowIndex}`,
        } as Record<string, string>);
    });

    return {columns, data};
}
</script>

<style lang="stylus" src="./index.styl"></style>
```

```vue
<template>
    <div class="xmarkdown-demo-tag-renderers">
        <div class="xmarkdown-demo-tag-renderers-actions">
            <Button type="primary" @click="restartTyping">重新开始打字</Button>
        </div>
        <XMarkdown
            allowHtml
            :typing="typing"
            :content="content"
            :sanitizeOptions="sanitizeOptions"
            :tagAttrs="tagAttrs"
            :tagRenderers="tagRenderers"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
    Button,
    Table,
    TableColumn,
    XMarkdown,
    type XMarkdownTagAttrs,
    type XMarkdownTagRenderers,
} from '@king-design/vue-legacy';

const CONTENT = `# 标签增强示例

<notice-card title="发布建议">优先把核心交互、Demo 和单测一起补齐，再进入发版检查。</notice-card>

| 阶段 | 负责人 | 状态 |
| --- | --- | --- |
| 设计评审 | Daisy | 已完成 |
| 联调验证 | Alex | 进行中 |

更多规范可以参考 [King Design](https://design.ksyun.com/)。

> 这段普通引用块仍然保持默认渲染。`;

const TYPING = {
    interval: 18,
    step: 3,
};

const sanitizeOptions = {
    ADD_TAGS: ['notice-card'],
    ADD_ATTR: ['title'],
};

const tagAttrs: XMarkdownTagAttrs = {
    a: (context) => /^(https?:)?\/\//i.test(context.attrs.href || '')
        ? {
            className: 'xmarkdown-demo-tag-link',
            'data-track': 'xmarkdown-demo-link',
        }
        : undefined,
};

export default Vue.extend({
    components: {
        Button,
        XMarkdown,
    },
    data() {
        return {
            content: CONTENT,
            typing: false as boolean | typeof TYPING,
            sanitizeOptions,
            tagAttrs,
            restartTimer: null as number | null,
        };
    },
    computed: {
        tagRenderers(): XMarkdownTagRenderers {
            const h = this.$createElement;

            return {
                'notice-card': (context) => h(
                    'div',
                    {class: 'xmarkdown-demo-tag-card'},
                    [
                        h(
                            'div',
                            {class: 'xmarkdown-demo-tag-card-title'},
                            context.attrs.title || '发布建议'
                        ),
                        h(
                            'div',
                            {class: 'xmarkdown-demo-tag-card-body'},
                            context.textContent
                        ),
                    ]
                ),
                table: (context) => {
                    const parsed = parseMarkdownTable(context.html);
                    if (!parsed) return undefined;

                    return h(
                        'div',
                        {class: 'xmarkdown-demo-tag-table'},
                        [
                            h(
                                Table as any,
                                {
                                    props: {
                                        data: parsed.data,
                                        rowKey: (item: any) => item.id,
                                    },
                                },
                                parsed.columns.map((column) => h(TableColumn as any, {
                                    props: {
                                        key: column.key,
                                        title: column.title,
                                    },
                                    key: column.key,
                                }))
                            ),
                        ]
                    );
                },
            };
        },
    },
    methods: {
        restartTyping() {
            if (this.restartTimer) {
                clearTimeout(this.restartTimer);
            }

            this.typing = false;
            this.content = '';
            this.restartTimer = window.setTimeout(() => {
                this.restartTimer = null;
                this.typing = TYPING;
                this.content = CONTENT;
            }, 0);
        },
    },
});

function parseMarkdownTable(html: string) {
    if (typeof DOMParser === 'undefined') return null;

    const parser = new DOMParser();
    const document = parser.parseFromString(html, 'text/html');
    const table = document.querySelector('table');
    if (!table) return null;

    const headerCells = Array.from(table.querySelectorAll('thead th'));
    if (!headerCells.length) return null;

    const columns = headerCells.map((cell, index) => ({
        key: `column-${index}`,
        title: cell.textContent?.trim() || `列 ${index + 1}`,
    }));

    const data = Array.from(table.querySelectorAll('tbody tr')).map((row, rowIndex) => {
        return columns.reduce((item, column, columnIndex) => {
            const cell = row.children[columnIndex] as HTMLElement | undefined;
            item[column.key] = cell?.textContent?.trim() || '';
            return item;
        }, {
            id: `row-${rowIndex}`,
        } as Record<string, string>);
    });

    return {columns, data};
}
</script>

<style lang="stylus" src="./index.styl"></style>
```

```tsx
import React from 'react';
import {
    Button,
    Table,
    TableColumn,
    XMarkdown,
    type XMarkdownTagAttrs,
    type XMarkdownTagRenderers,
} from '@king-design/react';
import './index.styl';

interface State {
    content: string
    typing: boolean | {
        interval: number
        step: number
    }
}

interface TableColumnItem {
    key: string
    title: string
}

type TableRowItem = {
    id: string
    [key: string]: string
};

const CONTENT = `# 标签增强示例

<notice-card title="发布建议">优先把核心交互、Demo 和单测一起补齐，再进入发版检查。</notice-card>

| 阶段 | 负责人 | 状态 |
| --- | --- | --- |
| 设计评审 | Daisy | 已完成 |
| 联调验证 | Alex | 进行中 |

更多规范可以参考 [King Design](https://design.ksyun.com/)。

> 这段普通引用块仍然保持默认渲染。`;

const TYPING = {
    interval: 18,
    step: 3,
};

const sanitizeOptions = {
    ADD_TAGS: ['notice-card'],
    ADD_ATTR: ['title'],
};

const tagAttrs: XMarkdownTagAttrs = {
    a: (context) => /^(https?:)?\/\//i.test(context.attrs.href || '')
        ? {
            className: 'xmarkdown-demo-tag-link',
            'data-track': 'xmarkdown-demo-link',
        }
        : undefined,
};

export default class Demo extends React.Component<{}, State> {
    private restartTimer: number | null = null;

    state: State = {
        content: CONTENT,
        typing: false,
    };

    restartTyping = () => {
        if (this.restartTimer) {
            clearTimeout(this.restartTimer);
        }

        this.setState({
            content: '',
            typing: false,
        });
        this.restartTimer = window.setTimeout(() => {
            this.restartTimer = null;
            this.setState({
                content: CONTENT,
                typing: TYPING,
            });
        }, 0);
    };

    getTagRenderers = (): XMarkdownTagRenderers => ({
        'notice-card': (context) => (
            <div className="xmarkdown-demo-tag-card">
                <div className="xmarkdown-demo-tag-card-title">
                    {context.attrs.title || '发布建议'}
                </div>
                <div className="xmarkdown-demo-tag-card-body">
                    {context.textContent}
                </div>
            </div>
        ),
        table: (context) => {
            const parsed = parseMarkdownTable(context.html);
            if (!parsed) return undefined;

            return (
                <div className="xmarkdown-demo-tag-table">
                    <Table
                        data={parsed.data}
                        rowKey={(item: TableRowItem) => item.id}
                    >
                        {parsed.columns.map((column) => (
                            <TableColumn
                                key={column.key}
                                title={column.title}
                            />
                        ))}
                    </Table>
                </div>
            );
        },
    });

    render() {
        return (
            <div className="xmarkdown-demo-tag-renderers">
                <div className="xmarkdown-demo-tag-renderers-actions">
                    <Button type="primary" onClick={this.restartTyping}>重新开始打字</Button>
                </div>
                <XMarkdown
                    allowHtml
                    typing={this.state.typing}
                    content={this.state.content}
                    sanitizeOptions={sanitizeOptions}
                    tagAttrs={tagAttrs}
                    tagRenderers={this.getTagRenderers()}
                />
            </div>
        );
    }
}

function parseMarkdownTable(html: string) {
    if (typeof DOMParser === 'undefined') return null;

    const parser = new DOMParser();
    const document = parser.parseFromString(html, 'text/html');
    const table = document.querySelector('table');
    if (!table) return null;

    const headerCells = Array.from(table.querySelectorAll('thead th'));
    if (!headerCells.length) return null;

    const columns: TableColumnItem[] = headerCells.map((cell, index) => ({
        key: `column-${index}`,
        title: cell.textContent?.trim() || `列 ${index + 1}`,
    }));

    const data: TableRowItem[] = Array.from(table.querySelectorAll('tbody tr')).map((row, rowIndex) => {
        return columns.reduce<TableRowItem>((item, column, columnIndex) => {
            const cell = row.children[columnIndex] as HTMLElement | undefined;
            item[column.key] = cell?.textContent?.trim() || '';
            return item;
        }, {
            id: `row-${rowIndex}`,
        });
    });

    return {columns, data};
}
```

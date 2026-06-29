---
title: 流式输出
order: 7
---

`XMarkdown` 可以承接流式输出与打字动画，适合直接接模型增量结果。

```vdt
import {XMarkdown, Button} from 'kpc';

<div class="xmarkdown-demo-streaming-rich">
    <div class="xmarkdown-demo-streaming-rich-actions">
        <Button type="primary" ev-click={this.start.bind(this)}>开始流式输出</Button>
        <Button ev-click={this.reset.bind(this)}>重置</Button>
    </div>
    <div class="xmarkdown-demo-streaming-rich-layout">
        <div class="xmarkdown-demo-streaming-rich-panel">
            <div class="xmarkdown-demo-streaming-rich-title">标准宽度</div>
            <XMarkdown
                content={this.get('content')}
                typing={{interval: 24, step: 5, suffix: true}}
                streaming={this.get('streaming')}
                loading={this.get('loading')}
            />
        </div>
        <div class="xmarkdown-demo-streaming-rich-panel xmarkdown-demo-streaming-rich-panel-narrow">
            <div class="xmarkdown-demo-streaming-rich-title">窄容器</div>
            <XMarkdown
                content={this.get('content')}
                typing={{interval: 24, step: 5, suffix: true}}
                streaming={this.get('streaming')}
                loading={this.get('loading')}
            />
        </div>
    </div>
</div>
```

```styl
.xmarkdown-demo-streaming-rich
    display flex
    flex-direction column
    gap 12px

.xmarkdown-demo-streaming-rich-actions
    display flex
    flex-wrap wrap
    gap 8px

.xmarkdown-demo-streaming-rich-layout
    display flex
    flex-wrap wrap
    gap 12px

.xmarkdown-demo-streaming-rich-panel
    flex 1 1 520px
    min-width 0
    display flex
    flex-direction column
    gap 8px
    padding 12px
    border 1px solid #e5e7eb
    border-radius 12px
    background linear-gradient(180deg, #ffffff 0%, #fafbfd 100%)

.xmarkdown-demo-streaming-rich-panel-narrow
    flex 0 0 360px
    max-width 360px

.xmarkdown-demo-streaming-rich-title
    color #6b7280
    font-size 12px
    font-weight 600
    letter-spacing .02em
    text-transform uppercase
```

```ts
interface Props {
    content: string
    streaming: boolean
    loading: boolean
}

const FULL_CONTENT = [
    '# 发布方案建议',
    '',
    '下面是一轮包含多种富文本结构的综合回复，适合验证流式渲染体验。',
    '',
    '## 1. 核心结论',
    '',
    '- 组件主体建议先稳定富文本基础能力',
    '- 复杂能力按需启用，避免默认过重',
    '- 窄容器里优先保证表格、代码和图表仍可读',
    '',
    '## 2. 代码示例',
    '',
    '```ts',
    'interface MessageChunk {',
    '    type: "text" | "code" | "formula" | "diagram";',
    '    content: string;',
    '}',
    '',
    'export function appendChunk(source: string, chunk: MessageChunk) {',
    '    return source + chunk.content;',
    '}',
    '```',
    '',
    '## 3. 指标表',
    '',
    '| 指标 | 当前方案 | 优化方向 |',
    '| --- | --- | --- |',
    '| Bundle 成本 | 控制中 | 重能力继续按需化 |',
    '| 流式体验 | 可用 | 继续减少抖动 |',
    '| 窄容器可读性 | 基本可用 | 优先保证横向滚动 |',
    '',
    '## 4. 公式',
    '',
    '$$',
    '\\operatorname{score}(x)=\\sum_{i=1}^{n}\\frac{w_i\\cdot s_i}{1+\\exp(-x_i)}',
    '$$',
    '',
    '## 5. Mermaid',
    '',
    '```mermaid',
    'erDiagram',
    '   CUSTOMER ||--o{ ORDER : places',
    '   ORDER ||--|{ ORDER_ITEM : contains',
    '   PRODUCT ||--o{ ORDER_ITEM : includes',
    '```',
].join('\n');

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            content: '',
            streaming: false,
            loading: false,
        };
    }

    private timer: number | null = null;
    private loadingTimer: number | null = null;
    private cursor = 0;

    start() {
        this.reset();
        this.set('loading', true);

        this.loadingTimer = window.setTimeout(() => {
            this.loadingTimer = null;
            this.set({
                loading: false,
                streaming: true,
            });

            this.timer = window.setInterval(() => {
                this.cursor += 12;
                const nextContent = FULL_CONTENT.slice(0, this.cursor);
                this.set('content', nextContent);

                if (nextContent.length >= FULL_CONTENT.length) {
                    clearInterval(this.timer!);
                    this.timer = null;
                    this.set('streaming', false);
                }
            }, 80);
        }, 600);
    }

    reset() {
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }

        if (this.loadingTimer !== null) {
            clearTimeout(this.loadingTimer);
            this.loadingTimer = null;
        }

        this.cursor = 0;
        this.set({
            content: '',
            streaming: false,
            loading: false,
        });
    }

    beforeUnmount() {
        this.reset();
    }
}
```

```react-methods
componentWillUnmount() {
    this.reset();
}
```

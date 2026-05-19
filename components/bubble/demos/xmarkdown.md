---
title: 与 XMarkdown 组合
order: 10
---

这个示例演示在 `Bubble` 中直接通过 `content` 插槽接入 `XMarkdown`。这样气泡负责布局、头像和附属信息，富文本渲染则完全交给 `XMarkdown`，更适合承载复杂 AI 回复。

```vdt
import {Bubble, Button, XMarkdown} from 'kpc';

<div class="bubble-demo-xmarkdown">
    <div class="bubble-demo-xmarkdown-actions">
        <Button type="primary" ev-click={this.start.bind(this)}>开始流式回复</Button>
        <Button ev-click={this.reset.bind(this)}>重置</Button>
    </div>

    <Bubble v-if={this.get('showBubble')}
        avatar={true}
        roleName="AI 助手"
        variant="outlined"
        shape="corner"
        maxWidthString="760px"
    >
        <b:content>
            <XMarkdown
                content={this.get('content')}
                streaming={this.get('streaming')}
                loading={this.get('loading')}
                typing={{interval: 20, step: 4}}
            />
        </b:content>
        <b:extra>Bubble 负责承载布局，XMarkdown 负责富文本能力</b:extra>
    </Bubble>
</div>
```

```styl
.bubble-demo-xmarkdown
    display flex
    flex-direction column
    gap 12px

.bubble-demo-xmarkdown-actions
    display flex
    flex-wrap wrap
    gap 8px
```

```ts
interface Props {
    content: string
    streaming: boolean
    loading: boolean
    showBubble: boolean
}

const FULL_CONTENT = [
    '# 气泡中的富文本回答',
    '',
    '这个示例演示 `Bubble + XMarkdown` 的组合方式：',
    '',
    '- `Bubble` 控制头像、角色名和气泡外层布局',
    '- `XMarkdown` 负责代码、公式和图表等富文本能力',
    '',
    '```ts',
    'export function renderBubbleContent(mode: "simple" | "rich") {',
    '    return mode === "rich" ? "use-xmarkdown" : "plain-text";',
    '}',
    '```',
    '',
    '$$',
    'latency = network + parse + render',
    '$$',
    '',
    '```mermaid',
    'flowchart LR',
    '    A[Bubble 容器] --> B[XMarkdown 内容]',
    '    B --> C[代码 / 公式 / 图表]',
    '```',
].join('\n');

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            content: '',
            streaming: false,
            loading: false,
            showBubble: false,
        };
    }

    private timer: number | null = null;
    private loadingTimer: number | null = null;
    private cursor = 0;

    clearTimers() {
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }
        if (this.loadingTimer !== null) {
            clearTimeout(this.loadingTimer);
            this.loadingTimer = null;
        }
    }

    /** 仅清空与停止计时，不启动流式（用于组件卸载） */
    cleanup() {
        this.clearTimers();
        this.cursor = 0;
        this.set({
            content: '',
            streaming: false,
            loading: false,
            showBubble: false,
        });
    }

    /** 清空后按「开始流式回复」再走一轮 loading + 流式输出 */
    beginStreaming() {
        this.set({
            showBubble: true,
            loading: true,
        });

        this.loadingTimer = window.setTimeout(() => {
            this.loadingTimer = null;
            this.set({
                loading: false,
                streaming: true,
            });

            this.timer = window.setInterval(() => {
                this.cursor += 10;
                const nextContent = FULL_CONTENT.slice(0, this.cursor);
                this.set('content', nextContent);

                if (nextContent.length >= FULL_CONTENT.length) {
                    clearInterval(this.timer!);
                    this.timer = null;
                    this.set('streaming', false);
                }
            }, 80);
        }, 500);
    }

    start() {
        this.cleanup();
        this.beginStreaming();
    }

    reset() {
        this.cleanup();
        this.beginStreaming();
    }

    beforeUnmount() {
        this.cleanup();
    }
}
```

```react-methods
componentWillUnmount() {
    this.cleanup();
}
```

---
title: 流式输出
order: 8
---

`streaming` 负责告诉 `Bubble`：气泡中的 `content` 还在持续更新。`streaming` 为 `true` 时， 无论是否开启 `typing`，`typingComplete` 都只会在整轮流式输出结束后触发一次；若关闭 `typing`，内容会直接跟随流式 `content` 更新，但不会触发 `typing` 事件。

```vdt
import {Bubble, Button} from 'kpc';

<div class="bubble-demo-streaming">
    <div class="bubble-demo-streaming-actions">
        <Button ev-click={this.startSlowTyping}>慢速流式 + typing</Button>
        <Button ev-click={this.startFastTyping}>快速流式 + typing</Button>
        <Button ev-click={this.startStreamingOnly}>仅流式输出</Button>
    </div>
    <Bubble
        avatar={true}
        roleName="AI 助手"
        loading={this.get('loading')}
        content={this.get('content')}
        streaming={this.get('streaming')}
        typing={this.getTypingOptions()}
        ev-typing={this.onTyping}
        ev-typingComplete={this.onTypingComplete}
    >
        <b:extra>
            <div class="bubble-demo-streaming-extra">
                <div>当前已渲染：{this.get('renderedContent') || '(空)'}</div>
                <div>完成事件触发次数：{this.get('completeCount')}</div>
            </div>
        </b:extra>
    </Bubble>
</div>
```

```styl
.bubble-demo-streaming
    display flex
    flex-direction column
    gap 12px

.bubble-demo-streaming-actions
    display flex
    flex-wrap wrap
    gap 8px

.bubble-demo-streaming-extra
    display flex
    flex-direction column
    gap 4px
    color #6b7280
    font-size 12px
```

```ts
import {bind} from 'kpc';

interface Props {
    loading: boolean
    content: string
    renderedContent: string
    streaming: boolean
    typing: boolean
    completeCount: number
}

const fullText = 'Bubble 会在流式内容持续更新时，保持打字动画和完成回调之间的边界稳定。';

export default class extends Component<Props> {
    static template = template;

    private timer: number | null = null;
    private loadingTimer: number | null = null;

    static defaults() {
        return {
            loading: true,
            content: '',
            renderedContent: '',
            streaming: false,
            typing: true,
            completeCount: 0,
        };
    }

    start(typing: boolean, step: number, interval: number) {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        if (this.loadingTimer) {
            clearTimeout(this.loadingTimer);
            this.loadingTimer = null;
        }

        this.set({
            loading: true,
            content: '',
            renderedContent: '',
            streaming: false,
            typing,
            completeCount: 0,
        });

        this.loadingTimer = window.setTimeout(() => {
            this.loadingTimer = null;
            this.set({
                loading: false,
                streaming: true,
            });

            this.timer = window.setInterval(() => {
                const nextValue = fullText.slice(0, this.get('content').length + step);
                this.set('content', nextValue);

                if (nextValue.length >= fullText.length) {
                    clearInterval(this.timer!);
                    this.timer = null;
                    this.set('streaming', false);
                }
            }, interval);
        }, 800);
    }

    @bind
    startSlowTyping() {
        this.start(true, 2, 120);
    }

    @bind
    startFastTyping() {
        this.start(true, 8, 40);
    }

    @bind
    startStreamingOnly() {
        this.start(false, 4, 80);
        this.set('renderedContent', '未开启typing属性，不会触发`typing`事件');
    }

    @bind
    onTyping(renderedContent: string) {
        this.set('renderedContent', renderedContent);
    }

    @bind
    onTypingComplete() {
        this.set('completeCount', this.get('completeCount') + 1);
    }

    getTypingOptions() {
        return this.get('typing') ? {interval: 24, step: 2} : false;
    }
}
```

```react-methods
componentDidMount() {
    this.startSlowTyping();
}

componentWillUnmount() {
    if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
    }
    if (this.loadingTimer) {
        clearTimeout(this.loadingTimer);
        this.loadingTimer = null;
    }
}
```

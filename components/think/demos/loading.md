---
title: 加载状态
order: 2
---

`Think` 支持加载状态，通过 `loading` 属性控制，`blink` 属性可以让标题文字闪烁以提示用户正在思考。

```vdt
import {Button, Think} from 'kpc';

<div class="think-demo-loading">
    <div class="think-demo-loading-actions">
        <Button ev-click={this.startThinking}>开始思考</Button>
        <Button ev-click={this.stopThinking}>停止思考</Button>
    </div>
    <Think
        loading={this.get('loading')}
        blink={this.get('loading')}
        title={this.get('loading') ? '思考中...' : '已思考（用时 5 秒）'}
        content={this.get('content')}
    />
</div>
```

```styl
.think-demo-loading
    display block

.think-demo-loading-actions
    display flex
    justify-content flex-start
    gap 8px
    margin-bottom 12px
```

```ts
import {bind} from 'kpc';

interface Props {
    loading: boolean
    content: string
}

export default class extends Component<Props> {
    static template = template;

    private timer: number | null = null;
    private progressTimer: number | null = null;

    static defaults() {
        return {
            loading: false,
            content: '用户想了解 KingDesign 的使用建议，需要从技术特点、应用场景、成本效益等多个角度分析。',
        };
    }

    beforeUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    @bind
    startThinking() {
        if (this.timer) {
            clearTimeout(this.timer);
        }

        this.set({
            loading: true,
        });


        // 5秒后完成思考
        this.timer = window.setTimeout(() => {
            this.set({
                loading: false,
            });
        }, 5000);
    }

    @bind
    stopThinking() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        this.set('loading', false);
    }
}
```
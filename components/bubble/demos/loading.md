---
title: 加载中
order: 2
---

`loading` 用于展示生成中的占位状态。默认会显示三个与主题主色联动的跳跃圆点动效，也可以通过 `loading` 插槽完全自定义。

```vdt
import {Bubble, Button} from 'kpc';

<div class="bubble-demo-loading">
    <div class="bubble-demo-actions">
        <Button ev-click={this.toggleLoading}>
            <span v-if={this.get('loading')}>停止 loading</span>
            <span v-else>启动 loading</span>
        </Button>
    </div>
    <div class="bubble-demo-loading-list">
        <Bubble
            avatar={true}
            roleName="AI 助手"
            loading={this.get('loading')}
            content={this.get('content')}
            variant="plain"
        >
            <b:extra>默认 loading</b:extra>
        </Bubble>
        <Bubble
            avatar={true}
            roleName="工作流引擎"
            loading={this.get('loading')}
            content={this.get('content')}
            variant="plain"
        >
            <b:loading>
                <div class="bubble-demo-custom-loading">
                    <span class="bubble-demo-custom-loading-ring"></span>
                    <span>正在调度 3 个子任务...</span>
                </div>
            </b:loading>
            <b:extra>通过 `loading` 插槽自定义加载区</b:extra>
        </Bubble>
    </div>
</div>
```

```styl
.bubble-demo-loading
    display flex
    flex-direction column
    gap 12px

.bubble-demo-actions
    display flex
    justify-content flex-start

.bubble-demo-loading-list
    display flex
    flex-direction column
    gap 16px

.bubble-demo-custom-loading
    display inline-flex
    align-items center
    gap 10px
    min-height 20px
    color #1677ff
    font-size 13px

.bubble-demo-custom-loading-ring
    width 14px
    height 14px
    border 2px solid rgba(22, 119, 255, 0.18)
    border-top-color #1677ff
    border-radius 50%
    animation bubble-demo-loading-spin 0.8s linear infinite

@keyframes bubble-demo-loading-spin
    from
        transform rotate(0deg)

    to
        transform rotate(360deg)
```

```ts
import {bind} from 'kpc';

interface Props {
    loading: boolean
    content: string
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            loading: true,
            content: ''
        };
    }

    @bind
    start() {
        this.set({
            loading: true,
            content: ''
        });
    }

    @bind
    stop() {
        this.set({
            loading: false,
            content: '正在根据你的需求整理 Bubble 组件方案，并补全 props、slots、样式和 Markdown 渐进渲染表现。',
        });
    }

    @bind
    toggleLoading() {
        if (this.get('loading')) {
            this.stop();
        } else {
            this.start();
        }
    }
}
```

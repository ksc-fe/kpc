---
title: 基础用法
order: 0
---

通过 `placement` 控制左、中、右布局，通过 `avatar`、`roleName`、`bottom`、`footer`、`extra` 等属性或插槽丰富对话气泡。

```vdt
import {Bubble, Copy, Icon} from 'kpc';

<div class="bubble-demo-basic">
    <Bubble
        placement="end"
        content="介绍一下你自己"
        shape="corner"
    />
    <Bubble
        avatar={true}
        roleName="AI 助手"
        content={this.get('content')}
        variant="plain"
    >
        <b:bottom>
            <div class="bubble-demo-bottom" v-if={this.get('showBottom')}>
                这是 bottom 插槽，可放置一些固定信息
            </div>
        </b:bottom>
        <b:footer>
            <div class="bubble-demo-footer-bar">
                <Icon class="k-icon-refresh" title="重新生成" hoverable ev-click={this.retry} />
                <div>
                    <Copy text={this.get('content')} title="复制气泡内容" />
                </div>
            </div>
        </b:footer>
        <b:extra>12 tokens · 0.4s</b:extra>
    </Bubble>
    <Bubble
        placement="middle"
        variant="plain"
        content="系统消息：文档已自动保存，3 秒后继续生成。"
    />
</div>
```

```styl
.bubble-demo-basic
    display flex
    flex-direction column
    gap 16px
.bubble-demo-basic .k-bubble-bottom:not(:has(.bubble-demo-bottom))
    display none
.bubble-demo-footer-bar
    display flex
    align-items center
    justify-content flex-start
    gap 4px
    width 100%
```

```ts
import {bind} from 'kpc';

interface Props {
    content: string
    step: number
    showBottom: boolean
}

const contents = [
    '你好，我是AI小助手，很高兴认识你。',
    '你好，我是AI小助手，我可以帮你总结文档、生成代码，也可以继续输出流式内容。',
    '你好，我是AI小助手，请问您需要什么帮助呢。',
];

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            content: contents[0],
            step: 0,
            showBottom: false,
        };
    }

    @bind
    retry() {
        const nextStep = (this.get('step') + 1) % contents.length;
        this.set({
            step: nextStep,
            content: contents[nextStep],
            showBottom: false,
        });
    }
}
```

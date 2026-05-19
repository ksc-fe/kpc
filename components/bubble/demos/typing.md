---
title: 打字动画
order: 1
---

`typing` 适合展示整段内容逐步展开的过程。这个示例专门用来观察不同打字速度下的视觉效果，以及 `typingComplete` 何时触发。

```vdt
import {Bubble, Button} from 'kpc';

<div class="bubble-demo-typing">
    <div class="bubble-demo-typing-actions">
        <Button ev-click={this.playSlow}>慢速播放</Button>
        <Button ev-click={this.playFast}>快速播放</Button>
        <Button ev-click={this.playCharacterByCharacter}>逐字播放</Button>
    </div>
    <Bubble
        key={this.get('bubbleKey')}
        avatar={true}
        roleName="AI 助手"
        content={this.get('content')}
        typing={this.get('typing')}
        variant="plain"
        ev-typingComplete={this.onTypingComplete}
    >
        <b:extra>
            <div class="bubble-demo-typing-extra">
                <div>当前模式：{this.get('modeLabel')}</div>
                <div>完成次数：{this.get('completeCount')}</div>
            </div>
        </b:extra>
    </Bubble>
</div>
```

```styl
.bubble-demo-typing
    display flex
    flex-direction column
    gap 12px

.bubble-demo-typing-actions
    display flex
    flex-wrap wrap
    gap 8px

.bubble-demo-typing-extra
    display flex
    flex-direction column
    gap 4px
    color #6b7280
    font-size 12px
```

```ts
import {bind} from 'kpc';

interface Props {
    bubbleKey: number
    content: string
    typing: boolean | {
        interval: number
        step: number
    }
    modeLabel: string
    completeCount: number
}

const fullText = 'Bubble 的 typing 会在内容稳定后逐步推进，适合回答生成完成后的展示动画。';

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            bubbleKey: 0,
            content: fullText,
            typing: false,
            modeLabel: '未播放',
            completeCount: 0,
        };
    }

    play(interval: number, step: number, modeLabel: string) {
        this.set({
            bubbleKey: this.get('bubbleKey') + 1,
            content: fullText,
            typing: {interval, step},
            modeLabel,
            completeCount: 0,
        });
    }

    @bind
    playSlow() {
        this.play(80, 2, '慢速播放');
    }

    @bind
    playFast() {
        this.play(24, 6, '快速播放');
    }

    @bind
    playCharacterByCharacter() {
        this.play(48, 1, '逐字播放');
    }

    @bind
    onTypingComplete() {
        this.set('completeCount', this.get('completeCount') + 1);
    }
}
```

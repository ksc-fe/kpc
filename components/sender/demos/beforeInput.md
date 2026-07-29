---
title: 输入区上方扩展
order: 8
---

通过 `beforeInput` 扩展点在输入区上方放置任意内容，例如推荐问题、引用消息、提示横幅等。

```vdt
import {Sender, Tag} from 'kpc';

<Sender v-model:value="value"
    ev-messageSend={this.onMessageSend}
>
    <b:beforeInput>
        <div class="sender-demo-suggestions">
            <span class="sender-demo-suggestions-title">试试这些问题：</span>
            <Tag v-for={this.get('suggestions')}
                ev-click={this.pick.bind(this, $value)}
            >{$value}</Tag>
        </div>
    </b:beforeInput>
</Sender>
```

```styl
.sender-demo-suggestions
    display flex
    align-items center
    flex-wrap wrap
    gap 8px
.sender-demo-suggestions-title
    color #868A9C
    font-size 12px
```

```ts
import {bind} from 'kpc';
import type {MessageSendPayload} from 'kpc';

interface Props {
    value?: string
    suggestions?: string[]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            value: '',
            suggestions: [
                '帮我总结这份会议纪要',
                '生成一段产品介绍',
                '解释一下 React Server Components',
            ],
        };
    }

    @bind
    pick(text: string) {
        this.set('value', text);
    }

    @bind
    onMessageSend(_payload: MessageSendPayload) {
        this.set('suggestions', []);
    }
}
```

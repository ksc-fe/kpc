---
title: 输入前缀
order: 9
---

通过 `prefix` 扩展点在输入区左侧追加前缀内容，适合放置图标、快捷入口、模型标识等。

```vdt
import {Sender, Icon} from 'kpc';

<Sender v-model:value="value"
    ev-messageSend={this.onMessageSend}
>
    <b:prefix>
        <Icon class="k-icon-message" />
    </b:prefix>
</Sender>
```

```ts
import {bind, Message} from 'kpc';
import type {MessageSendPayload} from 'kpc';

interface Props {
    value?: string
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {value: ''};
    }

    @bind
    onMessageSend(payload: MessageSendPayload) {
        Message.success('发送：' + payload.value);
    }
}
```

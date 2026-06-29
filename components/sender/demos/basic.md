---
title: 基础用法
order: 0
---

最基础的用法：通过 `value` 绑定输入框文本，`Enter` 发送、`Shift + Enter` 换行。点击发送按钮或按 `Enter` 都会触发 `messageSend` 事件。

```vdt
import {Sender} from 'kpc';

<Sender v-model:value="value"
    ev-messageSend={this.onMessageSend}
    fileView="media"
/>
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

---
title: 生成中状态
order: 2
---

通过 `generating` 控制发送按钮状态。`generating=true` 时按钮会切换为停止按钮，点击停止按钮会触发 `stopGenerate` 事件。

```vdt
import {Sender} from 'kpc';

<Sender v-model:value="value"
    generating={this.get('generating')}
    ev-messageSend={this.onMessageSend}
    ev-stopGenerate={this.onStopGenerate}
/>
```

```ts
import {bind} from 'kpc';
import type {MessageSendPayload} from 'kpc';

interface Props {
    value?: string
    generating?: boolean
}

export default class extends Component<Props> {
    static template = template;

    private timer: any = null;

    static defaults() {
        return {value: '', generating: false};
    }

    @bind
    onMessageSend(_payload: MessageSendPayload) {
        this.set('generating', true);
        this.timer = setTimeout(() => this.set('generating', false), 5000);
    }

    @bind
    onStopGenerate() {
        clearTimeout(this.timer);
        this.set('generating', false);
    }
}
```

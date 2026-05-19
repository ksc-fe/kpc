---
title: 自定义按钮
order: 10
---

通过 `attachmentsButton` 和 `sendButton` 扩展点自定义附件按钮与发送按钮。`sendButton` 会接收当前状态，方便业务接入自己的样式和交互。

```vdt
import {Sender, Button, Icon} from 'kpc';

<Sender v-model:value="value"
    generating={this.get('generating')}
    ev-messageSend={this.onMessageSend}
    ev-stopGenerate={this.onStopGenerate}
>
    <b:attachmentsButton>
        <Button size="small" type="none">
            <Icon class="k-icon-paper" />
            上传文件
        </Button>
    </b:attachmentsButton>
    <b:sendButton args="scope">
        <Button type="primary"
            disabled={scope.disabled && !scope.generating}
            loading={scope.loading}
            ev-click={scope.generating ? scope.stopGenerate : scope.send}
        >{scope.generating ? '停止' : '发送'}</Button>
    </b:sendButton>
</Sender>
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
        this.timer = setTimeout(() => this.set('generating', false), 3000);
    }

    @bind
    onStopGenerate() {
        clearTimeout(this.timer);
        this.set('generating', false);
    }
}
```

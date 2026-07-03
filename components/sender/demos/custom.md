---
title: 自定义按钮
order: 10
---

通过 `uploadButton` 和 `sendButton` 扩展点自定义上传按钮与发送按钮。`uploadButton` 会跟随 `uploadButton` 属性的位置渲染，并接收当前上传入口状态。

```vdt
import {Sender, Button, Icon} from 'kpc';

<Sender v-model:value="value"
    generating={this.get('generating')}
    ev-messageSend={this.onMessageSend}
    ev-stopGenerate={this.onStopGenerate}
>
    <b:uploadButton args="scope">
        <Button size="small"
            type="none"
            disabled={scope.disabled || scope.reachLimit}
            ev-click={scope.pickFiles}
        >
            <Icon class="k-icon-paper" />
            上传文件
        </Button>
    </b:uploadButton>
    <b:sendButton args="scope">
        <Button type="primary"
            disabled={scope.generating ? scope.stopDisabled : scope.disabled}
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

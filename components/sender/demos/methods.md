---
title: 实例方法
order: 11
---

当业务需要从外部主动控制 `Sender` 时，可以通过 `ref` 调用实例方法。下面示例演示了 `focus / blur / submit / clear / stopGenerate` 的常见用法。

```vdt
import {Sender, Button} from 'kpc';

<div class="sender-demo-methods">
    <div class="sender-demo-methods-actions">
        <Button
            size="small"
            disabled={this.get('focused')}
            ev-click={this.handleFocus}
        >focus</Button>
        <Button
            size="small"
            disabled={!this.get('focused')}
            ev-click={this.handleBlur}
        >blur</Button>
        <Button
            type="primary"
            size="small"
            disabled={this.isSubmitDisabled()}
            ev-click={this.handleSubmit}
        >submit</Button>
        <Button
            size="small"
            disabled={this.isClearDisabled()}
            ev-click={this.handleClear}
        >clear</Button>
        <Button
            size="small"
            disabled={!this.get('generating')}
            ev-click={this.handleStopGenerate}
        >stopGenerate</Button>
    </div>

    <Sender
        ref={(i) => this.senderRef = i}
        v-model:value="value"
        v-model:attachments="attachments"
        generating={this.get('generating')}
        ev-focus={this.onFocus}
        ev-blur={this.onBlur}
        ev-messageSend={this.onMessageSend}
        ev-stopGenerate={this.onStopGenerate}
    />
</div>
```

```styl
.sender-demo-methods
    display flex
    flex-direction column
    gap 12px

.sender-demo-methods-actions
    display flex
    flex-wrap wrap
    gap 8px
```

```ts
import {bind, Message} from 'kpc';
import type {Sender, SenderAttachment, MessageSendPayload} from 'kpc';

interface Props {
    value?: string
    attachments?: SenderAttachment[]
    generating?: boolean
    focused?: boolean
}

export default class extends Component<Props> {
    static template = template;

    private senderRef: Sender | null = null;

    static defaults() {
        return {
            value: '帮我整理一下这份附件内容',
            attachments: [
                {key: 'a', uid: 'a', name: 'brief.pdf', byte: 128 * 1024, status: 'done' as const},
            ] as SenderAttachment[],
            generating: false,
            focused: false,
        };
    }

    isSubmitDisabled() {
        if (this.get('generating')) return true;
        const value = (this.get('value') || '').trim();
        const attachments = this.get('attachments') || [];
        return !value && attachments.length === 0;
    }

    isClearDisabled() {
        const value = (this.get('value') || '').trim();
        const attachments = this.get('attachments') || [];
        return !value && attachments.length === 0;
    }

    @bind
    onFocus() {
        this.set('focused', true);
    }

    @bind
    onBlur() {
        this.set('focused', false);
    }

    @bind
    onMessageSend(payload: MessageSendPayload) {
        this.set('generating', true);
        Message.success(`调用 submit() 成功，发送内容：${payload.value || '附件消息'}`);
    }

    @bind
    onStopGenerate() {
        this.set('generating', false);
        Message.warning('已触发 stopGenerate()');
    }

    @bind
    handleFocus() {
        this.senderRef?.focus();
        Message.info('已调用 focus()');
    }

    @bind
    handleBlur() {
        this.senderRef?.blur();
        Message.info('已调用 blur()');
    }

    @bind
    handleSubmit() {
        this.senderRef?.submit();
    }

    @bind
    handleClear() {
        this.senderRef?.clear();
        Message.info('已调用 clear()');
    }

    @bind
    handleStopGenerate() {
        this.senderRef?.stopGenerate();
    }
}
```

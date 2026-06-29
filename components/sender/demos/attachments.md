---
title: 附件上传
order: 1
---

通过 `attachments` 管理附件列表，并通过 `uploadProps` 配置类型、数量、大小等上传规则。`mapAttachment` 可用于定制运行时新建附件的展示字段（如 `loadingText / errorText`）。

```vdt
import {Sender} from 'kpc';

<Sender v-model:value="value"
    v-model:attachments="attachments"
    uploadProps={this.getUploadProps()}
    ev-messageSend={this.onMessageSend}
    ev-uploadProgress={this.onUploadProgress}
    ev-uploadSuccess={this.onUploadSuccess}
    ev-uploadError={this.onUploadError}
/>
```

```ts
import {bind} from 'kpc';
import type {SenderAttachment, MessageSendPayload} from 'kpc';

interface Props {
    value?: string
    attachments?: SenderAttachment[]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {value: '', attachments: []};
    }

    getUploadProps() {
        return {
            action: 'https://httpbin.org/post',
            timeout: 15000,
            accept: '.pdf,.doc,.docx,image/*',
            multiple: true,
            limit: 5,
            mapAttachment: (file: File) => ({
                loadingText: `正在上传`,
                errorText: `上传失败了噢`,
            }),
        };
    }

    @bind
    onMessageSend(payload: MessageSendPayload) {
        console.log('send', payload.value, payload.attachments);
    }

    @bind
    onUploadProgress(e: ProgressEvent, file: SenderAttachment) {
        console.log('upload progress', file.name, e);
    }

    @bind
    onUploadSuccess(res: any, file: SenderAttachment) {
        console.log('upload success', file.name, res);
    }

    @bind
    onUploadError(error: Error, file?: SenderAttachment) {
        console.log('upload error', file?.name, error.message);
    }
}
```

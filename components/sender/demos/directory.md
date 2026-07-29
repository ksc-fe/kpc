---
title: 上传文件夹
order: 4
---

通过 `uploadProps.directory` 可以支持上传文件夹，目录中的文件会直接加入附件区，并保留相对路径。文件夹选择能力依赖浏览器支持，可参考 [caniuse](https://caniuse.com/#feat=input-file-directory)；如果再配合 `dragFile={true}`，也支持把文件夹直接拖进页面。

```vdt
import {Sender} from 'kpc';

<Sender v-model:value="value"
    v-model:attachments="attachments"
    uploadProps={{
        directory: true,
        limit: 20,
    }}
    ev-messageSend={this.onMessageSend}
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

    @bind
    onMessageSend(payload: MessageSendPayload) {
        console.log(
            'send folder files',
            payload.attachments.map(item => ({
                name: item.name,
                relativePath: item.relativePath,
            }))
        );
    }
}
```

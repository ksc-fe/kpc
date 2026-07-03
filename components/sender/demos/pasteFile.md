---
title: 粘贴上传
order: 6
---

通过 `pasteFile` 开启粘贴上传。聚焦输入框后，直接粘贴剪贴板里的文件即可加入附件区。这个示例只允许上传图片；如果粘贴了非图片文件，会触发 `uploadError`，并用 `Message.error` 给出提示。

```vdt
import {Sender} from 'kpc';

<Sender
    v-model:value="value"
    v-model:attachments="attachments"
    pasteFile={true}
    uploadProps={{
        accept: 'image/*',
        limit: 5,
    }}
    ev-uploadError={this.onUploadError}
/>
```

```ts
import {bind, Message} from 'kpc';
import type {SenderAttachment} from 'kpc';

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
    onUploadError(error: Error) {
        Message.error(error.message);
    }
}
```

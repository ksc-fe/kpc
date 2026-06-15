---
title: 视觉模型
order: 3
---

设置 `fileView="media"` 后，附件会以图片/视频等媒体缩略图展示。`uploadButton="list"` 会把上传入口放到附件列表末尾。下面通过 `configure` 扩展点提供一个小尺寸选择框，可切换为视频上传。

```vdt
import {Sender, Select, Option} from 'kpc';

<Sender fileView="media"
    uploadButton="list"
    v-model:value="value"
    v-model:attachments="attachments"
    uploadProps={{accept: this.getUploadAccept(), multiple: true, limit: 6}}
>
    <b:configure>
        <Select v-model:value="mediaType" size="small" width={92}>
            <Option value="image">图片</Option>
            <Option value="video">视频</Option>
        </Select>
    </b:configure>
</Sender>
```

```ts
import type {SenderAttachment} from 'kpc';

interface Props {
    value?: string
    attachments?: SenderAttachment[]
    mediaType?: 'image' | 'video' | null
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            value: '',
            attachments: [],
            mediaType: 'image' as 'image' | 'video' | null,
        };
    }

    getUploadAccept() {
        return this.get('mediaType') === 'video' ? 'video/*' : 'image/*';
    }
}
```

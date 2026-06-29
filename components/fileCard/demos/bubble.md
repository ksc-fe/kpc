---
title: 在 Bubble 中使用
order: 6
---

在对话场景里，常把用户上传素材或模型输出文件放在气泡的 `attachments` 插槽中。

```vdt
import {Bubble, FileCard, FileCardList} from 'kpc';

<div class="file-card-demo-bubble">
    <Bubble avatar={true} roleName="你">
        <b:attachments>
            <FileCardList
                items={this.get('imageFiles')}
                overflow="scrollY"
            />
        </b:attachments>
        <b:content>
            这批参考图先帮我整理一下，挑几张更适合作为封面方向。
        </b:content>
    </Bubble>

    <Bubble avatar={true} roleName="你">
        <b:attachments>
            <FileCardList
                items={this.get('fileItems')}
                overflow="scrollX"
            />
        </b:attachments>
        <b:content>
            这些文档和素材包也一起带上，按这个版本先出第一版脚本。
        </b:content>
    </Bubble>

    <Bubble avatar={true} roleName="AI 助手" variant="plain">
        <b:attachments>
            <FileCard
                name="封面图.png"
                type="image"
                status="loading"
                width={160}
                height={160}
                loadingVariant="flow"
            />
        </b:attachments>
    </Bubble>
</div>
```

```styl
.file-card-demo-bubble
    display flex
    flex-direction column
    gap 16px
```

```ts
import type {FileCardListItem} from 'kpc';

const imageSrc = 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80';

interface Props {
    imageFiles: FileCardListItem[]
    fileItems: FileCardListItem[]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            imageFiles: [
                {
                    key: 'img-1',
                    name: '门店照片-01.jpg',
                    src: imageSrc,
                    status: 'done',
                    byte: 1024 * 680,
                },
                {
                    key: 'img-2',
                    name: '门店照片-02.jpg',
                    src: imageSrc,
                    status: 'done',
                    byte: 1024 * 520,
                },
                {
                    key: 'img-3',
                    name: '门店照片-03.jpg',
                    src: imageSrc,
                    status: 'done',
                    byte: 1024 * 610,
                },
                {
                    key: 'img-4',
                    name: '门店照片-04.jpg',
                    src: imageSrc,
                    status: 'done',
                    byte: 1024 * 560,
                },
                {
                    key: 'img-5',
                    name: '门店照片-05.jpg',
                    src: imageSrc,
                    status: 'done',
                    byte: 1024 * 590,
                },
                {
                    key: 'img-6',
                    name: '门店照片-01.jpg',
                    src: imageSrc,
                    status: 'done',
                    byte: 1024 * 680,
                },
                {
                    key: 'img-7',
                    name: '门店照片-02.jpg',
                    src: imageSrc,
                    status: 'done',
                    byte: 1024 * 520,
                },
                {
                    key: 'img-8',
                    name: '门店照片-03.jpg',
                    src: imageSrc,
                    status: 'done',
                    byte: 1024 * 610,
                },
                {
                    key: 'img-9',
                    name: '门店照片-04.jpg',
                    src: imageSrc,
                    status: 'done',
                    byte: 1024 * 560,
                },
                {
                    key: 'img-10',
                    name: '门店照片-05.jpg',
                    src: imageSrc,
                    status: 'done',
                    byte: 1024 * 590,
                },
            ],
            fileItems: [
                {
                    key: 'file-1',
                    name: '镜头脚本.pdf',
                    type: 'file',
                    byte: 1024 * 120,
                    src: 'https://example.com/script.pdf',
                },
                {
                    key: 'file-2',
                    name: '品牌规范.pdf',
                    type: 'file',
                    byte: 1024 * 1024 * 1.2,
                    src: 'https://example.com/brand-guide.pdf',
                },
            ],
        } as Props;
    }
}
```

---
title: 列表布局与删除
order: 5
---

`FileCardList` 组织渲染多条 `FileCard`。`overflow` 控制超出后的排布：`wrap` 换行、`scrollX` / `scrollY` 在单行或单列内滚动。`deleteable` 为列表项统一打开删除角标。

```vdt
import {FileCardList, ButtonGroup, Button} from 'kpc';

<div class="file-card-demo-list">
    <div class="file-card-demo-list-toolbar">
        <span>溢出方式：</span>
        <ButtonGroup v-model="overflow" checkType="radio">
            <Button value="scrollX">scrollX</Button>
            <Button value="scrollY">scrollY</Button>
            <Button value="wrap">wrap</Button>
        </ButtonGroup>
    </div>

    <div class="file-card-demo-list-section">
        <div class="file-card-demo-list-title">各类文件</div>
        <div class="file-card-content">
            <FileCardList
                items={this.get('fileItems')}
                overflow={this.get('overflow')}
                deleteable
                ev-delete={this.onDeleteFile}
            />
        </div>
    </div>

    <div class="file-card-demo-list-section">
        <div class="file-card-demo-list-title">图片列表</div>
        <div class="file-card-content">
            <FileCardList
                items={this.get('imageItems')}
                overflow={this.get('overflow')}
                ev-delete={this.onDeleteImage}
                deleteable
            />
        </div>
    </div>
</div>
```

```styl
.file-card-demo-list
    display flex
    flex-direction column
    gap 20px

.file-card-demo-list-toolbar
    display flex
    align-items center
    gap 12px
    flex-wrap wrap

.file-card-demo-list-section
    display flex
    flex-direction column
    gap 12px
    max-width 100%

.file-card-demo-list-title
    font-size 14px
    line-height 20px
    color #3F3F51
    font-weight 500
```

```ts
import {bind} from 'kpc';
import type {FileCardListItem} from 'kpc';

const imageSrc = 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80';

interface Props {
    overflow: 'scrollX' | 'scrollY' | 'wrap'
    fileItems: FileCardListItem[]
    imageItems: FileCardListItem[]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            overflow: 'scrollX',
            fileItems: [
                {
                    key: 'f-1',
                    name: '品牌规范.pdf',
                    byte: 1024 * 1024 * 1.2,
                    src: 'https://example.com/brand-guide.pdf',
                },
                {
                    key: 'f-2',
                    name: '拍摄清单.docx',
                    byte: 1024 * 84,
                    src: 'https://example.com/list.docx',
                },
                {
                    key: 'f-3',
                    name: '预算汇总.xlsx',
                    byte: 1024 * 320,
                    src: 'https://example.com/budget.xlsx',
                },
                {
                    key: 'f-4',
                    name: '设计源文件.psd',
                    type: 'file',
                    byte: 1024 * 1024 * 42,
                    src: 'https://example.com/source.psd',
                },
                {
                    key: 'f-5',
                    name: '素材包.zip',
                    byte: 1024 * 1024 * 18,
                    src: 'https://example.com/assets.zip',
                },
                {
                    key: 'f-6',
                    name: '采访录音.mp3',
                    byte: 1024 * 1024 * 6,
                    type: 'file',
                    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
                },
                {
                    key: 'f-7',
                    name: '封面需求.txt',
                    byte: 1024 * 12,
                    src: 'https://example.com/cover-brief.txt',
                },
                {
                    key: 'f-8',
                    name: '补充素材.rar',
                    byte: 1024 * 1024 * 24,
                    src: 'https://example.com/extra-assets.rar',
                },
                {
                    key: 'f-9',
                    name: '素材包.zip',
                    byte: 1024 * 1024 * 18,
                    src: 'https://example.com/assets.zip',
                },
                {
                    key: 'f-10',
                    name: '采访录音.mp3',
                    byte: 1024 * 1024 * 6,
                    type: 'file',
                    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
                },
                {
                    key: 'f-11',
                    name: '封面需求.txt',
                    byte: 1024 * 12,
                    src: 'https://example.com/cover-brief.txt',
                },
                {
                    key: 'f-12',
                    name: '补充素材.rar',
                    byte: 1024 * 1024 * 24,
                    src: 'https://example.com/extra-assets.rar',
                },
                {
                    key: 'f-13',
                    name: '测试.html',
                    byte: 1024 * 2,
                    src: 'https://example.com/test.html',
                },
                {
                    key: 'f-14',
                    name: '演示.ppt',
                    byte: 1024 * 10,
                    src: 'https://example.com/test.ppt',
                },
                {
                    key: 'f-15',
                    name: '测试用例.md',
                    byte: 1024 * 2,
                    src: 'https://example.com/test.md',
                },
                {
                    key: 'f-16',
                    name: '组件文档.docx',
                    byte: 1024 * 10,
                    src: 'https://example.com/test.docx',
                },
            ],
            imageItems: [
                {
                    key: 'i-1',
                    name: 'scene-01.jpg',
                    src: imageSrc,
                    byte: 1024 * 512,
                },
                {
                    key: 'i-2',
                    name: 'scene-02.jpg',
                    src: imageSrc,
                    byte: 1024 * 450,
                },
                {
                    key: 'i-3',
                    name: 'scene-03.jpg',
                    src: imageSrc,
                    byte: 1024 * 520,
                },
                {
                    key: 'i-4',
                    name: 'scene-04.jpg',
                    src: imageSrc,
                    byte: 1024 * 488,
                },
                {
                    key: 'i-5',
                    name: 'scene-05.jpg',
                    src: imageSrc,
                    byte: 1024 * 512,
                },
                {
                    key: 'i-6',
                    name: 'scene-06.jpg',
                    src: imageSrc,
                    byte: 1024 * 450,
                },
                {
                    key: 'i-7',
                    name: 'scene-07.jpg',
                    src: imageSrc,
                    byte: 1024 * 520,
                },
                {
                    key: 'i-8',
                    name: 'scene-08.jpg',
                    src: imageSrc,
                    byte: 1024 * 488,
                },
                {
                    key: 'i-9',
                    name: 'scene-06.jpg',
                    src: imageSrc,
                    byte: 1024 * 450,
                },
                {
                    key: 'i-10',
                    name: 'scene-07.jpg',
                    src: imageSrc,
                    byte: 1024 * 520,
                },
                {
                    key: 'i-11',
                    name: 'scene-08.jpg',
                    src: imageSrc,
                    byte: 1024 * 488,
                },
                {
                    key: 'i-12',
                    name: 'scene-08.jpg',
                    src: imageSrc,
                    byte: 1024 * 488,
                },
                {
                    key: 'i-13',
                    name: 'scene-06.jpg',
                    src: imageSrc,
                    byte: 1024 * 450,
                },
                {
                    key: 'i-14',
                    name: 'scene-07.jpg',
                    src: imageSrc,
                    byte: 1024 * 520,
                },
                {
                    key: 'i-15',
                    name: 'scene-08.jpg',
                    src: imageSrc,
                    byte: 1024 * 488,
                },
            ],
        } as Props;
    }

    @bind
    onDeleteFile(item: FileCardListItem) {
        this.set({
            fileItems: this.get('fileItems').filter(current => current.key !== item.key),
        });
    }

    @bind
    onDeleteImage(item: FileCardListItem) {
        this.set({
            imageItems: this.get('imageItems').filter(current => current.key !== item.key),
        });
    }
}
```

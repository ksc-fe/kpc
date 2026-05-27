---
title: 状态与进度
order: 3
---

支持四种状态：`default / loading / error / done`。  
`loading` 状态可传 `loadingText`；`error` 状态可传 `errorText`。
支持 `percent` 百分比进度；图片、视频、音频类型会在左上方 loading 圆圈旁展示进度。

```vdt
import {FileCardList} from 'kpc';

<div class="file-card-demo-loading">
    <div class="file-card-demo-loading-section">
        <div class="file-card-demo-loading-title">文件</div>
        <FileCardList
            items={this.get('fileItems')}
            overflow="scrollX"
        />
    </div>

    <div class="file-card-demo-loading-section">
        <div class="file-card-demo-loading-title">图片</div>
        <FileCardList
            items={this.get('imageItems')}
            overflow="scrollX"
        />
    </div>

    <div class="file-card-demo-loading-section">
        <div class="file-card-demo-loading-title">视频</div>
        <FileCardList
            items={this.get('videoItems')}
            overflow="scrollX"
        />
    </div>

    <div class="file-card-demo-loading-section">
        <div class="file-card-demo-loading-title">音频</div>
        <FileCardList
            items={this.get('audioItems')}
            overflow="scrollX"
        />
    </div>
</div>
```

```styl
.file-card-demo-loading
    display flex
    flex-direction column
    gap 20px

.file-card-demo-loading-section
    display flex
    flex-direction column
    gap 12px
    max-width 100%

.file-card-demo-loading-title
    font-size 14px
    line-height 20px
    color #3F3F51
    font-weight 500
```

```ts
import type {FileCardListItem} from 'kpc';

interface Props {
    fileItems: FileCardListItem[]
    imageItems: FileCardListItem[]
    videoItems: FileCardListItem[]
    audioItems: FileCardListItem[]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            fileItems: [
                {
                    key: 'file-loading-empty',
                    name: '需求文档.pdf',
                    type: 'file',
                    status: 'loading',
                    byte: 1024 * 320,
                },
                {
                    key: 'file-loading-progress',
                    name: '素材包.zip',
                    type: 'file',
                    status: 'loading',
                    percent: 52,
                    byte: 1024 * 1024 * 3,
                    src: 'https://example.com/assets.zip',
                },
                {
                    key: 'file-error',
                    name: '合同附件.pdf',
                    type: 'file',
                    status: 'error',
                    byte: 1024 * 180,
                    src: 'https://example.com/contract.pdf',
                },
                {
                    key: 'file-mini-loading',
                    name: 'mini上传状态.pdf',
                    type: 'file',
                    size: 'mini',
                    status: 'loading',
                    percent: 42,
                },
                {
                    key: 'file-mini-error',
                    name: 'mini失败状态.pdf',
                    type: 'file',
                    size: 'mini',
                    status: 'error',
                },
            ],
            imageItems: [
                {
                    key: 'image-loading-empty',
                    name: '封面草图.png',
                    status: 'loading',
                },
                {
                    key: 'image-loading-src',
                    name: '用户上传原图.png',
                    status: 'loading',
                    loadingText: '上传中',
                    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
                },
                {
                    key: 'image-loading-progress',
                    name: '门店参考图.jpg',
                    status: 'loading',
                    percent: 48,
                    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
                },
                {
                    key: 'image-error-src',
                    name: '海报封面.png',
                    status: 'error',
                    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
                },
                {
                    key: 'image-error',
                    name: '错误图.png',
                    status: 'error',
                    errorText: '上传失败',
                },
            ],
            videoItems: [
                {
                    key: 'video-loading-empty',
                    name: '模型生成视频.mp4',
                    type: 'video',
                    status: 'loading',
                    poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
                },
                {
                    key: 'video-loading-src',
                    name: '素材预览.mp4',
                    type: 'video',
                    status: 'loading',
                    loadingText: '上传中',
                    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
                    poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
                    videoProps: {muted: true, playsinline: true},
                },
                {
                    key: 'video-loading-progress',
                    name: '最终成片.mp4',
                    type: 'video',
                    status: 'loading',
                    percent: 76,
                    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
                    poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
                    videoProps: {muted: true, playsinline: true},
                },
                {
                    key: 'video-error-src',
                    name: '预告片.mp4',
                    type: 'video',
                    status: 'error',
                    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
                },
                {
                    key: 'video-error',
                    name: '错误视频.mp4',
                    type: 'video',
                    status: 'error',
                    errorText: '上传失败',
                },
            ],
            audioItems: [
                {
                    key: 'audio-loading-empty',
                    name: '品牌旁白.mp3',
                    type: 'audio',
                    status: 'loading',
                },
                {
                    key: 'audio-loading-src',
                    name: '采访录音.mp3',
                    type: 'audio',
                    status: 'loading',
                    loadingText: '上传中',
                    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
                },
                {
                    key: 'audio-loading-progress',
                    name: '采访录音.mp3',
                    type: 'audio',
                    status: 'loading',
                    percent: 36,
                    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
                },
                {
                    key: 'audio-error-src',
                    name: '采访录音.mp3',
                    type: 'audio',
                    status: 'error',
                    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
                },
                {
                    key: 'audio-error',
                    name: '最终旁白.m4a',
                    type: 'audio',
                    status: 'error',
                    errorText: '上传失败',
                },
            ],
        } as Props;
    }
}
```

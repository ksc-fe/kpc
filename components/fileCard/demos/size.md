---
title: 尺寸
order: 1
---

通过 `size` 切换 `mini / small / default / large`。

```vdt
import {FileCardList} from 'kpc';

<div class="file-card-demo-size">
    <div class="file-card-demo-size-row">
        <div class="file-card-demo-size-label">文件</div>
        <div class="file-card-demo-size-list">
            <FileCardList
                overflow="scrollX"
                items={[
                    {key: 'file-l', size: 'large', name: '品牌规范.pdf', byte: 1024 * 1024 * 1.8, src: 'https://example.com/brand-guide.pdf'},
                    {key: 'file-d', size: 'default', name: '品牌规范.pdf', byte: 1024 * 1024 * 1.8, src: 'https://example.com/brand-guide.pdf'},
                    {key: 'file-s', size: 'small', name: '品牌规范.pdf', byte: 1024 * 1024 * 1.8, src: 'https://example.com/brand-guide.pdf'},
                    {key: 'file-m', size: 'mini', name: '品牌规范.pdf', byte: 1024 * 1024 * 1.8, src: 'https://example.com/brand-guide.pdf'},
                ]}
            />
        </div>
    </div>

    <div class="file-card-demo-size-row">
        <div class="file-card-demo-size-label">图片</div>
        <div class="file-card-demo-size-list">
            <FileCardList
                overflow="scrollX"
                items={[
                    {key: 'img-l', size: 'large', name: '门店参考图.jpg', src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80'},
                    {key: 'img-d', size: 'default', name: '门店参考图.jpg', src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80'},
                    {key: 'img-s', size: 'small', name: '门店参考图.jpg', src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80'},
                    {key: 'img-m', size: 'mini', name: '门店参考图.jpg', src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80'},
                ]}
            />
        </div>
    </div>

    <div class="file-card-demo-size-row">
        <div class="file-card-demo-size-label">视频</div>
        <div class="file-card-demo-size-list">
            <FileCardList
                overflow="scrollX"
                items={[
                    {key: 'vid-l', size: 'large', name: '模型预览.mp4', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80', videoProps: {muted: true, playsinline: true}},
                    {key: 'vid-d', size: 'default', name: '模型预览.mp4', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80', videoProps: {muted: true, playsinline: true}},
                    {key: 'vid-s', size: 'small', name: '模型预览.mp4', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80', videoProps: {muted: true, playsinline: true}},
                    {key: 'vid-m', size: 'mini', name: '模型预览.mp4', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80', videoProps: {muted: true, playsinline: true}},
                ]}
            />
        </div>
    </div>

    <div class="file-card-demo-size-row">
        <div class="file-card-demo-size-label">音频</div>
        <div class="file-card-demo-size-list">
            <FileCardList
                overflow="scrollX"
                items={[
                    {key: 'aud-l', size: 'large', status: 'done', name: '品牌旁白.mp3', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'},
                    {key: 'aud-d', size: 'default', status: 'done', name: '品牌旁白.mp3', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'},
                    {key: 'aud-s', size: 'small', status: 'done', name: '品牌旁白.mp3', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'},
                    {key: 'aud-m', size: 'mini', status: 'done', name: '品牌旁白.mp3', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'},
                ]}
            />
        </div>
    </div>
</div>
```

```styl
.file-card-demo-size
    display flex
    flex-direction column
    gap 20px

.file-card-demo-size-row
    display flex
    flex-direction column
    gap 8px
    align-items flex-start
    min-width 0
    width 100%

.file-card-demo-size-label
    font-size 14px
    line-height 20px
    color #3F3F51
    font-weight 500

.file-card-demo-size-list
    width 100%
    min-width 0
```

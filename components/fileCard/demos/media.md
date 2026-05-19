---
title: 媒体自动识别
order: 2
---

不传 `type` 时，组件会根据 `src`、扩展名等自动识别为 图片 / 视频 / 音频，复用 `Media` 的展示与预览能力。可配合 `poster` 作为视频封面、`videoProps` / `audioProps` 透传原生标签属性。

```vdt
import {FileCard} from 'kpc';

<div class="file-card-demo-media">
    <FileCard
        name="模型预览.mp4"
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
        byte={1024 * 1024 * 18}
        videoProps={{muted: true, playsinline: true}}
    />

    <FileCard
        name="品牌旁白.mp3"
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
        byte={1024 * 640}
        audioProps={{preload: 'auto'}}
    />

</div>
```

```styl
.file-card-demo-media
    display flex
    flex-direction column
    gap 20px
    align-items flex-start
    max-width 100%
```

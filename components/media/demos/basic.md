---
title: 基础用法
order: 0
---

`Media` 组件可以直接承载图片、视频、音频三种缩略图，并提供统一预览交互。

```vdt
import {Media} from 'kpc';

<div class="media-demo-basic">
    <Media
        name="参考图.png"
        type="image"
        showNameTooltip
        src="https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=640&q=80"
    />

    <Media
        name="产品预告.mp4"
        type="video"
        showNameTooltip
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=640&q=80"
    />

    <Media
        name="播客片段.mp3"
        type="audio"
        showNameTooltip
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
    />
</div>
```

```styl
.media-demo-basic
    display flex
    align-items center
    gap 12px
    flex-wrap wrap
```

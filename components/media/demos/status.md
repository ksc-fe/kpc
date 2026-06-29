---
title: 状态
order: 2
---

`status` 可以控制媒体缩略图的状态；不传或为 `default` 时，组件会根据媒体加载事件自动判断。

```vdt
import {Media} from 'kpc';

<div class="media-demo-status">
    <div class="media-demo-status-section">
        <div class="media-demo-status-label">加载中</div>
        <div class="media-demo-status-row">
            <Media
                name="图片加载中.png"
                type="image"
                status="loading"
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=320&q=80"
            />
            <Media
                name="视频加载中.mp4"
                type="video"
                status="loading"
            />
            <Media
                name="音频加载中.mp3"
                type="audio"
                status="loading"
            />
        </div>
    </div>

    <div class="media-demo-status-section">
        <div class="media-demo-status-label">加载失败</div>
        <div class="media-demo-status-row">
            <Media
                name="图片加载失败.png"
                type="image"
                status="error"
                src="https://example.com/broken.png"
            />
            <Media
                name="视频加载失败.mp4"
                type="video"
                status="error"
                src="https://example.com/broken.mp4"
            />
            <Media
                name="音频加载失败.mp3"
                type="audio"
                status="error"
                src="https://example.com/broken.mp3"
            />
        </div>
    </div>

    <div class="media-demo-status-section">
        <div class="media-demo-status-label">已完成</div>
        <div class="media-demo-status-row">
            <Media
                name="参考图.png"
                type="image"
                status="done"
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=320&q=80"
            />
            <Media
                name="产品预告.mp4"
                type="video"
                status="done"
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=320&q=80"
            />
            <Media
                name="播客片段.mp3"
                type="audio"
                status="done"
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
            />
        </div>
    </div>
</div>
```

```styl
.media-demo-status
    display flex
    flex-direction column
    align-items flex-start
    gap 16px

.media-demo-status-section
    display flex
    flex-direction column
    align-items flex-start
    gap 8px

.media-demo-status-label
    color #4C5160
    font-size 12px
    line-height 18px

.media-demo-status-row
    display flex
    align-items center
    gap 12px
    flex-wrap wrap
```

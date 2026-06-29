---
title: 尺寸控制
order: 1
---

默认尺寸为 `64`，`small` 为 `32`，`large` 为 `96`；也支持直接传 `width / height` 做自定义尺寸。

```vdt
import {Media} from 'kpc';

<div class="media-demo-size">
    <div class="media-demo-size-section">
        <div class="media-demo-size-label">图片</div>
        <div class="media-demo-size-row">
            <Media
                type="image"
                size="small"
                src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=240&q=80"
            />
            <Media
                type="image"
                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=240&q=80"
            />
            <Media
                type="image"
                size="large"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=320&q=80"
            />
        </div>
    </div>

    <div class="media-demo-size-section">
        <div class="media-demo-size-label">视频</div>
        <div class="media-demo-size-row">
            <Media
                name="预告片.mp4"
                type="video"
                size="small"
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
            <Media
                name="预告片.mp4"
                type="video"
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
            <Media
                name="预告片.mp4"
                type="video"
                size="large"
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </div>
    </div>

    <div class="media-demo-size-section">
        <div class="media-demo-size-label">音频</div>
        <div class="media-demo-size-row">
            <Media
                name="品牌播客.mp3"
                type="audio"
                size="small"
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
            />
            <Media
                name="品牌播客.mp3"
                type="audio"
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
            />
            <Media
                name="品牌播客.mp3"
                type="audio"
                size="large"
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
            />
        </div>
    </div>

    <div class="media-demo-size-section">
        <div class="media-demo-size-label">自定义宽高</div>
        <div class="media-demo-size-row">
            <Media
                name="横向海报.mp4"
                type="video"
                width={120}
                height={72}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
            <Media
                name="音频片段.mp3"
                type="audio"
                width={72}
                height={96}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
            />
        </div>
    </div>
</div>
```

```styl
.media-demo-size
    display flex
    flex-direction column
    align-items flex-start
    gap 16px

.media-demo-size-section
    display flex
    flex-direction column
    align-items flex-start
    gap 8px

.media-demo-size-label
    color #4C5160
    font-size 12px
    line-height 18px

.media-demo-size-row
    display flex
    align-items center
    gap 12px
    flex-wrap wrap
```

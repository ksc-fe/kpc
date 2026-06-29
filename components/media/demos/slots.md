---
title: 自定义状态层与遮罩
order: 3
---

通过 `loading`、`error` 和 `mask` 插槽可以自定义状态层和遮罩层展示。

```vdt
import {Media, Icon, Progress} from 'kpc';

<div class="media-demo-slots">
    <Media
        name="转码中.mp4"
        type="video"
        status="loading"
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    >
        <b:loading args="media">
            <div class="media-demo-slots-progress">
                <Progress type="circle" size="mini" percent={68} status="normal" />
            </div>
        </b:loading>
    </Media>

    <Media
        name="转码中.mp4"
        type="video"
        status="loading"
    >
        <b:loading args="media">
            <div class="media-demo-slots-progress">
                <Progress type="circle" size="mini" percent={28} status="normal" />
            </div>
        </b:loading>
    </Media>

    <Media
        name="封面加载失败.png"
        type="image"
        status="error"
        src="https://example.com/broken.png"
    >
        <b:error args="media">
            <div class="media-demo-slots-error">
                <Icon class="ion-alert-circled" />
                <span>{media.resolvedType === 'image' ? '图片不可用' : '加载失败'}</span>
            </div>
        </b:error>
    </Media>

    <Media
        name="播客转码中.mp3"
        type="audio"
        status="loading"
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
    >
        <b:loading args="media">
            <span class="media-demo-slots-audio-loading">42%</span>
        </b:loading>
    </Media>

    <Media
        name="播客资源失效.mp3"
        type="audio"
        status="error"
        src="https://example.com/broken-audio.mp3"
    >
        <b:error args="media">
            <span class="media-demo-slots-audio-error">已失效</span>
        </b:error>
    </Media>

    <Media
        name="海边步道.jpg"
        type="image"
        status="done"
        src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=640&q=80"
    >
        <b:mask args="media">
            <div class="media-demo-slots-mask">
                <button
                    class="media-demo-slots-mask-button"
                    type="button"
                    disabled={!media.canPreview}
                    ev-click={media.preview}
                >
                    <Icon class="k-icon-visible" />
                </button>
                <Icon class="k-icon-download" />
            </div>
        </b:mask>
    </Media>

    <Media
        name="产品预告.mp4"
        type="video"
        status="done"
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    >
        <b:mask args="media">
            <div class="media-demo-slots-mask">
                <button
                    class="media-demo-slots-mask-button"
                    type="button"
                    disabled={!media.canPreview}
                    ev-click={media.preview}
                >
                    <Icon class="ion-ios-play" />
                </button>
            </div>
        </b:mask>
    </Media>

    <Media
        name="播客片段.mp3"
        type="audio"
        status="done"
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
    >
        <b:mask args="media">
            <div class="media-demo-slots-mask">
                <button
                    class="media-demo-slots-mask-button"
                    type="button"
                    disabled={!media.canPreview}
                    ev-click={media.preview}
                >
                    <Icon class="ion-ios-play" />
                </button>
            </div>
        </b:mask>
    </Media>

</div>
```

```styl
.media-demo-slots
    display flex
    align-items center
    gap 12px
    flex-wrap wrap

.media-demo-slots-progress
    display flex
    align-items center
    justify-content center

.media-demo-slots-progress .k-progress
    flex 0 0 auto
    &.k-circle.k-mini
        width 36px
        height 36px

.media-demo-slots-error
    display flex
    flex-direction column
    align-items center
    gap 4px
    color #D14343
    font-size 12px
    line-height 16px

.media-demo-slots-error .k-icon
    font-size 18px

.media-demo-slots-audio-loading
    color #3A3D52
    font-size 12px
    line-height 16px

.media-demo-slots-audio-error
    color #D14343
    font-size 12px
    line-height 16px

.media-demo-slots-mask
    display flex
    align-items center
    justify-content center
    gap 4px
    width 100%
    height 100%
    color #fff
    font-size 12px
    line-height 16px

.media-demo-slots-mask .k-icon
    font-size 16px

.media-demo-slots-mask-button
    display inline-flex
    align-items center
    justify-content center
    width 24px
    height 24px
    border none
    border-radius 12px
    background rgba(0, 0, 0, 0.36)
    color #fff
    cursor pointer
    padding 0
    outline none

.media-demo-slots-mask-button:disabled
    opacity 0.5
    cursor not-allowed

```

---
title: 自定义图标与遮罩
order: 4
---

`icon` 扩展点可以自定义普通文件左侧图标区；`description` 扩展点可以自定义副标题；`mask` 扩展点可以自定义悬浮层内容。

```vdt
import {FileCard, Button, Icon} from 'kpc';

<div class="file-card-demo-custom">
    <FileCard
        name="品牌物料源文件.psd"
        type="file"
        byte={1024 * 1024 * 58}
        src="https://example.com/brand.psd"
        showDelIcon
        style={{width: '220px'}}
    >
        <b:icon>
            <div class="file-card-demo-custom-icon">PSD</div>
        </b:icon>
        <b:description>
            <div class="file-card-demo-custom-description">
                <span>58 MB</span>
                <Button
                    icon
                    type="none"
                    title="下载"
                    className="file-card-demo-custom-download"
                >
                    <Icon class="k-icon-download" />
                </Button>
            </div>
        </b:description>
    </FileCard>

    <FileCard
        name="概念海报.jpg"
        type="file"
        byte={1024 * 512}
        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
        showDelIcon
        style={{width: '220px'}}
    >
        <b:mask args="media">
            <div class="file-card-demo-custom-mask" title={media.name}>
                <div class="file-card-demo-custom-mask-title">精选参考图</div>
                <Button size="small">查看详情</Button>
            </div>
        </b:mask>
    </FileCard>

    <FileCard
        name="海边步道.jpg"
        type="image"
        src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=640&q=80"
    >
        <b:mask args="media">
            <div class="file-card-demo-slots-mask">
                <Icon class="k-icon-visible" ev-click={media.preview} hoverable />
                <Icon class="k-icon-download" hoverable />
            </div>
        </b:mask>
    </FileCard>

</div>
```

```styl
.file-card-demo-custom
    display flex
    flex-direction column
    gap 20px
    align-items flex-start

.file-card-demo-custom-icon
    width 100%
    height 100%
    display flex
    align-items center
    justify-content center
    background linear-gradient(135deg, #1E293B, #475569)
    color #fff
    font-size 11px
    font-weight 700

.file-card-demo-custom-mask
    width 100%
    display flex
    flex-direction column
    align-items center
    gap 10px
    color #3F3F51

.file-card-demo-custom-mask-title
    font-size 14px
    font-weight 500

.file-card-demo-custom-description
    display inline-flex
    align-items center
    gap 8px

.file-card-demo-custom-download
    width 18px
    height 18px
    padding 0

.file-card-demo-slots-mask
    display flex
    justify-content center
    align-items center
    gap 4px
    .k-icon
        font-size 14px
        color #fff
```

---
title: 文件卡片
order: 0
---

基础的普通文件卡片。显式设置 `type="file"` 时会保持文件行卡片外形；如果资源实际是图片、视频或音频，左侧会显示媒体缩略图。

```vdt
import {FileCard} from 'kpc';

<div class="file-card-demo-basic">
    <FileCard
        size="default"
        name="年度预算汇总.xlsx"
        byte={1024 * 1024 * 2.2}
        src="https://example.com/budget.xlsx"
    />

    <FileCard
        type="file"
        name="封面图.png"
        byte={1024 * 320}
        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
    />
</div>
```

```styl
.file-card-demo-basic
    display flex
    flex-direction column
    gap 16px
    align-items flex-start
```

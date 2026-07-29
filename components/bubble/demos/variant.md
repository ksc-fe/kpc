---
title: 样式变体
order: 3
---

通过 `variant` 可以快速切换气泡的内置视觉风格。

```vdt
import {Bubble} from 'kpc';

<div class="bubble-demo-variant">
    <Bubble
        variant="filled"
        content="filled 适合强调主内容，是默认风格。"
    />
    <Bubble
        variant="outlined"
        content="outlined 更适合信息卡片感或偏文档型内容。"
    />
    <Bubble
        variant="plain"
        content="plain 更轻，适合弱化容器感的对话内容。"
    />
</div>
```

```styl
.bubble-demo-variant
    display flex
    flex-direction column
    gap 16px
```

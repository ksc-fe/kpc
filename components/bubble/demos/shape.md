---
title: 气泡形状
order: 4
---

通过 `shape` 可以控制气泡转角风格。

```vdt
import {Bubble} from 'kpc';

<div class="bubble-demo-shape">
    <Bubble
        shape="round"
        variant="outlined"
        content="round 更柔和，适合需要更强亲和感的对话场景。"
    />
    <Bubble
        shape="square"
        variant="outlined"
        content="square 是默认形状，更规整，适合偏工具型界面。"
    />
    <Bubble
        shape="corner"
        variant="outlined"
        content="corner 带一点对话尾巴的感觉，更像聊天气泡。"
    />
</div>
```

```styl
.bubble-demo-shape
    display flex
    flex-direction column
    gap 16px
```

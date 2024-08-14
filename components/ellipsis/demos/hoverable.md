---
title: hoverable
order: 3
---

鼠标离开触发器，弹层就会消失，如果我们需要鼠标能离开触发器并悬浮在弹层上，需要添加`hoverable`属性

```vdt
import {Ellipsis} from 'kpc';

<div>
    <Ellipsis style={{width: '50px'}} hoverable>hoverable</Ellipsis>
</div>
```

```styl
.k-split
    border 1px solid #ccc
    height 200px
    margin-bottom 20px
.panel
    margin 10px
```

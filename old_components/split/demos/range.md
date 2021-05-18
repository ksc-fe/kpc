---
title: 指定最小最大尺寸
order: 1.1
---

我们可以通过`min`和`max`分别指定面板的最小和最大尺寸，默认是针对第一个面板而言，当我们使用`lastSize`
来指定面板的大小，则针对是第二个面板。最小最大值不用带单位，默认为`px`，支持百分比`%`，我们还可以
使用计算属性，例如`100%-10` `50%+10`

```vdt
import Split from 'kpc/components/split';

<Split min="40" max="50%+10" firstSize="80px">
    <b:first><div class="panel">left</div></b:first>
    <b:last><div class="panel">right</div></b:last>
</Split>
```

```styl
.k-split
    border 1px solid #ccc
    height 200px
.panel
    padding 10px
```

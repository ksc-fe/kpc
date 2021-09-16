---
title: 左右分割
order: 0
---

`Split`组件默认会左右分割，我们可以通过`firstSize/lastSize`来指定左右面板的宽度，但不要同时指定，
应该让其中一个面板根据父容器宽度自适应，例如本例中，当你调整浏览器窗口大小时，可以看到左右面板
宽度自适应的不同情况。当不指定宽度时，默认`firstSize=50% lastSize=auto`即对半分开。通过`first` `last`
扩展点分别定义第一个和第二个面板的内容

```vdt
import Split from 'kpc/components/split';

<div>
    <Split>
        <b:first><div class="panel">left</div></b:first>
        <b:last><div class="panel">right</div></b:last>
    </Split>
    <Split firstSize="80px">
        <b:first><div class="panel">left</div></b:first>
        <b:last><div class="panel">right</div></b:last>
    </Split>
    <Split lastSize="80px">
        <b:first><div class="panel">left</div></b:first>
        <b:last><div class="panel">right</div></b:last>
    </Split>
</div>
```

```styl
.k-split
    border 1px solid #ccc
    height 60px
    margin-bottom 20px
.panel
    padding 10px
```

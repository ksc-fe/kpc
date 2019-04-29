---
title: 左右分割
order: 0
---

```vdt
import Split from 'kpc/components/split';

<Split lastSize="80px">
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

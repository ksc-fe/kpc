---
title: 上下分割
order: 1
---

```vdt
import Split from 'kpc/components/split';

<Split mode="vertical" lastSize="80px">
    <b:first><div class="panel">top</div></b:first>
    <b:last><div class="panel">bottom</div></b:last>
</Split>
```

```styl
.k-split
    border 1px solid #ccc
    height 200px
.panel
    padding 10px
```

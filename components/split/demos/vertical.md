---
title: 上下分割
order: 1
---

指定`mode`属性的值为`vertical`即可上下分割，其它属性用法同左右分割

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

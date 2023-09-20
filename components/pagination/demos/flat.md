---
title: 无边框样式
order: 1.1
---

添加`flat`属性，可以展示无边框的样式效果

```vdt
import {Pagination} from 'kpc';

<div>
    <Pagination flat total={200} size="large" showGoto />
    <Pagination flat total={200} showGoto />
    <Pagination flat total={200} size="small" showGoto />
    <Pagination flat total={200} size="mini" showGoto />
</div>
```

```styl
.k-pagination
    margin-bottom 20px
```

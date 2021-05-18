---
title: 尺寸
order: 2
---

通过`size`来指定尺寸：`default` `small` `mini`

```vdt
import Progress from 'kpc/components/progress';

<div>
    <Progress percent="50" />
    <Progress percent="50" size="small" />
    <Progress percent="50" size="mini" />
</div>
```

```styl
.k-progress
    margin 10px 0
```

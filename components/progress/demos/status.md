---
title: 状态
order: 1
---

通过`status`来指定状态：`active` `normal` `error` `success` `warning`

```vdt
import Progress from 'kpc/components/progress';

<div>
    <Progress percent="50" />
    <Progress percent="50" status="normal" />
    <Progress percent="50" status="warning" />
    <Progress percent="50" status="error" />
    <Progress percent="50" status="success" />
</div>
```

```styl
.k-progress
    margin 10px 0
```

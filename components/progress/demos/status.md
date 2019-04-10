---
title:
    zh-CN: 状态
    en-US: Status
order: 1
---

## zh-CN

通过`status`来指定状态：`active` `normal` `error` `success`

## en-US

Specify the status with `status`: `active` `normal` `error` `success`

```vdt
import Progress from 'kpc/components/progress';

<div>
    <Progress percent="50" />
    <Progress percent="50" status="normal" />
    <Progress percent="50" status="error" />
    <Progress percent="50" status="success" />
</div>
```

```styl
.k-progress
    margin 10px 0
```

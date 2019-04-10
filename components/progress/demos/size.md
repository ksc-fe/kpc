---
title:
    zh-CN: 尺寸
    en-US: Size
order: 2
---

## zh-CN

通过`size`来指定尺寸：`default` `small` `mini`

## en-US

Specify the size by `size`: `default` `small` `mini`

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

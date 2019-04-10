---
title:
    zh-CN: 在进度条上展示百分比
    en-US: Show percentage on progress bar
order: 1.1
---

## zh-CN

添加`inInnerText`属性，可以在进度条上展示百分比

## en-US

Add the `inInnerText` attribute to display the percentage on the progress bar

```vdt
import Progress from 'kpc/components/progress';

<div>
    <Progress percent="0" isInnerText={{ true }} isOuterText={{ false }} />
    <Progress percent="50" isInnerText={{ true }} isOuterText={{ false }} />
    <Progress percent="60" status="error" isInnerText={{ true }} isOuterText={{ false }} />
    <Progress percent="70" status="success" isInnerText={{ true }} isOuterText={{ false }} />
</div>
```

```styl
.k-progress
    margin 10px 0
```

---
title: 在进度条上展示百分比
order: 1.1
---

添加`inInnerText`属性，可以在进度条上展示百分比

```vdt
import {Progress} from 'kpc/components/progress';

<div>
    <Progress percent="0" showInnerText={true} showOuterText={false} />
    <Progress percent="50" showInnerText={true} showOuterText={false} />
    <Progress percent="60" status="error" showInnerText={true} showOuterText={false} />
    <Progress percent="70" status="success" showInnerText={true} showOuterText={false} />
</div>
```

```styl
.k-progress
    margin 10px 0
```

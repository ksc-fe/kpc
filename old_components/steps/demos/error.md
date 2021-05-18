---
title: 错误状态
order: 1
---

指定`Steps`的`status`属性为`error`，即可将步骤条置为错误状态

```vdt
import {Steps, Step} from 'kpc/components/steps';

<Steps value="1" status="error">
    <Step title="选择配置">请选择主机的配置信息</Step>
    <Step title="选择弹性IP">请选择主机弹性IP的配置信息</Step>
    <Step title="设置VPC" />
</Steps>
```

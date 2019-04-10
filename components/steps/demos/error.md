---
title: 
    zh-CN: 错误状态
    en-US: Error status
order: 1
---
## zh-CN

指定`Steps`的`status`属性为`error`，即可将步骤条置为错误状态

## en-US

Specify the `status` attribute of `Steps` as `error` to set the step bar to the error status

```vdt
import {Steps, Step} from 'kpc/components/steps';

<Steps value="1" status="error">
    <Step title="Select configuration">Please select the configuration information of the host</Step>
    <Step title="Select Elastic IP">Please select the configuration information of the host elastic IP</Step>
    <Step title="Set up VPC" />
</Steps>
```

---
title: 
    zh-CN: 时间轴样式
    en-US: Timeline style
order: 2
---
## zh-CN

设置`type`属性值为`line`，可以展示时间轴样式的步骤条

## en-US

Set the `type` attribute value to `line` to display the step bar of the timeline style

```vdt
import {Steps, Step} from 'kpc/components/steps';
import Button from 'kpc/components/button';

<div>
    <Steps v-model="index" type="line">
        <Step title="Select configuration">Please select the configuration information of the host</Step>
        <Step title="Select Elastic IP">Please select the configuration information of the host elastic IP</Step>
        <Step title="Set up VPC" />
    </Steps>

    <Button type="primary" ev-click={{ self.previous }}
        disabled={{ self.get('index') === 0 }}
    >Previous Step</Button>
    <Button type="primary" ev-click={{ self.next }}
        disabled={{ self.get('index') === 2 }}
    >Next Step</Button>

    <Steps value="1" status="error" type="line">
        <Step title="Select configuration">Please select the configuration information of the host</Step>
        <Step title="Select Elastic IP">Please select the configuration information of the host elastic IP</Step>
        <Step title="Set up VPC" />
    </Steps>
</div>
```

```styl
.k-btn
    margin 20px 20px 20px 0
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            index: 0
        }
    }

    previous() {
        this.set('index', this.get('index') - 1);
    }

    next() {
        this.set('index', this.get('index') + 1);
    }
}
```

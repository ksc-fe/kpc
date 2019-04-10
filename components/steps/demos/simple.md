---
title: 
    zh-CN: 简洁样式
    en-US: Simple style
order: 3
---
## zh-CN

设置`type`属性值为`simple`，可以展示简洁样式的步骤条

##en-US

Set the `type` attribute value to `simple` to display a simple style step bar

```vdt
import {Steps, Step} from 'kpc/components/steps';
import Button from 'kpc/components/button';

<div>
    <Steps v-model="index" type="simple">
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

    <Steps value="1" status="error" type="simple">
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

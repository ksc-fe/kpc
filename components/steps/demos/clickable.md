---
title: 
    zh-CN: 快速点击切换 
    en-US: Quick click switch
order: 0.1
---
##zh-CN

添加`clickable`属性，即可实现点击【已完成】的步骤快速切换到相应步骤的功能

##en-US

Add the `clickable` attribute to enable you to quickly switch to the corresponding step by clicking the [Completed] step.

```vdt
import {Steps, Step} from 'kpc/components/steps';
import Button from 'kpc/components/button';

<div>
    <Steps v-model="index" clickable>
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
</div>
```

```styl
.k-btn
    margin 20px 20px 0 0
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            index: 1
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

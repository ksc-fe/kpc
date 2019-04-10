---
title: 
    zh-CN: 基础用法
    en-US: Basic usage
order: 0
---
## zh-CN

`Steps`嵌套`Step`即可实现步骤条，用`v-model`双向绑定当前指向哪一步，索引从`0`开始

## en-US

`Steps` nesting `Step` can implement the step bar, use `v-model` two-way binding which step is currently pointing, the index starts from `0`

```vdt
import {Steps, Step} from 'kpc/components/steps';
import Button from 'kpc/components/button';

<div>
    <Steps v-model="index">
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

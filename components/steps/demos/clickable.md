---
title: 快速点击切换 
order: 0.1
---

添加`clickable`属性，即可实现点击【已完成】的步骤快速切换到相应步骤的功能

```vdt
import {Steps, Step, Button} from 'kpc';

<div>
    <Steps v-model="index" clickable>
        <Step title="选择配置">请选择主机的配置信息</Step>
        <Step title="选择弹性IP">请选择主机弹性IP的配置信息</Step>
        <Step title="设置VPC" />
    </Steps>
    <br />
    <Steps v-model="index" type="optimize" clickable>
        <Step title="选择配置">请选择主机的配置信息</Step>
        <Step title="选择弹性IP">请选择主机弹性IP的配置信息</Step>
        <Step title="设置VPC" />
    </Steps>
    <Button type="primary" ev-click={this.previous}
        disabled={this.get('index') === 0}
    >Previous Step</Button>
    <Button type="primary" ev-click={this.next}
        disabled={this.get('index') === 2}
    >Next Step</Button>
</div>
```

```styl
.k-btn
    margin 20px 20px 0 0
```

```ts
import {bind} from 'kpc';

interface Props {
    index?: number
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            index: 1
        };
    }

    @bind
    previous() {
        this.set('index', this.get('index')! - 1);
    }

    @bind
    next() {
        this.set('index', this.get('index')! + 1);
    }
}
```

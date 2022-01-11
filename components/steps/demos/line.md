---
title: 时间轴样式
order: 2
---

设置`type`属性值为`line`，可以展示时间轴样式的步骤条

```vdt
import {Steps, Step} from 'kpc';
import {Button} from 'kpc';

<div>
    <Steps v-model="index" type="line">
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

    <Steps value={1} status="error" type="line">
        <Step title="选择配置">请选择主机的配置信息</Step>
        <Step title="选择弹性IP">请选择主机弹性IP的配置信息</Step>
        <Step title="设置VPC" />
    </Steps>
</div>
```

```styl
.k-btn
    margin 20px 20px 20px 0
```

```ts
import {bind} from 'kpc';

interface Props {
    index: number
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            index: 0
        };
    }

    @bind
    previous() {
        this.set('index', this.get('index') - 1);
    }

    @bind
    next() {
        this.set('index', this.get('index') + 1);
    }
}
```

---
title: 垂直排列 
order: 4
---

添加`vertical`属性，即可垂直排列

> `line` `line-compact`垂直排列模式下，展示相同

```vdt
import {Steps, Step, Button} from 'kpc';

<div class="demo-wrapper">
    <Steps v-model="index" vertical>
        <Step title="选择配置">请选择主机的配置信息</Step>
        <Step title="选择弹性IP">请选择主机弹性IP的配置信息</Step>
        <Step title="设置VPC" />
    </Steps>

    <Steps v-model="index" vertical type="line">
        <Step title="选择配置">请选择主机的配置信息</Step>
        <Step title="选择弹性IP">请选择主机弹性IP的配置信息</Step>
        <Step title="设置VPC" />
    </Steps>

    <Steps v-model="index" vertical type="line-compact">
        <Step title="选择配置">请选择主机的配置信息</Step>
        <Step title="选择弹性IP">请选择主机弹性IP的配置信息</Step>
        <Step title="设置VPC" />
    </Steps>

    <Steps v-model="index" vertical type="simple">
        <Step title="选择配置">请选择主机的配置信息</Step>
        <Step title="选择弹性IP">请选择主机弹性IP的配置信息</Step>
        <Step title="设置VPC" />
    </Steps>

    <Button type="primary" ev-click={this.previous}
        disabled={this.get('index') === 0}
    >Previous Step</Button>
    <Button type="primary" ev-click={this.next}
        disabled={this.get('index') === 3}
    >Next Step</Button>
</div>
```

```styl
.demo-wrapper
    display flex
    gap 24px
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
            index: 0
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

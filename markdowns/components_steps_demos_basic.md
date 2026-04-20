---
title: 基础用法
order: 0
---

`Steps`嵌套`Step`即可实现步骤条，用`v-model`双向绑定当前指向哪一步，索引从`0`开始

```vdt
import {Steps, Step, Button} from 'kpc';

<div>
    <Steps v-model="index">
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

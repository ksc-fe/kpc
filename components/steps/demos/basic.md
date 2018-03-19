---
title: 基础用法
order: 0
---

`Steps`嵌套`Step`即可实现步骤条，用`v-model`双向绑定当前指向哪一步，索引从`0`开始

```vdt
import {Steps, Step} from 'kpc/components/steps';
import Button from 'kpc/components/button';

<div>
    <Steps v-model="index">
        <Step title="选择配置">请选择主机的配置信息</Step>
        <Step title="选择弹性IP">请选择主机弹性IP的配置信息</Step>
        <Step title="设置VPC" />
    </Steps>
    <Button type="primary" ev-click={{ self.next }}
        disabled={{ self.get('index') === 2 }}
    >Next Step</Button>
</div>
```

```styl
.k-btn
    margin-top 20px
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

    next() {
        this.set('index', this.get('index') + 1);
    }
}
```

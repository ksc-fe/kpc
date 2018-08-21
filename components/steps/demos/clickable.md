---
title: 点击切换 
order: 0.1
---

添加`clickable`属性，即可实现点击【已完成】的步骤快速切换到相应步骤的功能

```vdt
import {Steps, Step} from 'kpc/components/steps';
import Button from 'kpc/components/button';

<div>
    <Steps v-model="index" clickable>
        <Step title="选择配置">请选择主机的配置信息</Step>
        <Step title="选择弹性IP">请选择主机弹性IP的配置信息</Step>
        <Step title="设置VPC" />
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

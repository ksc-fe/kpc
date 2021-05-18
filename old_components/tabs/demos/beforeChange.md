---
title: 定义卡片切换前的拦截函数
order: 7
---

给`Tabs`添加`beforeChange`函数，来定义卡片切换之前的逻辑，如果该函数返回`true`则成功切换，否则忽略本次切换

> 支持异步函数

```vdt
import {Tabs, Tab} from 'kpc/components/tabs';

<div>
    <Tabs v-model="tab" beforeChange={{ self.beforeChange }}>
        <Tab value="rulein">入站规则</Tab>
        <Tab value="ruleout">出站规则</Tab>
        <Tab value="relatedVM">关联云主机</Tab>
    </Tabs>

    <div class="content">
        <div v-if={{ self.get('tab') === 'rulein' }}>入站规则</div>
        <div v-else-if={{ self.get('tab') === 'ruleout' }}>出站规则</div>
        <div v-else>关联云主机</div> 
    </div>
</div>
```

```styl
.content
    margin 20px
```

```js
import Dialog from 'kpc/components/dialog';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            tab: 'ruleout',
        }
    }

    beforeChange(value) {
        return new Promise(resolve => {
            Dialog.confirm({
                content: `Are you sure to change to "${value}"`
            }).then(() => {
                resolve(true);
            }, () => {
                resolve(false);
            });
        });
    }
}
```

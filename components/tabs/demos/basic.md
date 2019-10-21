---
title: 基本用法
order: 0
---

`Tab`的基本用法。`Tabs`嵌套`Tab`使用，使用`v-model`进行双向数据绑定。

```vdt
import {Tabs, Tab} from 'kpc/components/tabs';

<div>
    <Tabs v-model="tab">
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
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            tab: 'ruleout',
        }
    }
}
```

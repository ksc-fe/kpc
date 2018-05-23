---
title: 基本用法
order: 0
---

`Tab`的基本用法。Tabs嵌套Tab使用，使用`v-model`进行双向数据绑定。


```vdt
import {Tabs, Tab} from 'components/tabs';

<div>

    <Tabs v-model="tab1" style="margin: 20px;">
        <Tab value="rulein">入站规则</Tab>
        <Tab value="ruleout">出站规则</Tab>
        <Tab value="relatedVM">关联云主机</Tab>
    </Tabs>
    <div style="margin: 20px;" v-if={{ self.get('tab1') == 'rulein' }}>入站规则</div>
    <div style="margin: 20px;" v-else-if={{ self.get('tab1') == 'ruleout' }}>出站规则</div>
    <div style="margin: 20px;" v-else>关联云主机</div> 
</div>

```
```js

export default class extends Intact {
    @Intact.template()
    static template = template;
    defaults(){
        return {
            tab1:'ruleout',
        }
    }
}
```
```styl
.k-checkbox
    margin-right 20px
```


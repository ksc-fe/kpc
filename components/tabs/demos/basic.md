---
title: data传值形式
order: 1
---

`Tabs`的基本用法，传入`data`。需要使用`v-model`来指定选中标签。


```vdt
import {Tabs, Tab} from 'components/tabs';

<div>
    <Tabs data={{ [
        {
            text: '入站规则',
            value: 'rulein',
        },
        {
            text: '出站规则',
            value: 'ruleout',
        },
        {
            text: '关联云主机',
            value: 'relatedVM',
        }
    ] }} value="relatedVM" v-model="tab2"  style="margin: 20px;"/>

    <div style="margin: 20px;" v-if={{ self.get('tab2') == 'rulein' }}>入站规则</div>
    <div style="margin: 20px;" v-else-if={{ self.get('tab2') == 'ruleout' }}>出站规则</div>
    <div style="margin: 20px;" v-else>关联云主机</div> 
</div>

```
```js

export default class extends Intact {
    @Intact.template()
    static template = template;
    defaults(){
        return {
            tab2:'ruleout',
        }
    }
}
```
```styl
.k-checkbox
    margin-right 20px
```


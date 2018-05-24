---
title: 垂直展示
order: 2
---

`Tabs`添加vertical属性。


```vdt
import {Tabs, Tab} from 'components/tabs';

<div>
    <Tabs v-model="tab3" style="margin: 20px;width:150px" vertical>
        <Tab value="rulein">入站规则</Tab>
        <Tab value="ruleout">出站规则</Tab>
        <Tab value="relatedVM">关联云主机</Tab>
    </Tabs>
</div>

```
```js

export default class extends Intact {
    @Intact.template()
    static template = template;
    defaults(){
        return {
            tab3:''
        }
    }
}
```
```styl
.k-checkbox
    margin-right 20px
```


---
title: 垂直展示
order: 2
---

`Tabs`添加`vertical`属性。

```vdt
import {Tabs, Tab} from 'kpc/components/tabs';

<div>
    <Tabs v-model="tab" vertical>
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

    defaults() {
        return {
            tab: 'rulein'
        }
    }
}
```

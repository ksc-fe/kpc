---
title: 垂直展示
order: 6
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
    <Tabs v-model="tab" vertical type="card">
        <Tab value="rulein">入站规则</Tab>
        <Tab value="ruleout">出站规则</Tab>
        <Tab value="relatedVM">关联云主机</Tab>
    </Tabs>
    <Tabs v-model="tab" vertical type="border-card">
        <Tab value="rulein">入站规则</Tab>
        <Tab value="ruleout">出站规则</Tab>
        <Tab value="relatedVM">关联云主机</Tab>
    </Tabs>
    <Tabs v-model="tab" vertical type="no-border-card">
        <Tab value="rulein">入站规则</Tab>
        <Tab value="ruleout">出站规则</Tab>
        <Tab value="relatedVM">关联云主机</Tab>
    </Tabs>
</div>
```

```styl
.k-tabs
    margin-right 16px
.k-no-border-card
    padding 10px
    background #f1f1f5
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

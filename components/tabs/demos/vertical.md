---
title: 
    zh-CN: 垂直展示
    en-US: Vertical display
order: 6
---

## zh-CN 

`Tabs`添加`vertical`属性。

## en-US

You can add `vertical` property for `Tabs`.

```vdt
import {Tabs, Tab} from 'kpc/components/tabs';

<div>
    <Tabs v-model="tab" vertical>
        <Tab value="rulein">Inbound rule</Tab>
        <Tab value="ruleout">Outbound rule</Tab>
        <Tab value="relatedVM">Associated cloud host</Tab>
    </Tabs>
    <Tabs v-model="tab" vertical type="card">
        <Tab value="rulein">Inbound rule</Tab>
        <Tab value="ruleout">Outbound rule</Tab>
        <Tab value="relatedVM">Associated cloud host</Tab>
    </Tabs>
    <Tabs v-model="tab" vertical type="border-card">
        <Tab value="rulein">Inbound rule</Tab>
        <Tab value="ruleout">Outbound rule</Tab>
        <Tab value="relatedVM">Associated cloud host</Tab>
    </Tabs>
    <Tabs v-model="tab" vertical type="no-border-card">
        <Tab value="rulein">Inbound rule</Tab>
        <Tab value="ruleout">Outbound rule</Tab>
        <Tab value="relatedVM">Associated cloud host</Tab>
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

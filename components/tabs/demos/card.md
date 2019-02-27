---
title: 
    zh-CN: 卡片样式
    en-US: Card style
order: 5
---

## zh-CN

改变`type`属性，可以呈现不同的样式，可选取值为：`default` `card` `border-card` `no-border-card`。
其中`no-border-card`适用于具有背景色的场景

## en-US

You can render the different style by changing the `type` property. the values you can choose:  `default` `card` `border-card` `no-border-card`, which the `no-border-card` property applies to the scenes with the background color.

```vdt
import {Tabs, Tab} from 'kpc/components/tabs';

<div>
    <Tabs type="card" v-model="tab">
        <Tab value="rulein">Inbound rule</Tab>
        <Tab value="ruleout">Outbound rule</Tab>
        <Tab value="relatedVM">Associated cloud host</Tab>
    </Tabs>
    <Tabs type="border-card" v-model="tab">
        <Tab value="rulein">Inbound rule</Tab>
        <Tab value="ruleout">Outbound rule</Tab>
        <Tab value="relatedVM">Associated cloud host</Tab>
    </Tabs>
    <Tabs type="no-border-card" v-model="tab">
        <Tab value="rulein">Inbound rule</Tab>
        <Tab value="ruleout">Outbound rule</Tab>
        <Tab value="relatedVM">Associated cloud host</Tab>
    </Tabs>
</div>
```

```styl
.k-tabs
    margin-bottom 16px
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
        };
    }
}
```

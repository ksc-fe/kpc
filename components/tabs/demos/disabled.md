---
title: 
    zh-CN: 禁用某一项
    en-US: Disable one item
order: 2
---

## zh-CN

给`Tab`添加`disabled`属性，可以禁用该项选择

## en-US

You can disable the item option through adding the `disabled` proerty to `Tab`.

```vdt
import {Tabs, Tab} from 'kpc/components/tabs';

<div>
    <Tabs v-model="tab">
        <Tab value="rulein">Inbound rule</Tab>
        <Tab value="ruleout" disabled>Outbound rule</Tab>
        <Tab value="relatedVM">Associated cloud host</Tab>
    </Tabs>

    <div class="content">
        <div v-if={{ self.get('tab') == 'rulein' }}>inbound rule</div>
        <div v-else-if={{ self.get('tab') == 'ruleout' }}>outbound rule</div>
        <div v-else>associated cloud host</div> 
    </div>
</div>
```

```styl
.content
    margin 20px
```

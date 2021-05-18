---
title: 禁用某一项
order: 2
---

给`Tab`添加`disabled`属性，可以禁用该项选择

```vdt
import {Tabs, Tab} from 'kpc/components/tabs';

<div>
    <Tabs v-model="tab">
        <Tab value="rulein">入站规则</Tab>
        <Tab value="ruleout" disabled>出站规则</Tab>
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

---
title: 基本用法
order: 0
---

`Tab`的基本用法。`Tabs`嵌套`Tab`使用，使用`v-model`进行双向数据绑定。

```vdt
import {Tabs, Tab} from 'kpc';

<div>
    <Tabs v-model="tab">
        <Tab value="rulein">入站规则</Tab>
        <Tab value="ruleout">出站规则</Tab>
        <Tab value="relatedVM">关联云主机</Tab>
    </Tabs>
    <br />
    <Tabs type="flat-card" v-model="tab">
        <Tab value="rulein">入站规则</Tab>
        <Tab value="ruleout">出站规则</Tab>
        <Tab value="relatedVM">关联云主机</Tab>
    </Tabs>
    <div class="content">
        <div v-if={this.get('tab') === 'rulein'}>入站规则</div>
        <div v-else-if={this.get('tab') === 'ruleout'}>出站规则</div>
        <div v-else>关联云主机</div> 
    </div>
</div>
```

```styl
.content
    margin 20px
```

```ts
export default class extends Component {
    static template = template;

    static defaults() {
        return {
            tab: 'ruleout',
        }
    }
}
```

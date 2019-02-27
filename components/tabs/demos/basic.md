---
title: 
    zh-CN: 基础用法
    en-US: Basic usage
order: 0
---

## zh-CN

`Tab`的基本用法。`Tabs`嵌套`Tab`使用，使用`v-model`进行双向数据绑定。

## en-US

The basic usage of `Tab`. `Tabs` nested `Tab` and used `v-model` for two-way data binding.

```vdt
import {Tabs, Tab} from 'kpc/components/tabs';

<div>
    <Tabs v-model="tab">
        <Tab value="rulein">Inbound rule</Tab>
        <Tab value="ruleout">Outbound rule</Tab>
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

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            tab: 'ruleout',
        }
    }
}
```

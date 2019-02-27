---
title: 
    zh-CN: data传值形式
    en-US: Data value form
order: 1
---

## zh-CN

还可以使用`data`，定义`Tab`内容

## en-US

You can use the `data` property to define the content of the `Tab`.

```vdt
import {Tabs, Tab} from 'components/tabs';

<div>
    <Tabs 
        data={{ [
            {
                text: 'Inbound rule',
                value: 'rulein',
            },
            {
                text: 'Outbound rule',
                value: 'ruleout',
            },
            {
                text: 'Associated cloud host',
                value: 'relatedVM',
            }
        ] }} 
        v-model="tab"  
    />

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

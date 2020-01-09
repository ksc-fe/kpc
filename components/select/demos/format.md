---
title: 自定义展示结果
order: 5.1 
---

通过`value`扩展点，我们可以自定义选择结果的展示

> 此时你不能指定`filterable`来筛选

```vdt
import {Select, Option} from 'kpc/components/select';
import {Icon} from 'kpc/components/icon';

<div>
    <div>
        <span class="label">border:</span>
        <Select v-model="type">
            <Option v-for={{ ['solid', 'dashed', 'dotted'] }}
                value={{ value }}
            >
                <div style={{ {borderBottom: `1px ${value} #666`} }} class="line"></div>
            </Option>
            <b:value params="value, label">
                <div style={{ {borderBottom: `1px ${value} #666`} }} class="line"></div>
            </b:value>
        </Select>
        <div style={{ {border: `1px ${self.get('type')} #b2b2b2`} }} class="rect">
            Rectangle
        </div>
    </div>
    <div>
        <span class="label">multiple:</span>
        <Select v-model="icons" multiple>
            <Option v-for={{ ['ion-chatbubble', 'ion-person-stalker', 'ion-beer', 'ion-camera'] }}
                value={{ value }}
            >
                <Icon class={{ value }} />
            </Option>
            <b:value params="value, label">
                <Icon class={{ value }} />
                <span class="c-middle">{{ value }}</span>
            </b:value>
        </Select>
    </div>
</div>
```

```styl
/.line
    margin-top 16px
.rect
    display inline-block
    margin 16px
    vertical-align middle
    width 120px
    height 60px
    line-height 60px
    text-align center
.c-middle
    margin-left 6px
.label
    display inline-block
    width 60px
    text-align right
    margin-right 6px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {type: 'dashed', icons: ['ion-camera']};
    }
}
```

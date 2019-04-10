---
title: 
    zh-CN: 范围选择
    en-US: Range selection
order: 3
---
## zh-CN

指定`isRange`使组件支持范围选择，此时`v-model`绑定的数据为数组，并且不会展示`input`输入框。

## en-US

Specify `isRange` to enable the component to support range selection. At this time, the data bound by `v-model` is an array, and the `input` input box will not be displayed

```vdt
import Slider from 'kpc/components/slider';

<Slider isRange v-model="values" />
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            values: [50, 76],
        }
    }
}
```

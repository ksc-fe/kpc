---
title: 
    zh-CN: 自定义显示内容
    en-US: Custom display content
order: 5
---
## zh-CN

`Option`的子元素可以是任意dom结构，而非仅仅只是字符串。此时如果需要支持`filterable`，我们应该
指定`label`，以便组件知道筛选的内容，当然你也可以通过`filter`指定过滤函数。

## en-US

The child elements of `Option` can be any dom structure, not just strings. At this point, if you need to support `filterable`, we should
Specify `label` so that the component knows what to filter, but you can also specify the filter function via `filter`.

```vdt
import {Select, Option} from 'kpc/components/select';

<Select v-model="day" filterable>
    <Option v-for={{ self.get('data') }} value={{ value.value }} label={{ value.label }}>
        <div>
            <span>{{ value.label }}</span>
            <span style="float: right; color: #ccc">{{ value.value }}</span>
        </div>
    </Option>
</Select>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [
                {label: 'Monday', value: 'Monday'},
                {label: 'Tuesday', value: 'Tuesday'},
                {label: 'Wednesday', value: 'Wednesday'},
                {label: 'Thursday', value: 'Thursday'},
                {label: 'Friday', value: 'Friday'},
                {label: 'Saturday', value: 'Saturday'},
                {label: 'Sunday', value: 'Sunday'},
            ]
        }
    }
}
```

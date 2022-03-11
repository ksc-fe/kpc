---
title: 指定选中和非选中的取值
order: 1
---

`Checkbox`默认选中的值为`true`，非选中的值为`false`，通过`trueValue`和`falseValue`属性，
我们可以指定选中和非选中的值。

> 当指定值为对象时，不要在模板中直接定义对象字面量（如：trueValue={{a: 1}}），
> 因为在模板中创建的对象每次执行模板都会生成一份新数据，使全等判断(`===`)失效。
> 此时应该在组件中定义该对象，然后模板中引用它。

```vdt
import {Checkbox} from 'kpc';

<div>
    <Checkbox v-model="value1">默认值: {JSON.stringify(this.get('value1'))}</Checkbox>
    <Checkbox v-model="value2" trueValue="checked">
        指定选中时取值为"checked": {JSON.stringify(this.get('value2'))}
    </Checkbox>
    <Checkbox v-model="value3" trueValue={this.get("checkedValue")} falseValue={0}>
        指定选中时取值为对象：{JSON.stringify(this.get('value3'))}
    </Checkbox>
</div>
```

```styl
.k-checkbox
    margin-right 20px
```

```ts
interface Props {
    value1?: boolean
    value2?: boolean | string 
    value3?: number | object
    checkedValue: object
}
export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            value1: false,
            value2: false,
            value3: 0,
            checkedValue: {
                checked: true
            }
        } as Props;
    };
}
```

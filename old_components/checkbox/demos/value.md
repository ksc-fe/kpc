---
title: 指定选中和非选中的取值
order: 1
---

`Checkbox`默认选中的值为`true`，非选中的值为`false`，通过`trueValue`和`falseValue`属性，
我们可以指定选中和非选中的值。

> 当指定值为对象时，不要在模板中直接定义对象字面量（如：trueValue={{ {a: 1} }}），
> 因为在模板中创建的对象每次执行模板都会生成一份新数据，使全等判断(`===`)失效。
> 此时应该在js中定义该对象，然后模板中引用它。

```vdt
import Checkbox from 'kpc/components/checkbox';

<div>
    <Checkbox v-model="value1">默认值: {{ JSON.stringify(self.get('value1')) }}</Checkbox>
    <Checkbox v-model="value2" trueValue="checked">
        指定选中时取值为"checked": {{ JSON.stringify(self.get('value2')) }}
    </Checkbox>
    <Checkbox v-model="value3" trueValue={{ 0 }} falseValue={{ self.get("uncheckedValue") }}>
        指定非选中时取值为对象：{{ JSON.stringify(self.get('value3')) }}
    </Checkbox>
</div>
```

```styl
.k-checkbox
    margin-right 20px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            uncheckedValue: {
                unchecked: true
            }
        };
    }
}
```

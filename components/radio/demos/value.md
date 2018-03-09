---
title: 指定选中的值
order: 2
---

`Radio`默认选中的值为`true`，通过`trueValue`属性我们可以指定任意值。

> 和`Checkbox`一样，判定选中状态时，当值为对象比较的是引用地址

```vdt
import Radio from 'kpc/components/radio';

<div>
    <Radio v-model="value1">默认值：{{ JSON.stringify(self.get('value1')) }}</Radio>
    <Radio v-model="value2" trueValue="checked">
        指定选中时的取值为"checked": {{ JSON.stringify(self.get('value2')) }}
    </Radio>
    <Radio v-model="value3" trueValue={{ self.get('checkedValue') }}>
        指定选中时的取值为对象：{{ JSON.stringify(self.get('value3')) }}
    </Radio>
</div>
```

```styl
.k-radio
    margin-right 20px
```

```js
export default class extends Intact {
    @Intact.template
    static template = template;

    defaults() {
        return {
            checkedValue: {
                test: 1
            }
        };
    }
}
```

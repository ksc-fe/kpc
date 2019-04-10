---
title:
    zh-CN: 指定选中的值
    en-US: Specify the selected value
order: 2
---

## zh-CN

`Radio`默认选中的值为`true`，通过`trueValue`属性我们可以指定任意值。

> 和`Checkbox`一样，判定选中状态时，当值为对象比较的是引用地址

## en-US

The default value of `Radio` is `true`. We can specify any value through the `trueValue` property.

> Like `Checkbox`, when the selected state is judged, the value is the reference address when the object is compared.

```vdt
import Radio from 'kpc/components/radio';

<div>
    <Radio v-model="value1">Defaults:{{ JSON.stringify(self.get('value1')) }}</Radio>
    <Radio v-model="value2" trueValue="checked">
        Specify the value to be checked as "checked": {{ JSON.stringify(self.get('value2')) }}
    </Radio>
    <Radio v-model="value3" trueValue={{ self.get('checkedValue') }}>
        Specify the value to be selected as the object:{{ JSON.stringify(self.get('value3')) }}
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

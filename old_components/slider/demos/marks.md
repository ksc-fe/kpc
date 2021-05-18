---
title: 展示标签
order: 5
---

通过`marks`属性，可以给`Slider`标注刻度，该属性类型为`Object`，`key`表示组件的值，`value`为该
值对应展示的标注文案。如果`value`为`String`类型，则直接展示成文案；如果`value`为`Array`，则数组
第一项为未选中状态的文案，第二项为选中状态的文案，如果没有定义第二项，则会取第一项作为选中状态的文案，
此时与`value`为`String`类型的表现是一样的。

```vdt
import Slider from 'kpc/components/slider';

<div>
    <Slider min={{ 1 }} max={{ 12 }} value={{ 6 }} 
        isShowInput={{ false }}
        marks={{ self.get('marks') }}
    />
    <Slider min={{ 1 }} max={{ 12 }} value={{ [2, 6] }} 
        isShowInput={{ false }}
        isRange
        marks={{ self.get('marks') }}
    />
</div>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            marks: {
                1: ['1', '1月'],
                2: ['2', '2月'],
                3: ['3', '3月'],
                4: ['4', '4月'],
                5: ['5', '5月'],
                6: ['6', '6月'],
                7: ['7', '7月'],
                8: ['8', '8月'],
                9: ['9', '9月'],
                10: ['1年'],
                11: '2年',
                12: '3年',
            }
        }
    }
}
```

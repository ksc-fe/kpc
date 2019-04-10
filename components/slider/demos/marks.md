---
title: 
    zh-CN: 展示标签
    en-US: Display label
order: 5
---
## zh-CN

通过`marks`属性，可以给`Slider`标注刻度，该属性类型为`Object`，`key`表示组件的值，`value`为该值对应展示的标注文案。

## en-US

The `Slider` can be marked with a scale by the `marks` attribute. The attribute type is `Object`, `key` indicates the value of the component, and `value` is the label copy corresponding to the value

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
                1: '1',
                2: '2',
                3: '3',
                4: '4',
                5: '5',
                6: '6month',
                7: '7',
                8: '8',
                9: '9',
                10: '1year',
                11: '2year',
                12: '3year',
            }
        }
    }
}
```

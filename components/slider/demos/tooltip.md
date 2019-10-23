---
title: 展示提示气泡
order: 6
---

给组件添加`showTooltip`可以在滑块上展示气泡提示，默认展示当前值，我们也可以通过`tooltip`扩展点自定义展示内容；
当添加`always`属性时，将一直展示提示气泡

> `tooltip`扩展点和`Tooltip`组件的`content`扩展点行为一样，如果你传入空的内容，则不会展示气泡

```vdt
import Slider from 'kpc/components/slider';

<div>
    <Slider v-model="value1" min={{ 50 }} max={{ 500 }} showTooltip />
    <Slider v-model="values" isRange showTooltip />
    <Slider v-model="value2" min={{ 1 }} max={{ 12 }}
        isShowInput={{ false }}
        marks={{ self.get('marks') }}
        showTooltip
        always
    >
        <b:tooltip params="value">
            <span v-if={{ value > 9 }}>满{{ value - 9 }}年，优惠{{ (value - 9) * 2 }}个月</span>
        </b:tooltip>
    </Slider>
</div>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            value1: 277,
            values: [50, 76],
            value2: 6,
            marks: {
                1: '1',
                2: '2',
                3: '3',
                4: '4',
                5: '5',
                6: '6月',
                7: '7',
                8: '8',
                9: '9',
                10: '1年',
                11: '2年',
                12: '3年',
            }
        }
    }
}
```


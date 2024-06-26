---
title: 设置步长
order: 1
---

通过`step`可以设置步长，默认步长为`1`，当该属性值为`0`时，不限制步长，设置步长后，组件的`value`值除了边界值之外，
满足如下条件：`min + step * n`(`n`为整数)的等差数列。如果不想被限制，则可以指定`forceStep`为`false`。

> 如果`step`设为`0`，`Spinner`默认会设置`step = 0.01`来指定加减按钮的步长

```vdt
import {Slider} from 'kpc';

<div>
    <Slider v-model="value1" step={5} showEnd={false} ref="__test" />
    <Slider v-model="value2" min={50} max={500} step={0.1} />
    <Slider value={0.234234} max={1} step={0} />
</div>
```

```styl
.k-slider
    margin-bottom 20px
```

```ts
interface Props {
    value1?: number
    value2?: number
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            value1: 0,
            value2: 50,
        };
    }
}
```

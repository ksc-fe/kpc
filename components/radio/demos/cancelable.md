---
title: 可取消选中
order: 3
---

给`Radio`添加`cancelable`属性，再次点击已选中的Radio可以取消选中状态。
通过`falseValue`指定取消选中后的值，默认为`undefined`。

```vdt
import {Radio} from 'kpc';

<div>
    <Radio v-model="value" cancelable trueValue="A" falseValue={null}>可取消 A</Radio>
    <Radio v-model="value" cancelable trueValue="B" falseValue={null}>可取消 B</Radio>
    Your selected: {this.get('value') === null ? '无' : this.get('value')}
</div>
```

```styl
.k-radio
    margin-right 24px
```

```ts
export default class extends Component<{
    value: string | null
}> {
    static template = template;

    static defaults() {
        return {
            value: null
        };
    };
}
```

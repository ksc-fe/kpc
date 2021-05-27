---
title: 输入过程中禁止更新
order: 7
---

默认情况下`value`变化，就会更新视图的`value`值，但这会打断用户的输入，当添加`frozenOnInput`属性时，组件的`value`
在输入的过程中被冻结，输入完成后，组件才会更新最新的`value`到视图。

本例中，上面的`Input`你接着输入`d`，`value`会立即更新成`#dddddd`，但是下面的`Input`不会

```vdt
import {Input} from 'kpc/components/input';

<div>
    <Input value={this.get('value')} ev-input={this.onInput} />
    <br />
    <Input frozenOnInput value={this.get('value')} ev-input={this.onInput} />
</div>
```

```styl
.k-input
    margin 5px
```

```ts
import tinycolor from 'tinycolor2';

export default class extends Component {
    static template = template;

    static defaults = {
        value: '#ddd'
    }

    onInput(e: InputEvent) {
        const value = e.target.value.trim();
        const color = tinycolor(value);
        if (color.isValid()) {
            const newValue = color.toHexString();
            this.set('value', newValue);
        }
    }
}
```

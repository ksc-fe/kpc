---
title: 输入过程中禁止更新
order: 7
---

默认情况下`value`变化，就会更新视图的`value`值，但这会打断用户的输入，当添加`frozenOnInput`属性时，组件的`value`
在输入的过程中被冻结，输入完成后，组件才会更新最新的`value`到视图

```vdt
import {Input} from 'kpc/components/input';

<div>
    <Input value={{ self.get('value') }} ev-input={{ self._onInput }} />
    <br />
    <Input frozenOnInput value={{ self.get('value') }} ev-input={{ self._onInput }} />
</div>
```

```styl
.k-input
    margin 5px
```

```js
import tinycolor from 'tinycolor2';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            value: '#ddd'
        };
    }

    _onInput(e) {
        const value = e.target.value.trim();
        const color = tinycolor(value);
        if (color.isValid()) {
            this.set('value', color.toHexString());
        }
    }
}
```

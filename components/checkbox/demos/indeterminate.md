---
title: 半选中状态
order: 2
---

通过`indeterminate`属性可以控制`Checkbox`的半选中状态

```vdt
import Checkbox from 'kpc/components/checkbox';

const length = self.get('languages').length;

<div>
    <Checkbox indeterminate={{ length > 0 && length < 3 }}
        value={{ length === 3 }}
        ev-$change:value={{ self._toggleSelectAll }}
    >全选</Checkbox>
    <hr />
    <Checkbox v-for={{ self.get('options') }}
        name="languages" 
        trueValue={{ value }}
        v-model="languages"
    >{{ value }}</Checkbox>
    Your selected: {{ JSON.stringify(self.get('languages')) }}
</div>
```

```styl
.k-checkbox
    margin-right 20px
```

```js
const options = ['Javascript', 'C++', 'PHP'];

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            // 必须初始化为数组
            languages: [],
            options,
        };
    }

    _toggleSelectAll(c, checked) {
        if (checked) {
            this.set('languages', options.slice(0));
        } else {
            this.set('languages', []);
        }
    }
}
```

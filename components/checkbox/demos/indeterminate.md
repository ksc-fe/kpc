---
title: 
    zh-CN: 半选中状态
    en-US: Semi-checked State
order: 2
---

## zh-CN

通过`indeterminate`属性可以控制`Checkbox`的半选中状态

## en-US

Add `indeterminate` property to make it semi-checked.

```vdt
import Checkbox from 'kpc/components/checkbox';

const length = self.get('languages').length;

<div>
    <Checkbox indeterminate={{ length > 0 && length < 3 }}
        value={{ length === 3 }}
        ev-$change:value={{ self._toggleSelectAll }}
    >Check All</Checkbox>
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
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            // must be initialized to an array
            languages: [],
            options: ['Javascript', 'C++', 'PHP'],
        };
    }

    _toggleSelectAll(c, checked) {
        if (checked) {
            this.set('languages', ['Javascript', 'C++', 'PHP']);
        } else {
            this.set('languages', []);
        }
    }
}
```

```vue-template
<div>
    <Checkbox :indeterminate="length > 0 && length < 3"
        :value="length === 3"
        @$change:value="_toggleSelectAll"
    >Check All</Checkbox>
    <hr />
    <Checkbox v-for="(value, key) in options"
        name="languages" 
        :trueValue="value"
        v-model="languages"
    >{{ value }}</Checkbox>
    Your selected: {{ languages }}
</div>
```

```vue-script
computed: {
    length() {
        return this.languages.length;
    }
},
```

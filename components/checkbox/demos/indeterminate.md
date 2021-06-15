---
title: 半选中状态
order: 2
---

通过`indeterminate`属性可以控制`Checkbox`的半选中状态

```vdt
import Checkbox from 'kpc/components/checkbox';

const length = this.get('languages').length;

<div>
    <Checkbox indeterminate={length > 0 && length < 3}
        value={length === 3}
        ev-$change:value={this._toggleSelectAll}
    >全选</Checkbox>
    <hr />
    <Checkbox v-for={this.get('options')}
        name="languages" 
        trueValue={$value}
        v-model="languages"
    >{$value}</Checkbox>
    Your selected: {JSON.stringify(this.get('languages'))}
</div>
```

```styl
.k-checkbox
    margin-right 20px
```

```ts
import {bind} from 'kpc/components/utils';

export default class extends Component {
    static template = template;

    static defaults = {
        // 必须初始化为数组
        languages: [],
        options: ['Javascript', 'C++', 'PHP'],
    }

    @bind
    _toggleSelectAll(checked, oldChecked) {
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
    >全选</Checkbox>
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

```angular-methods
get length() {
    return this.languages.length;
}
```

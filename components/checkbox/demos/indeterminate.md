---
title: 半选中状态
order: 2
---

通过`indeterminate`属性可以控制`Checkbox`的半选中状态

```vdt
import {Checkbox} from 'kpc';

<div>
    <Checkbox indeterminate={this.getLength() > 0 && this.getLength() < 3}
        value={length === 3}
        ev-$change:value={this.toggleSelectAll}
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
import {bind} from 'kpc';

interface Props {
    languages?: string[]
    options: string[]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            // 必须初始化为数组
            languages: [],
            options: ['Javascript', 'C++', 'PHP'],
        } as Props;
    };

    @bind
    toggleSelectAll(checked?: boolean) {
        if (checked) {
            this.set('languages', ['Javascript', 'C++', 'PHP']);
        } else {
            this.set('languages', []);
        }
    }

    getLength() {
        return this.get('languages')!.length;
    }
}
```

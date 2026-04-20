---
title: 基础使用
order: 0
---

标签类型：`default`, `primary`, `success`, `warning` `danger`；添加`disabled`属性，可以禁用标签

```vdt
import {Tag} from 'kpc';

<div>
    <Tag v-for={this.get('types')} type={$value}>
        {$value}
    </Tag>
    <Tag disabled>disabled</Tag>
</div>
```

```styl
.k-tag
    margin-right 16px
```

```ts
import {TagProps} from 'kpc';

interface Props {
    types: TagProps['type'][]
}

export default class extends Component {
    static template = template;
    static defaults() {
        return {
            types: ['default', 'primary', 'success', 'warning', 'danger'],
        } as Props;
    }
}
```

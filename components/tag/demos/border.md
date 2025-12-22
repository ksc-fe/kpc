---
title: 边框
order: 4
---

通过`border`可以定义边框样式: `solid` `dashed` `none`(默认) 

```vdt
import {Tag} from 'kpc';

<div>
    <div v-for={this.get('borders')} v-for-value="border" class="row">
        <Tag v-for={this.get('types')}
            type={$value}
            border={border}
            closable
        >{$value}</Tag>
        <Tag disabled closable border={border}>disabled</Tag>
    </div>
</div>
```

```styl
.k-tag
    margin-right 16px
.row
    margin-bottom 16px
```

```ts
import {TagProps} from 'kpc';

interface Props {
    types: TagProps['type'][]
    borders: TagProps['border'][]
}

export default class extends Component {
    static template = template;
    static defaults() {
        return {
            types: ['default', 'primary', 'success', 'warning', 'danger'],
            borders: ['solid', 'dashed', 'none'],
        } as Props;
    }
}
```

---
title: 组件尺寸
order: 2
---

通过`size`可以定义尺寸: `default` `large` `small` `mini`

```vdt
import {Tag} from 'kpc';

<div>
    <Tag v-for={this.get('sizes')} size={$value}>
        {$value}
    </Tag>
    <br /><br />
    <Tag v-for={this.get('sizes')}
        size={$value}
        type={this.get('types')[$key]}
    >{$value}</Tag>
    <br /><br />
    <Tag v-for={this.get('tags')}
        type="primary"
        size={$value}
        ev-close={() => this.onClose($key)}
        closable
    >{$value}</Tag>
</div>
```

```styl
.k-tag
    margin-right 16px
```

```ts
import {bind, TagProps} from 'kpc';

interface Props {
    tags: TagProps['size'][]
    sizes: TagProps['size'][]
    types: TagProps['type'][]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            sizes: ['large', 'default', 'small', 'mini'],
            tags: ['large', 'default', 'small', 'mini'],
            types: ['primary', 'warning', 'success', 'danger'],
        } as Props;
    };

    @bind
    onClose(index: number) {
        let tags = this.get('tags').slice(0);
        tags.splice(index, 1);
        this.set('tags', tags);
    }
}
```

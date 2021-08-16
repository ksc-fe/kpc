---
title: 组件尺寸
order: 2
---

通过`size`可以定义尺寸: `default` `large` `small` `mini`

```vdt
import {Tag} from 'kpc/components/tag';

<div>
    <Tag v-for={['large', 'default', 'small', 'mini']}
        size={$value}
    >{ $value }</Tag>
    <br /><br />
    <Tag v-for={[['large', 'primary'], ['default', 'warning'], ['small', 'success'], ['mini', 'danger']]}
        size={$value[0]}
        type={$value[1]}
    >{ $value[0] }</Tag>
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
import {bind} from 'kpc/components/utils';

export default class extends Component {
    static template = template;
    static defaults = () => ({
        tags: ['large', 'default', 'small', 'mini']
    });

    @bind
    onClose(index) {
        let tags = this.get('tags').slice(0);
        tags.splice(index, 1);
        this.set('tags', tags);
    }
}
```
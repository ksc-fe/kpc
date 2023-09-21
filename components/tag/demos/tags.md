---
title: 标签组
order: 4
---

通过`border`可以定义边框样式: `solid` `dashed` `none`(默认) 

```vdt
import {Tags, Tag, Split, Tooltip} from 'kpc';

<Split>
    <b:first>
        <Tags>
            <Tag v-for={this.get('tags1')}
                key={$value}
                type={$value}
                closable
                ev-close={(e) => this.remove('tags1', $value, e)}
            >{$value}</Tag>
        </Tags>
    </b:first>
    <b:last>
        <Tags nowrap>
            <Tag v-for={this.get('tags2')}
                key={$value}
                type={$value}
                closable
                ev-close={(e) => this.remove('tags2', $value, e)}
            >{$value}</Tag>
            <Tooltip content="test">
                 <Tag>with tooltip</Tag>
            </Tooltip>
        </Tags>
    </b:last>
</Split>
```

```styl
.k-split
    width: 600px
    background: #e1e1e1
```

```ts
import {TagProps} from 'kpc';

interface Props {
    tags1: Required<TagProps>['type'][]
    tags2: Required<TagProps>['type'][]
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            tags1: ['default', 'primary', 'success', 'warning', 'danger'],
            tags2: ['default', 'primary', 'success', 'warning', 'danger'],
        } as Props;
    }

    remove(name: keyof Props, type: Required<TagProps>['type'], e: MouseEvent) {
        e.preventDefault();

        const tags = this.get(name).filter((tag) => tag !== type);
        this.set(name, tags); 
    }
}
```

```react-methods
remove(name: keyof Props, type: Required<TagProps>['type'], e: MouseEvent) {
    e.preventDefault();

    const tags = this.state[name].filter((tag) => tag !== type);
    this.setState({[name as 'tags1']: tags});
}
```

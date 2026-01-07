---
title: 标签组
order: 5
---

使用`Tags`包裹`Tag`可以展示标签组，给`Tags`指定`nowrap`可以让标签自适应仅展示成一行，超出的部分会隐藏，
同时会展示隐藏的数量

```vdt
import {Tags, Tag, Split, Tooltip} from 'kpc';

<Split style="width: 600px; background: #e1e1e1;">
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
            <Tooltip content="test" key="test">
                 <Tag>with tooltip</Tag>
            </Tooltip>
        </Tags>
    </b:last>
</Split>
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

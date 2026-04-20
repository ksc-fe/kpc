---
title: 标签可拖动
order: 6
---

```vdt
import {Tags, Tag, Tooltip} from 'kpc';

<div>
    <Tags draggable>
        <Tag v-for={this.get('tags1')}
            key={$value}
            type={$value}
        >{$value}</Tag>
        <Tooltip content="test" key="test">
             <Tag>with tooltip</Tag>
        </Tooltip>
    </Tags>
    <br />
    <Tags draggable nowrap style="width: 300px;">
        <Tag v-for={this.get('tags2')}
            key={$value}
            type={$value}
        >{$value}</Tag>
        <Tooltip content="test" key="test">
             <Tag>with tooltip</Tag>
        </Tooltip>
    </Tags>
</div>
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
}
```

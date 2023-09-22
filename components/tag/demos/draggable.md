---
title: 标签可拖动
order: 5
---

```vdt
import {Tags, Tag, Tooltip} from 'kpc';

<div>
    <Tags draggable>
        <Tag v-for={this.get('tags')}
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
    tags: Required<TagProps>['type'][]
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            tags: ['default', 'primary', 'success', 'warning', 'danger'],
        } as Props;
    }
}
```

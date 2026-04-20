---
title: 头像模式
order: 2
---

avator属性可以用来将组件显示为头像模式。

```vdt
import {Skeleton} from 'kpc';

<div>
    <Skeleton loading={this.get('showSkeleton')} avator={true} />
</div>
```

```ts
interface Props {
    showSkeleton?: boolean
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            showSkeleton: true
        };
    }
}
```

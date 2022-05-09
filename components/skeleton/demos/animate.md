---
title: 动画效果
order: 3
---

添加animated属性可显示动画效果。

```vdt
import {Skeleton} from 'kpc';

const {showSkeleton} = this.get();

<div>
    <Skeleton loading={showSkeleton} avator animated />
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

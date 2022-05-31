---
title: 基础用法
order: 0
---

最简单的骨架屏用法，通过loading属性来控制骨架屏的显示或隐藏效果。也可以使用Spin来代替，但是在某些场景下能提供比Spin更好的视觉效果和用户体验。

```vdt
import {Skeleton} from 'kpc';

const showSkeleton = this.get('showSkeleton');

<div>
    <Skeleton loading={showSkeleton} />
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

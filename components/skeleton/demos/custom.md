---
title: 自定义样式
order: 4
---

在提供的默认样式不能满足需求的时候，您可以通过自定义模板来实现希望的效果。

```vdt
import {Skeleton, SkeletonItem} from 'kpc';

const {showSkeleton} = this.get();

<div>
    <Skeleton loading={showSkeleton} avator animated>
        <SkeletonItem type="image"></SkeletonItem>
        <div style="display: flex; justify-content: space-between; width: 200px; margin-top: 20px;">
            <div>
                <SkeletonItem type="button" style="height: 16px;"></SkeletonItem>
                <SkeletonItem type="button" style="height: 16px; margin-top: 8px;"></SkeletonItem>
            </div>
            <SkeletonItem type="button"></SkeletonItem>
        </div>
    </Skeleton>
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

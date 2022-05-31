---
title: 自定义样式
order: 4
---

我们为SkeletonItem提供了`type`属性，默认具有text、avator、image、button、input几种类型。他们分别模拟了文本、头像、图片、按钮、输入框几种元素的外观。在提供的默认样式不能满足需求的时候，我们可以通过自定义模板来实现希望的效果。

> 在使用自定义样式的时候，如需要自定义的元素具有动画效果，请使用`div`或`span`元素。

```vdt
import {Skeleton, SkeletonItem} from 'kpc';

const showSkeleton = this.get('showSkeleton');

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

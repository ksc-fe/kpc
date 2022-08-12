---
title: 自定义样式
order: 4
---

我们为SkeletonItem提供了`type`属性，默认具有"text" | "avator" | "image" | "button" | "input"几种类型。他们分别模拟了文本、头像、图片、按钮、输入框几种元素的外观。在提供的默认样式不能满足需求的时候，我们可以通过自定义模板来实现预期的效果。

```vdt
import {Skeleton, SkeletonItem} from 'kpc';

<div>
    <Skeleton loading={this.get('showSkeleton')} avator animated>
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

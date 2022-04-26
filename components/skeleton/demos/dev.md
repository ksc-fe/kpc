---
title: 基础用法
order: 0
---

通过`value`设置组件的值，当添加`half`属性时，支持选中半星

```vdt
import {Skeleton, SkeletonItem} from 'kpc';
import {Rate, Button} from 'kpc';

<div style="padding: 50px;width: 1400px;">
    <Button type="primary">show</Button>
    <div style="padding: 100px;border: 1px solid #ccc;">
        <Skeleton 
            avator
            animated
        >
            <SkeletonItem type="image"></SkeletonItem>
            <div style="display: flex; justify-content: space-between; width: 200px; margin-top: 20px;">
                <div>
                    <SkeletonItem type="button" style="height: 16px;"></SkeletonItem>
                    <SkeletonItem type="button" style="height: 16px;margin-top: 5px;"></SkeletonItem>
                </div>
                <SkeletonItem type="button"></SkeletonItem>
            </div>
        </Skeleton>
    </div>

    <div style="padding: 100px;border: 1px solid #ccc;">
        <Skeleton 
            avator
            animated
        >
        </Skeleton>
    </div>
    <div style="padding: 100px;border: 1px solid #ccc;">
        <Skeleton rows={4.6}></Skeleton>
    </div>
    <!-- <SkeletonItem type="image"></SkeletonItem> -->
</div>
```

```ts
interface Props {
    value1?: number
    value2?: number
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            value1: 2, 
            value2: 2.5
        };
    }
}
```

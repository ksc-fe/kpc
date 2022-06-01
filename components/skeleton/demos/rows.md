---
title: 控制行数
order: 1
---

可以根据需要，来控制骨架屏显示的行数，默认为2行。

```vdt
import {Skeleton} from 'kpc';

<div>
    <Skeleton loading={this.get('showSkeleton')} rows={this.get('rows')} />
</div>
```

```ts
interface Props {
    showSkeleton?: boolean
    rows?: number
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            showSkeleton: true,
            rows: 4
        };
    }
}
```

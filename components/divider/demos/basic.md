---
title: 基本用法
order: 0
---

`Divider`组件为区域内容的分割线，`dashed`属性可定义为虚线。

```vdt
import {Card, Divider} from 'kpc';

<div>
    <Card>
        <div>默认直线</div>
        <Divider/>
        <div>虚线</div>
        <Divider dashed/>
    </Card>
</div>
```

```ts
export default class extends Component {
    static template = template;
}
```

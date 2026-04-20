---
title: 文字及位置
order: 1
---

`Divider`分割线可以设置文字，文字位置通过`position`属性设置。

```vdt
import {Card, Divider} from 'kpc';

<div>
    <Card>
        <div>卡片内容</div>
        <Divider>Text</Divider>
        <div>卡片内容</div>
        <Divider position="left">Text</Divider>
        <div>卡片内容</div>
        <Divider position="right">Text</Divider>
    </Card>
</div>
```

```ts
export default class extends Component {
    static template = template;
}
```

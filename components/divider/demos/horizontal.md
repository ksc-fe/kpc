---
title: 排列
order: 2
---

通过`type`属性设置排列方式。

```vdt
import {Card, Divider, Icon} from 'kpc';

<div class="divider-content">
    Text
    <Divider type="vertical" margin="none"></Divider>
    <a href="#">Link</a>
    <Divider type="vertical">Text</Divider>
    <a href="#">Link</a>
</div>
```

```styl
.divider-content
    height 20px
    display flex
    align-items center
```

```ts
export default class extends Component {
    static template = template;
}
```

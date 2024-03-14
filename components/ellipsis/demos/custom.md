---
title: 自定义内容
order: 2
---

`Ellipsis`支持任意自定义内容，特殊情况下`Tooltip`样式可通过添加`tooltipClass`自定义。

```vdt
import {Ellipsis, Split, Button, Icon} from 'kpc';

<Split style="width: 400px">
    <b:first>
        <Ellipsis class="panel" tooltipClass="tooltip-class">
            <Button type="primary">测试</Button>
            <Button type="primary">测试</Button>
            <Button type="primary">测试</Button>
            <Button type="primary">测试</Button>
            <Button type="primary">测试</Button>
        </Ellipsis>
    </b:first>
    <b:last>
        <Ellipsis class="panel">
            <Icon class="ion-heart" />
            <Icon class="ion-heart" />
            <Icon class="ion-heart" />
            <Icon class="ion-heart" />
            测试测试测试
            <Icon class="ion-heart" />
            <Icon class="ion-heart" />
            <Icon class="ion-heart" />
            <Icon class="ion-heart" />
        </Ellipsis>
    </b:last>
</Split>
```

```styl
.k-split
    border 1px solid #ccc
    height 200px
    margin-bottom 20px
.k-btn
    margin-right 10px
.panel
    margin 10px
```


```ts
interface Props {
    tooltipClass?: string
}

export default class extends Component<Props> {
    static template = template;
}
```
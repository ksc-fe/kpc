---
title: 基本用法
order: 0
---

`width`属性可定义可展示的宽度，若不设置`width`，默认父级宽度为准。`maxLines`设置多行忽略最大行数。

```vdt
import {Ellipsis, Split} from 'kpc';

<Split style="width: 400px">
    <b:first>
        <Ellipsis class="panel">测试测试测试测试测试测试测试</Ellipsis>
        <br/>
        <Ellipsis class="panel" maxLines={2}>最大几行忽略最大几行忽略最大几行忽略</Ellipsis>
    </b:first>
    <b:last>
        <Ellipsis class="panel" disabled={this.get('disabled')}>不展示tooltip不展示tooltip</Ellipsis>
    </b:last>
</Split>
```

```styl
.k-split
    border 1px solid #ccc
    height 200px
    margin-bottom 20px
.panel
    margin 10px
```
```ts
interface Props {
    disabled?: boolean
}
export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            disabled: true
        };
    }
}
```
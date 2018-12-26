---
title: 展示遮罩层
order: 1
---

添加`overlay`属性，即可展示带遮罩层的加载动画，此时包含`Spin`的容器必须是定位元素，动画元素默认
会居中展示，所以`center`属性在该情况下无效

```vdt
import Spin from 'kpc/components/spin';
import {Table, TableColumn} from 'kpc/components/table';

<div class="wrapper">
    <Table data={{ self.get('data') }}>
        <TableColumn key="a" title="表头1" />
        <TableColumn key="b" title="表头2" />
    </Table>
    <Spin overlay />
</div>
```

```styl
.wrapper
    position relative
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [
                {a: '第一行', b: '哈哈2'}, 
                {a: '第二行', b: '哈哈2'},
                {a: '第三行', b: '哈哈3'},
            ]
        }
    }
}
```

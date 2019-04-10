---
title: 
    zh-CN: 展示遮罩层
    en-US: Display mask layer
order: 1
---
## zh-CN

添加`overlay`属性，即可展示带遮罩层的加载动画，此时包含`Spin`的容器必须是定位元素，动画元素默认
会居中展示，所以`center`属性在该情况下无效

## en-US

Add the `overlay` property to display the loading animation with the mask layer. The container containing `Spin` must be the positioning element. The animation element defaults.
Will be centered, so the `center` attribute is invalid in this case

```vdt
import Spin from 'kpc/components/spin';
import {Table, TableColumn} from 'kpc/components/table';

<div class="wrapper">
    <Table data={{ self.get('data') }}>
        <TableColumn key="a" title="Head1" />
        <TableColumn key="b" title="Head2" />
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
                {a: 'first row', b: 'Haha1'}, 
                {a: 'second row', b: 'Haha2'},
                {a: 'third row', b: 'Haha3'},
            ]
        }
    }
}
```

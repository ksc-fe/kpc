---
title: 遮罩层
order: 0.2
---

添加`overlay`属性，false则不展示遮罩层，true展示遮罩层。默认为true。
另外添加`closabled`属性，`false`：点非抽屉区不可自动关闭抽屉（点击抽屉内关闭按钮才可以关闭），`true`：点非抽屉区可以自动关闭。默认为true

```vdt
import Drawer from 'kpc/components/drawer';
import {Button, ButtonGroup} from 'kpc/components/button';

<div>
    <Button ev-click={{ self.set.bind(self, 'noOverlay', true) }}
        type="primary"
    >Show Drawer Without Overlay</Button>
    <Drawer v-model="noOverlay" 
        title="Drawer Title"
        ref="__demoOne"
        overlay={{ false }}
        closable={{ false }}
    >
        Drawer Without Overlay
    </Drawer>
</div>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;
}
```

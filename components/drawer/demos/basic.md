---
title: 基本用法
order: 0
---

`Drawer组件`继承了`Dialog组件`的属性、扩展点、方法和事件（拖拽功能除外）。基本用法和`Dialog`相同。

<!-- 继承了Dialog弹窗，通过`v-model`建立绑定，当该绑定的值为`true`时，展示抽屉组件。 -->

```vdt
import Drawer from 'kpc/components/drawer';
import {Button, ButtonGroup} from 'kpc/components/button';
import {Select, Option} from 'kpc/components/select';

<div>
    <Button ev-click={{ self.set.bind(self, 'showDrawer', true) }}
        type="primary"
    >Show Drawer</Button>
    <Drawer v-model="showDrawer" title="Drawer Title" ref="__demoOne">
        <Select>
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
        </Select>

        Drawer Body 
    </Drawer>
</div>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    
}

```

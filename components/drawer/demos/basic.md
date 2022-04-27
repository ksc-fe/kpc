---
title: 基本用法
order: 0
---

`Drawer`组件继承了`Dialog`组件的属性、扩展点、方法和事件（拖拽功能除外）。基本用法和`Dialog`相同。

<!-- 继承了Dialog弹窗，通过`v-model`建立绑定，当该绑定的值为`true`时，展示抽屉组件。 -->

```vdt
import {Drawer, Button, ButtonGroup, Select, Option} from 'kpc';

<div>
    <Button ev-click={this.set.bind(this, 'show', true)}
        type="primary"
    >Show Drawer</Button>
    <Drawer v-model="show"
        title="Drawer Title"
        ref="__demoOne"
    >
        <Select>
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
        </Select>
        Drawer Body 
    </Drawer>
</div>
```

```ts
interface Props {
    show?: boolean
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            show: false
        }
    }
}
```

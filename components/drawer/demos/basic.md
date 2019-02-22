---
title: 
    zh-CN: 基本用法
    en-US: Basic Usage
order: 0
---

## zh-CN

`Drawer`组件继承了`Dialog`组件的属性、扩展点、方法和事件（拖拽功能除外）。基本用法和`Dialog`相同。

## en-US

The `Drawer` component inherits the `Dialog` component. The properties, blocks, methods and events 
ot the `Dialog` component have also been inherited (except for the ability of dragging). The 
basic usage is the same as `Dialog`.

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

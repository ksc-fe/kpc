---
title: 
    zh-CN: 提示弹层位置
    en-US: Tooltip position
order: 1
---

## zh-CN

使用`position`属性改变弹层位置，该属性值为对象，其中`my`指弹层，`at`指触发器。组件同时
提供了4种快捷取值：`left`, `right`, `top`, `bottom`

## en-US

You can change the tooltip position by `position` property, the property value is the object, and `my` is the tooltip element, `at` is the trigger element. the component also provide four shortcut values：`left`, `right`, `top`, `bottom`.

```vdt
import Tooltip from 'kpc/components/tooltip';
import {ButtonGroup, Button} from 'kpc/components/button';

<ButtonGroup>
    <Tooltip v-for={{ ['left', 'right', 'top', 'bottom'] }}
        content={{ value }}
        position={{ value }}
    >
        <Button>{{ value }}</Button>
    </Tooltip>
</ButtonGroup>
```

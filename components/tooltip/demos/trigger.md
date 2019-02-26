---
title: 
    zh-CN: 触发方式
    en-US: Trigger mode
order: 2
---

## zh-CN

使用`trigger`指定触发方式，`click`点击触发，`hover`悬浮触发，默认为`hover`，在悬浮触发情况下，
鼠标离开触发器，弹层就会消失，如果我们需要鼠标能离开触发器并悬浮在弹层上，需要添加`canHover`属性

## en-US

You can specify trigger mode by `trigger` property, click trigger(`click`), hover trigger(`hover`),it is `hover` trigger by default. In the case of hover trigger, tooltip will disappear when the mouse leaves the trigger, if we need the mouse to leave the trigger and hover on the tooltip by adding `canHover` property.

```vdt
import {Tooltip} from 'kpc/components/tooltip';
import {ButtonGroup, Button} from 'kpc/components/button';

<ButtonGroup>
    <Tooltip content="hover">
        <Button>hover</Button>
    </Tooltip>
    <Tooltip trigger="click" content="click">
        <Button>click</Button>
    </Tooltip>
    <Tooltip canHover content="the text can be hovered">
        <Button>can hover</Button>
    </Tooltip>
</ButtonGroup>
```

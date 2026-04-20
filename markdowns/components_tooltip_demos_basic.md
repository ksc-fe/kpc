---
title: 基础用法
order: 0
---

使用`Tooltip`包裹需要展示提示的元素，使用`content`属性指定提示文本即可，组件默认为深色主题`dark`，你可以通过
`theme`指定浅色主题`light`，通过`disabled`属性可以禁用提示，通过`size`可以指弹层的大小：`small` `default`

> 与`Dropdown`一样，`Tooltip`会返回两个元素（触发器和菜单），所以不要作为Vue2.0的模板顶层返回元素
> 因为Vue2.0只支持返回一个元素

```vdt
import {Tooltip} from 'kpc';

<div>
    <Tooltip content="hello">
        hover the text
    </Tooltip>
    <br /><br />
    <Tooltip content="hello" size="small">
        small size
    </Tooltip>
    <br /><br />
    <Tooltip>
        don't show anything if content is empty 
    </Tooltip>
    <br /><br />
    <Tooltip content="hello" theme="light">
        light theme 
    </Tooltip>
    <br /><br />
    <Tooltip content="hello" disabled>
        disabled
    </Tooltip>
</div>
```

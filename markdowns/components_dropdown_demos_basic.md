---
title: 基础用法
order: 0
---

一个完整的菜单需要用到`Dropdown`，`DropdownMenu`和`DropdownItem`三个组件。
`Dropdown`会将第一个子元素作为触发器，第二个元素为菜单`DropdownMenu`。

> 与`Tooltip`一样，`Dropdown`会返回两个元素（触发器和菜单），所以不要作为Vue2.0的模板顶层返回元素
> 因为Vue2.0只支持返回一个元素


```vdt
import {Dropdown, DropdownMenu, DropdownItem, Button, Icon} from 'kpc';

<div>
    <Dropdown>
        <Button type="primary">
            hover <Icon class="k-icon-down" />
        </Button>
        <DropdownMenu>
            <DropdownItem>item 1</DropdownItem>
            <DropdownItem>item 2</DropdownItem>
            <DropdownItem>item 3</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</div>
```

```styl
.k-icon
    display inline-block
    transition transform .25s ease-in-out
.k-dropdown-open
    .k-icon
        transform rotateX(180deg)
```

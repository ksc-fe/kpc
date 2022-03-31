---
title: 菜单位置
order: 2
---

通过`position`属性，可以定义菜单相对触发器的位置。位置对象中`my`指菜单，`at`指触发器。
通过`"top" | "bottom" | "left" | "right" `可以快速定位上下左右四个方向

```vdt
import {Dropdown, DropdownMenu, DropdownItem, Button, Icon} from 'kpc';

<div>
    <Dropdown position={{my: 'left top', at: 'left bottom+5'}}>
        <Button type="primary">
            left <Icon class="ion-ios-arrow-down" />
        </Button>
        <DropdownMenu>
            <DropdownItem>item 1</DropdownItem>
            <DropdownItem>item 2</DropdownItem>
            <DropdownItem>item 3</DropdownItem>
        </DropdownMenu>
    </Dropdown>

    <Dropdown position={{my: 'right top', at: 'right bottom+5'}}>
        <Button type="primary">
            right <Icon class="ion-ios-arrow-down" />
        </Button>
        <DropdownMenu>
            <DropdownItem>item 1</DropdownItem>
            <DropdownItem>item 2</DropdownItem>
            <DropdownItem>item 3</DropdownItem>
        </DropdownMenu>
    </Dropdown>

    <Dropdown position="top">
        <Button type="primary">
            top center <Icon class="ion-ios-arrow-down" />
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
.k-btn
    margin-right 20px
.k-icon
    display inline-block
    transition transform .25s ease-in-out
.k-dropdown-open
    .k-icon
        transform rotateX(180deg)
```

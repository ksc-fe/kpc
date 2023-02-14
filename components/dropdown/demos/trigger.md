---
title: 触发方式
order: 0
---

`Dropdown`提供了两种触发方式来弹窗菜单，`hover`悬停触发（默认），`click`点击触发，当使用`Input`组件时，还可以
指定为`foucs`来触发。

通过`trigger`属性来指定它们。

```vdt
import {Dropdown, DropdownMenu, DropdownItem, Button, Icon, Input} from 'kpc';

<div>
    <Dropdown>
        <Button type="primary">
            hover <Icon class="ion-ios-arrow-down" />
        </Button>
        <DropdownMenu>
            <DropdownItem>item 1</DropdownItem>
            <DropdownItem>item 2</DropdownItem>
            <DropdownItem>item 3</DropdownItem>
        </DropdownMenu>
    </Dropdown>

    <Dropdown trigger="click">
        <Button type="primary">
            click <Icon class="ion-ios-arrow-down" />
        </Button>
        <DropdownMenu>
            <DropdownItem>item 1</DropdownItem>
            <DropdownItem>item 2</DropdownItem>
            <DropdownItem>item 3</DropdownItem>
        </DropdownMenu>
    </Dropdown>

    <Dropdown trigger="focus">
        <Input placeholder="focus" />
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

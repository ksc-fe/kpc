---
title: 禁用菜单（项）
order: 3
---

通过给`Dropdown`和`DropdownItem`添加`disabled`属性，可以分别禁用菜单和菜单项。

```vdt
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc';
import {Button} from 'kpc';
import {Icon} from 'kpc';

<div>
    <Dropdown disabled>
        <Button type="primary">
            disabled <Icon class="k-icon-down" />
        </Button>
        <DropdownMenu>
            <DropdownItem>item 1</DropdownItem>
            <DropdownItem>item 2</DropdownItem>
            <DropdownItem>item 3</DropdownItem>
        </DropdownMenu>
    </Dropdown>

    <Dropdown>
        <Button type="primary">
            disabled item <Icon class="k-icon-down" />
        </Button>
        <DropdownMenu>
            <DropdownItem>item 1</DropdownItem>
            <DropdownItem disabled>item 2</DropdownItem>
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

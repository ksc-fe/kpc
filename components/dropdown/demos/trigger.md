---
title: 触发方式
order: 0
---

`Dropdown`提供了两种触发方式来弹窗菜单，`hover`悬停触发（默认），`click`点击触发。
通过`trigger`属性来指定它们。

```vdt
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import Button from 'kpc/components/button';

<div>
    <Dropdown>
        <Button type="primary">
            hover <i class="k-icon ion-arrow-down-b"></i>
        </Button>
        <DropdownMenu>
            <DropdownItem>item 1</DropdownItem>
            <DropdownItem>item 2</DropdownItem>
            <DropdownItem>item 3</DropdownItem>
        </DropdownMenu>
    </Dropdown>

    <Dropdown trigger="click">
        <Button type="primary">
            click <i class="k-icon ion-arrow-down-b"></i>
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
```

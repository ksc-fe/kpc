---
title: 菜单位置
order: 2
---

通过`position`属性，可以定义菜单相对触发器的位置。位置对象中`my`指菜单，`at`指触发器

```vdt
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import Button from 'kpc/components/button';

<div>
    <Dropdown position={{ {my: 'left top', at: 'left bottom+5'} }}>
        <Button type="primary">
            left <i class="k-icon ion-arrow-down-b"></i>
        </Button>
        <DropdownMenu>
            <DropdownItem>item 1</DropdownItem>
            <DropdownItem>item 2</DropdownItem>
            <DropdownItem>item 3</DropdownItem>
        </DropdownMenu>
    </Dropdown>

    <Dropdown position={{ {my: 'right top', at: 'right bottom+5'} }}>
        <Button type="primary">
            right <i class="k-icon ion-arrow-down-b"></i>
        </Button>
        <DropdownMenu>
            <DropdownItem>item 1</DropdownItem>
            <DropdownItem>item 2</DropdownItem>
            <DropdownItem>item 3</DropdownItem>
        </DropdownMenu>
    </Dropdown>

    <Dropdown position={{ {my: 'center bottom-5', at: 'center top'} }}>
        <Button type="primary">
            top center <i class="k-icon ion-arrow-down-b"></i>
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

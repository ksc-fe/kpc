---
title: 
    zh-CN: 菜单位置
    en-US: The Position of Menu
order: 2
---

## zh-CN

通过`position`属性，可以定义菜单相对触发器的位置。位置对象中`my`指菜单，`at`指触发器

## en-US

The `position` property allows you to define the position of the menu relative to the trigger element. 
In the position object, `my` refers to the menu, `at` refers to the trigger.

```vdt
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import Button from 'kpc/components/button';
import Icon from 'kpc/components/icon';

<div>
    <Dropdown position={{ {my: 'left top', at: 'left bottom+5'} }}>
        <Button type="primary">
            left <Icon class="ion-ios-arrow-down" />
        </Button>
        <DropdownMenu>
            <DropdownItem>item 1</DropdownItem>
            <DropdownItem>item 2</DropdownItem>
            <DropdownItem>item 3</DropdownItem>
        </DropdownMenu>
    </Dropdown>

    <Dropdown position={{ {my: 'right top', at: 'right bottom+5'} }}>
        <Button type="primary">
            right <Icon class="ion-ios-arrow-down" />
        </Button>
        <DropdownMenu>
            <DropdownItem>item 1</DropdownItem>
            <DropdownItem>item 2</DropdownItem>
            <DropdownItem>item 3</DropdownItem>
        </DropdownMenu>
    </Dropdown>

    <Dropdown position={{ {my: 'center bottom-5', at: 'center top'} }}>
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
        transform rotate(180deg)
```

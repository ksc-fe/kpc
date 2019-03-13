---
title:
    zh-CN: 触发方式
    en-US: Trigger Mode
order: 0
---

## zh-CN

`Dropdown`提供了两种方式来触发菜单弹层，`hover`悬停触发（默认），`click`点击触发。
通过`trigger`属性来指定它们。

## en-US

The `Dropdown` component provides two modes to trigger the dropdown menu, `hover` hover to trigger (default), 
`click` click to trigger. You can specify them by the `trigger` property.

```vdt
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import Button from 'kpc/components/button';
import Icon from 'kpc/components/icon';

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

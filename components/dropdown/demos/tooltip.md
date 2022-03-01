---
title: 菜单项添加Tooltip提示
order: 5
---

使用`Tooltip`包裹需要提示的菜单项`DropdownItem`即可添加提示

```vdt
import {Dropdown, DropdownMenu, DropdownItem, Button, Tooltip} from 'kpc';

<div>
    <Dropdown>
        <Button>DropdownItem with Tooltip</Button>
        <DropdownMenu>
            <Tooltip content="item 1">
                <DropdownItem>item 1</DropdownItem>
            </Tooltip>
            <DropdownItem>item 2</DropdownItem>
            <Tooltip content="disabled">
                <DropdownItem disabled>item 3</DropdownItem>
            </Tooltip>
            <Dropdown position={{my: 'left top', at: 'right top'}}>
                <Tooltip content="This is a nested Dropdown.">
                    <DropdownItem>item 4</DropdownItem>
                </Tooltip>
                <DropdownMenu>
                    <DropdownItem>item 1</DropdownItem>
                    <Tooltip content="nested DropdownItem">
                        <DropdownItem>item 2</DropdownItem>
                    </Tooltip>
                </DropdownMenu>
            </Dropdown>
        </DropdownMenu>
    </Dropdown>
</div>
```

---
title: 右键菜单
order: 7
---

指定`trigger`为`contextmenu`即可实现右键菜单功能

```vdt
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc';

<Dropdown trigger="contextmenu">
    <div class="contextmenu-area">
        right click this area to show context menu
    </div>
    <DropdownMenu>
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem>Option 3</DropdownItem>
    </DropdownMenu>
</Dropdown>
```

```styl
.contextmenu-area
    height 100px
    background #f0f0f0
    text-align center
    line-height 100px
```

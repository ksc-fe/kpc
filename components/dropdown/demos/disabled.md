---
title: 禁用菜单（项）
order: 3
---

通过给`Dropdown`和`DropdownItem`添加`disabled`属性，可以分别禁用菜单和菜单项。

```vdt
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import Button from 'kpc/components/button';
import Icon from 'kpc/components/icon';

<div>
    <Dropdown disabled>
        <Button type="primary">
            disabled <Icon class="ion-arrow-down-b" size="small" />
        </Button>
        <DropdownMenu>
            <DropdownItem>item 1</DropdownItem>
            <DropdownItem>item 2</DropdownItem>
            <DropdownItem>item 3</DropdownItem>
        </DropdownMenu>
    </Dropdown>

    <Dropdown>
        <Button type="primary">
            disabled item<Icon class="ion-arrow-down-b" size="small" />
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
```

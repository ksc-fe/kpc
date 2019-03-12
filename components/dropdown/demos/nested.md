---
title: 嵌套菜单
order: 4
---

`Dropdown`可以嵌套使用，实现级联菜单。子菜单需要指定展示的位置`position`。
我们还可以通过`trigger`单独子菜单触发方式。

```vdt
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import Button from 'kpc/components/button';
import Icon from 'kpc/components/icon';

<div>
    <Dropdown trigger="click">
        <Button type="primary">
            click <Icon class="ion-ios-arrow-down" />
        </Button>
        <DropdownMenu>
            <DropdownItem>item 1</DropdownItem>
            <DropdownItem>item 2</DropdownItem>
            <DropdownItem>item 3</DropdownItem>
            <Dropdown position={{ {my: 'left top', at: 'right top'} }}>
                <DropdownItem>
                    <span>hover</span>
                    <i class="ion-ios-arrow-right"></i>
                </DropdownItem>
                <DropdownMenu>
                    <Dropdown position={{ {my: 'left top', at: 'right top'} }}>
                        <DropdownItem>
                            <span>hover</span>
                            <i class="ion-ios-arrow-right"></i>
                        </DropdownItem>
                        <DropdownMenu>
                            <DropdownItem>item 1</DropdownItem>
                            <DropdownItem>item 2</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <DropdownItem>item 1</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown trigger="click" position={{ {my: 'left top', at: 'right top'} }}>
                <DropdownItem>
                    <span>click</span>
                    <i class="ion-ios-arrow-right"></i>
                </DropdownItem>
                <DropdownMenu>
                    <Dropdown trigger="click" position={{ {my: 'left top', at: 'right top'} }}>
                        <DropdownItem>
                            <span>click</span>
                            <i class="ion-ios-arrow-right"></i>
                        </DropdownItem>
                        <DropdownMenu>
                            <DropdownItem>item 1</DropdownItem>
                            <DropdownItem>item 2</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <DropdownItem>item 1</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <DropdownItem>item 3</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</div>
```

```styl
/.k-dropdown-menu
    .ion-ios-arrow-right
        float right
        height 32px
        &:before
            font-size inherit
.k-icon
    display inline-block
    transition transform .25s ease-in-out
.k-dropdown-open
    .k-icon
        transform rotate(180deg)
```

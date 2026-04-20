---
title: 嵌套菜单
order: 4
---

`Dropdown`可以嵌套使用，实现级联菜单。子菜单需要指定展示的位置`position`。
我们还可以通过`trigger`单独子菜单触发方式。

```vdt
import {Dropdown, DropdownMenu, DropdownItem, Button, Icon} from 'kpc';

<div>
    <Dropdown trigger="click">
        <Button type="primary">
            click <Icon class="k-icon-down" />
        </Button>
        <DropdownMenu class="dropdown-demo">
            <DropdownItem>item 1</DropdownItem>
            <DropdownItem>item 2</DropdownItem>
            <DropdownItem>item 3</DropdownItem>
            <Dropdown position={{my: 'left top', at: 'right top'}} class="dropdown-demo">
                <DropdownItem>
                    <span>hover</span>
                    <Icon class="k-icon-right" />
                </DropdownItem>
                <DropdownMenu class="dropdown-demo">
                    <Dropdown position={{my: 'left top', at: 'right top'}}>
                        <DropdownItem>
                            <span>hover</span>
                            <Icon class="k-icon-right" />
                        </DropdownItem>
                        <DropdownMenu class="dropdown-demo">
                            <DropdownItem>item 1</DropdownItem>
                            <DropdownItem>item 2</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <DropdownItem>item 1</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown trigger="click" position={{my: 'left top', at: 'right top'}}>
                <DropdownItem>
                    <span>click</span>
                    <Icon class="k-icon-right" />
                </DropdownItem>
                <DropdownMenu class="dropdown-demo">
                    <Dropdown trigger="click" position={{my: 'left top', at: 'right top'}}>
                        <DropdownItem>
                            <span>click</span>
                            <Icon class="k-icon-right" />
                        </DropdownItem>
                        <DropdownMenu class="dropdown-demo">
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
/.dropdown-demo.k-dropdown-menu
    .k-icon
        float right
        line-height 32px
        &:before
            font-size inherit
.k-icon
    display inline-block
    transition transform .25s ease-in-out
.k-dropdown-open
    .k-icon
        transform rotateX(180deg)
```

---
title: 菜单项添加Tooltip提示
order: 5
---

使用`Tooltip`包裹需要提示的菜单项`DropdownItem`即可添加提示，需要注意的是：
在Intact下，当用`Tooltip`包裹触发器时，需要使用另外的元素将它包裹起来，因为`Tooltip`实际
返回的是两个元素，一个是它的触发器，一个是提示内容层。而`Dropdown`的触发器只能
接受一个元素，所以需要另外再包起来（如本例中`item 4`)。Vue下不需要，因为Vue不支持返回多元素，
本身就会被包裹。

```vdt
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import Button from 'kpc/components/button';
import Tooltip from 'kpc/components/tooltip';

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
            <Dropdown position={{ {my: 'left top', at: 'right top'} }}>
                <div>
                    <Tooltip content="This is a nested Dropdown.">
                        <DropdownItem>item 4</DropdownItem>
                    </Tooltip>
                </div>
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

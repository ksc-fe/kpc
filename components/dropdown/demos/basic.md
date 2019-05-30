---
title: 基础用法
order: 0
---

一个完整的菜单需要用到`Dropdown`，`DropdownMenu`和`DropdownItem`三个组件。
`Dropdown`会将第一个子元素作为触发器，第二个元素为菜单`DropdownMenu`。

> 与`Tooltip`一样，在Intact下，`Dropdown`会返回两个元素（触发器和菜单），而不是将它们包裹起来，作为一个元素返回，
> 所以不要将它作为模板的顶级元素，例如本例中，用`<div>`将之包裹起来才能作为模板元素返回。

> `@since 0.9.0` `Dropdown`在`Vue/React`下渲染不会被元素包裹，这可能会影响之前项目中定义的样式，
> 如需渲染包裹元素，请做如下配置
> ```js
> // @code 
> import {configure} from 'kpc/components/utils';
>
> // 该配置全局生效
> configure({useWrapper: true});
> ```


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
</div>
```

```styl
.k-icon
    display inline-block
    transition transform .25s ease-in-out
.k-dropdown-open
    .k-icon
        transform rotate(180deg)
```

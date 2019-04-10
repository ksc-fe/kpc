---
title:
    zh-CN: 基础用法
    en-US: Basic
order: 0
---

## zh-CN

`Menu`定义菜单，`MenuItem`定义菜单项，将`Menu`嵌套在`MenuItem`下，可以定义子菜单；`expandedKeys`定义菜单展开项，`selectedKey`定义菜单选中项。我们必须给`MenuItem`指定一个全局唯一的`key`用来标识每一个菜单项；通过`to`属性，可以定义超链接菜单，另外也可以绑定`MenuItem`的`select`事件来定义菜单项被选中的行为

## en-US

`Menu` defines the menu, `MenuItem` defines the menu item, nests `Menu` under `MenuItem`, can define submenu; `expandedKeys` defines menu expansion, `selectedKey` defines menu selection. We must specify a globally unique `key` for `MenuItem` to identify each menu item; the `to` attribute allows you to define a hyperlink menu, or you can bind the `select` event of `MenuItem` to define the menu. Item selected behavior

```vdt
import {Menu, MenuItem} from 'kpc/components/menu';
import Icon from 'kpc/components/icon';

<Menu
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKey="selectedKey"
>
    <MenuItem key="1" ev-select={{ self.onSelect }}>
        <Icon class="ion-flag" />menu 1
        <Menu>
            <MenuItem key="1-1">sub menu 1</MenuItem>
            <MenuItem key="1-2">sub menu 2</MenuItem>
            <MenuItem key="1-3" disabled>sub menu 3</MenuItem>
            <MenuItem key="1-4">sub menu 4</MenuItem>
        </Menu>
    </MenuItem>
    <MenuItem key="2" disabled><Icon class="ion-star" />menu 2</MenuItem>
    <MenuItem key="3">
        <i class="k-icon ion-heart"></i>menu 3
        <Menu>
            <MenuItem key="3-1">sub menu 1</MenuItem>
            <MenuItem key="3-2">sub menu 2</MenuItem>
            <MenuItem key="3-3" disabled>sub menu 3</MenuItem>
            <MenuItem key="3-4">sub menu 4</MenuItem>
        </Menu>
    </MenuItem>
    <MenuItem key="4" to="/"><Icon class="ion-gear-b" />menu 4</MenuItem>
</Menu>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            expandedKeys: [],
            selectedKey: '3-1',
        };
    }

    onSelect(item) {
        console.log('key', item.get('key'));
    }
}
```

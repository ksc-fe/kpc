---
title: 自定义头部和添加圆点
order: 1.1
---

给`Menu`添加`dot`属性，即可以让当前菜单下所有子元素`MenuItem`（不包括嵌套`MenuItem`）前面展示
圆点；给`MenuItem`单独指定`dot`可以控制当前菜单项是否展示圆点；通过`header`扩展点可以给菜单
添加头部信息

```vdt
import {Menu, MenuItem} from 'kpc/components/menu';
import Icon from 'kpc/components/icon';

<Menu v-model:expandedKeys="expandedKeys" v-model:selectedKey="selectedKey" dot theme="light">
    <b:header><Icon class="ion-star" />Header</b:header>
    <MenuItem key="1" ev-select={{ self.onSelect }}>menu 1</MenuItem>
    <MenuItem key="2" disabled>menu 2</MenuItem>
    <MenuItem key="3" dot={{ false }}>
        <Icon class="ion-heart" />menu 3
        <Menu>
            <MenuItem key="3-1">sub menu 1</MenuItem>
            <MenuItem key="3-2">sub menu 2</MenuItem>
            <MenuItem key="3-3" disabled>sub menu 3</MenuItem>
            <MenuItem key="3-4">sub menu 4</MenuItem>
        </Menu>
    </MenuItem>
    <MenuItem key="4" to="/">menu 4</MenuItem>
</Menu>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            expandedKeys: ['3'],
            selectedKey: '3-1',
        };
    }

    onSelect(item) {
        console.log('key', item.get('key'));
    }
}
```

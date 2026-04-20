---
title: 自定义头部和添加圆点
order: 1.1
---

给`Menu`添加`dot`属性，即可以让当前菜单下所有子元素`MenuItem`（不包括嵌套`MenuItem`）前面展示
圆点；给`MenuItem`单独指定`dot`可以控制当前菜单项是否展示圆点；通过`header`扩展点可以给菜单
添加头部信息

```vdt
import {Menu, MenuItem, Icon} from 'kpc';

<Menu 
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKey="selectedKey"
    dot={true} 
    theme="light"
>
    <b:header><Icon class="ion-star" />Header</b:header>
    <MenuItem key="1" ev-select={this.onSelect}>menu 1</MenuItem>
    <MenuItem key="2" disabled>menu 2</MenuItem>
    <MenuItem key="3" dot={false}>
        <Icon class="ion-heart" />menu 3
        <Menu>
            <MenuItem key="3-1" ev-select={this.onSelect}>sub menu 1</MenuItem>
            <MenuItem key="3-2" ev-select={this.onSelect}>sub menu 2</MenuItem>
            <MenuItem key="3-3" disabled>sub menu 3</MenuItem>
            <MenuItem key="3-4">sub menu 4</MenuItem>
        </Menu>
    </MenuItem>
    <MenuItem key="4" to="/">menu 4</MenuItem>
</Menu>
```

```ts
import {MenuItem} from 'kpc';

export default class extends Component {
    static template = template;

    static defaults() {
        return {
            expandedKeys: ['3'],
            selectedKey: '3-1',
        };
    }

    onSelect(item: MenuItem) {
        console.log('key', item.get('key'));
    }
}
```

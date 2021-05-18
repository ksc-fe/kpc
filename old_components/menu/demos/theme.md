---
title: 切换主题
order: 1
---

通过`theme`属性可以指定主题：`dark` `light`，默认`dark`

```vdt
import {Menu, MenuItem} from 'kpc/components/menu';
import Icon from 'kpc/components/icon';

<Menu v-model:expandedKeys="expandedKeys" theme="light">
    <MenuItem key="1"><Icon class="ion-flag" />menu 1</MenuItem>
    <MenuItem key="2" disabled><Icon class="ion-star" />menu 2</MenuItem>
    <MenuItem key="3">
        <Icon class="ion-heart" />menu 3
        <Menu>
            <MenuItem key="3-1">sub menu 1</MenuItem>
            <MenuItem key="3-2">sub menu 2</MenuItem>
            <MenuItem key="3-3" disabled>sub menu 3</MenuItem>
            <MenuItem key="3-4">sub menu 4</MenuItem>
        </Menu>
    </MenuItem>
    <MenuItem key="4"><Icon class="ion-gear-b" />menu 4</MenuItem>
</Menu>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            expandedKeys: ['3']
        };
    }
}
```

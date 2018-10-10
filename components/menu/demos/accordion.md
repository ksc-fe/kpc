---
title: 手风琴
order: 1
---

```vdt
import {Menu, MenuItem} from 'kpc/components/menu';

<Menu v-model:expandedKeys="expandedKeys" accordion>
    <MenuItem key="1">
        <i class="k-icon ion-flag"></i>menu 1
        <Menu>
            <MenuItem key="1-1">sub menu 1</MenuItem>
            <MenuItem key="1-2">sub menu 2</MenuItem>
        </Menu>
    </MenuItem>
    <MenuItem key="2" disabled><i class="k-icon ion-star"></i>menu 2</MenuItem>
    <MenuItem key="3">
        <i class="k-icon ion-heart"></i>menu 3
        <Menu>
            <MenuItem key="3-1">sub menu 1</MenuItem>
            <MenuItem key="3-2">sub menu 2</MenuItem>
            <MenuItem key="3-3" disabled>sub menu 3</MenuItem>
            <MenuItem key="3-4">sub menu 4</MenuItem>
        </Menu>
    </MenuItem>
    <MenuItem key="4">
        <i class="k-icon ion-gear-b"></i>menu 4
        <Menu>
            <MenuItem key="4-1">sub menu 1</MenuItem>
            <MenuItem key="4-2">sub menu 2</MenuItem>
        </Menu>
    </MenuItem>
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

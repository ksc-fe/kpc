---
title: 手风琴
order: 1.1
---

添加`accordion`属性，可以使菜单每次只能展开一项

```vdt
import {Menu, MenuItem} from 'kpc/components/menu';
import Icon from 'kpc/components/icon';

<Menu v-model:expandedKeys="expandedKeys" accordion>
    <MenuItem key="1">
        <Icon class="ion-flag" />menu 1
        <Menu>
            <MenuItem key="1-1">sub menu 1</MenuItem>
            <MenuItem key="1-2">sub menu 2</MenuItem>
        </Menu>
    </MenuItem>
    <MenuItem key="2" disabled>
        <Icon class="ion-star" />menu 2
    </MenuItem>
    <MenuItem key="3">
        <Icon class="ion-heart" />menu 3
        <Menu>
            <MenuItem key="3-1">sub menu 1</MenuItem>
            <MenuItem key="3-2">sub menu 2</MenuItem>
            <MenuItem key="3-3" disabled>sub menu 3</MenuItem>
            <MenuItem key="3-4">
                sub menu 4
                <Menu>
                    <MenuItem key="3-4-1">Option 1</MenuItem>
                    <MenuItem key="3-4-2">Option 2</MenuItem>
                </Menu>
            </MenuItem>
        </Menu>
    </MenuItem>
    <MenuItem key="4">
        <Icon class="ion-gear-b" />menu 4
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

---
title: 展开收起
order: 2
---

添加`collapse`属性，可以使菜单呈现折叠状态

```vdt
import {Menu, MenuItem} from 'kpc/components/menu';
import {Icon} from 'kpc/components/icon';

<div>
    <br /><br />
    <Menu v-model:expandedKeys="expandedKeys" 
        collapse
        theme="light"
    >
        <MenuItem key="1"><Icon class="ion-flag" />menu 1</MenuItem>
        <MenuItem key="2" disabled><Icon class="ion-star" />menu 2</MenuItem>
        <MenuItem key="3">
            <Icon class="ion-heart" />menu 3
            <Menu>
                <MenuItem key="3-1">sub menu 1</MenuItem>
                <MenuItem key="3-2">sub menu 2</MenuItem>
                <MenuItem key="3-3" disabled>sub menu 3</MenuItem>
                <MenuItem key="3-4">
                    sub menu 4
                    <Menu>
                        <MenuItem key="3-4-1">option 1</MenuItem>
                        <MenuItem key="3-4-2">option 2</MenuItem>
                    </Menu>
                </MenuItem>
            </Menu>
        </MenuItem>
        <MenuItem key="4" to="/"><Icon class="ion-gear-b" />menu 4</MenuItem>
    </Menu>
</div>
```

```ts
export default class extends Component {
    static template = template;

    static defaults() {
        return {
            expandedKeys: ['3']
        };
    }
}
```

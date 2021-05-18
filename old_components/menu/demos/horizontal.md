---
title: 水平菜单
order: 3
---

通过`type`属性，可以定义菜单垂直或者水平排列：`vertical` `horizontal`，默认`vertical`

```vdt
import {Menu, MenuItem} from 'kpc/components/menu';
import {Switch} from 'kpc/components/switch';
import Icon from 'kpc/components/icon';

<div>
    <Menu theme={{ self.get('theme') }} type="horizontal">
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
        <MenuItem key="4"><Icon class="ion-gear-b" />menu 4</MenuItem>
    </Menu>
    <br /><br />
    <Switch 
        on="light"
        off="dark"
        v-model="theme"
        width="60"
        trueValue="light"
        falseValue="dark"
    />
</div>
```

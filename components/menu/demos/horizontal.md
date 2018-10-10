---
title: 水平菜单
order: 3
---

```vdt
import {Menu, MenuItem} from 'kpc/components/menu';
import {Switch} from 'kpc/components/switch';

<div>
    <Menu theme={{ self.get('theme') }} type="horizontal">
        <MenuItem key="1"><i class="k-icon ion-flag"></i>menu 1</MenuItem>
        <MenuItem key="2" disabled><i class="k-icon ion-star"></i>menu 2</MenuItem>
        <MenuItem key="3">
            <i class="k-icon ion-heart"></i>menu 3
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
        <MenuItem key="4"><i class="k-icon ion-gear-b"></i>menu 4</MenuItem>
    </Menu>
    <br /><br />
    <Switch on="light" off="dark" v-model="theme" width="60" trueValue="light" falseValue="dark"/>
</div>
```

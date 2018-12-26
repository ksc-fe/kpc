---
title: 尺寸
order: 4
---

通过`size`属性，可以定义菜单的尺寸：`large` `default` `small`

```vdt
import {Menu, MenuItem} from 'kpc/components/menu';
import {Switch} from 'kpc/components/switch';
import {ButtonGroup, Button} from 'kpc/components/button';

<div>
    <Switch on="收起" off="展开" v-model="isCollapse" width="60" />
    <Switch on="light" off="dark" v-model="theme" width="60" trueValue="light" falseValue="dark"  />
    <Switch on="horizontal" off="vertical" v-model="type" width="100" trueValue="horizontal" falseValue="vertical" />
    <ButtonGroup checkType="radio" v-model="size">
        <Button value="large">large</Button>
        <Button value="default">default</Button>
        <Button value="small">small</Button>
    </ButtonGroup>
    <br /><br />
    <Menu v-model:expandedKeys="expandedKeys" 
        collapse={{ self.get('isCollapse') }}
        theme={{ self.get('theme') }}
        size={{ self.get('size') }}
        type={{ self.get('type') }}
    >
        <b:header><i class="k-icon ion-star"></i>Header</b:header>
        <MenuItem key="1"><i class="k-icon ion-flag"></i>menu 1</MenuItem>
        <MenuItem key="2" disabled dot>menu 2</MenuItem>
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
</div>
```

```styl
.k-switch
    margin-right 16px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            expandedKeys: ['3'],
            size: 'large',
        };
    }
}
```

---
title: 尺寸
order: 4
---

通过`size`属性，可以定义菜单的尺寸：`large` `default` `small`

```vdt
import {Menu, MenuItem} from 'kpc/components/menu';
import {ButtonGroup, Button} from 'kpc/components/button';
import {Icon} from 'kpc/components/icon';

<div>
    <ButtonGroup checkType="radio" v-model="size">
        <Button value="large">large</Button>
        <Button value="default">default</Button>
        <Button value="small">small</Button>
    </ButtonGroup>
    <br /><br />
    <Menu v-model:expandedKeys="expandedKeys" 
        collapse={this.get('isCollapse')}
        theme={this.get('theme')}
        size={this.get('size')}
        type={this.get('type')}
    >
        <b:header><Icon class="ion-star" />Header</b:header>
        <MenuItem key="1"><Icon class="ion-flag" />menu 1</MenuItem>
        <MenuItem key="2" disabled dot>menu 2</MenuItem>
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
</div>
```

```styl
.k-switch
    margin-right 16px
```

```ts
export default class extends Component {
    static template = template;

    static defaults() {
        return {
            expandedKeys: ['3'],
            size: 'large',
        };
    }
}
```
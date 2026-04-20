---
title: 展开收起
order: 2
---

添加`collapse`属性，可以使菜单呈现折叠状态

```vdt
import {Menu, MenuItem, MenuTitle, Switch, Icon} from 'kpc';

<div>
    <Switch v-model="collapse"
        on="收起"
        off="展开"
        width="60"
        style="margin-right: 16px;"
    />
    <Switch value={this.get('theme')}
        ev-$change:value={this.setTheme}
        on="light"
        off="dark"
        width="60"
        trueValue="light"
        falseValue="dark"
    />
    <br /><br />
    <Menu v-model:expandedKeys="expandedKeys"
        v-model:selectedKey="selectedKey"
        collapse={this.get('collapse')}
        theme={this.get('theme')}
        ref="__test"
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
        <MenuTitle><Icon class="ion-cloud" />menu 5</MenuTitle>
        <MenuItem key="5-1"><Icon class="ion-stats-bars" />sub menu 1</MenuItem>
        <MenuItem key="5-2"><Icon class="ion-upload" />sub menu 2</MenuItem>
    </Menu>
</div>
```

```ts
import {MenuProps, bind} from 'kpc';

interface Props extends MenuProps { }

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            expandedKeys: ['3'],
            selectedKey: '3-2',
            collapse: true,
            theme: 'dark' as MenuProps['theme']
        };
    }

    @bind
    setTheme(theme?: string) {
        this.set('theme', theme as MenuProps['theme']);
    }
}
```

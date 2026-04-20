---
title: 折叠按钮
order: 6
---

`showCollapseArrow`定义是否展示折叠按钮，`MenuTitle`定义菜单标题项。

```vdt
import {Menu, MenuItem, Icon, MenuTitle, Switch, ButtonGroup, Button, Divider} from 'kpc';
<div>
    <ButtonGroup checkType="radio"
        v-model="theme"
    >
        <Button value="light">light</Button>
        <Button value="dark">dark</Button>
    </ButtonGroup>
    <Switch v-model="showCollapseArrow"
        on="展示折叠按钮"
        off="隐藏折叠按钮" 
        width="110"
        trueValue={true}
        falseValue={false}
    />
    <ButtonGroup v-model="size"
        checkType="radio"
    >
        <Button value="large">large</Button>
        <Button value="default">default</Button>
        <Button value="small">small</Button>
    </ButtonGroup>
    <br /><br />
    <Menu
        v-model:expandedKeys="expandedKeys"
        v-model:selectedKey="selectedKey"
        v-model:collapse="collapse"
        theme={this.get('theme')}
        size={this.get('size')}
        showCollapseArrow={this.get('showCollapseArrow')}
    >
        <b:header>
            自定义Header
        </b:header>
        <MenuItem key="0">menu 0</MenuItem>
        <MenuTitle>title 1</MenuTitle>
        <MenuItem key="1">menu 1</MenuItem>
        <MenuItem key="2">menu 2</MenuItem>
        <MenuItem key="3">menu 3menu 3menu 3menu 3menu 3menu 3</MenuItem>
        <MenuTitle>title 2</MenuTitle>
        <MenuItem key="4">menu 1</MenuItem>
        <MenuItem key="5" disabled>menu 2</MenuItem>
        <MenuItem key="6">
            sub menu 6
            <Menu>
                <MenuItem key="6-1">sub menu 1</MenuItem>
                <MenuItem key="6-2">sub menu 2</MenuItem>
                <MenuItem key="6-3" disabled>sub menu 3</MenuItem>
                <MenuItem key="6-4">
                    sub menu 7
                    <Menu>
                        <MenuItem key="6-7-1">option 1</MenuItem>
                        <MenuItem key="6-7-2">option 2</MenuItem>
                    </Menu>
                </MenuItem>
            </Menu>
        </MenuItem>
        <Divider theme={ this.get('theme') === 'white' ? 'light' : this.get('theme')} class="divider-style"/>
        <MenuItem key="8" to="/">menu 8</MenuItem>
    </Menu>
</div>
```

```styl
.k-switch
    margin 0 16px
.divider-style
    margin 4px 0 0 0
```

```ts
import type {MenuProps} from 'kpc';

interface Props extends MenuProps { }

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            expandedKeys: [],
            selectedKey: '2',
            size: 'small' as MenuProps['size'],
            theme: 'light' as MenuProps['theme'],
            showCollapseArrow: true,
            collapse: false,
        };
    }
}
```

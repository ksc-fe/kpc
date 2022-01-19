---
title: 主题颜色 
order: 0.1
---

`Header`和`Aside`都支持单独指定主题颜色，可取值为：`dark` `light` `white`，默认为`dark`

```vdt
import {
    Layout, Header, Aside, Body, Footer,
    Menu, MenuItem,
    Icon,
    Breadcrumb, BreadcrumbItem,
    ButtonGroup, Button
} from 'kpc';

<div>
    <ButtonGroup checkType="radio" v-model="theme">
        <Button value="light">light</Button>
        <Button value="dark">dark</Button>
        <Button value="white">white</Button>
    </ButtonGroup>
    <br /><br />
    <Layout class="layout">
        <Header class="header" theme={this.get('theme')}>
            <div class="logo">LOGO</div>
            <Menu type="horizontal" theme={this.get('theme')}>
                <MenuItem key="1">menu 1</MenuItem>
                <MenuItem key="2" disabled>menu 2</MenuItem>
                <MenuItem key="3">
                    menu 3
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
                <MenuItem key="4">menu 4</MenuItem>
            </Menu>
        </Header>
        <Layout>
            <Aside theme={this.get('theme')}>
                <Menu
                    v-model:expandedKeys="expandedKeys" 
                    v-model:selectedKey="selectedKey"
                    theme={this.get('theme')}
                >
                    <MenuItem key="1">
                        <Icon class="ion-flag" />menu 1
                        <Menu>
                            <MenuItem key="1-1">sub menu 1</MenuItem>
                            <MenuItem key="1-2">sub menu 2</MenuItem>
                            <MenuItem key="1-3" disabled>sub menu 3</MenuItem>
                            <MenuItem key="1-4">sub menu 4</MenuItem>
                        </Menu>
                    </MenuItem>
                    <MenuItem key="2" disabled><Icon class="ion-star" />menu 2</MenuItem>
                    <MenuItem key="3">
                        <i class="k-icon ion-heart"></i>menu 3
                        <Menu>
                            <MenuItem key="3-1">sub menu 1</MenuItem>
                            <MenuItem key="3-2">sub menu 2</MenuItem>
                            <MenuItem key="3-3" disabled>sub menu 3</MenuItem>
                            <MenuItem key="3-4">sub menu 4</MenuItem>
                        </Menu>
                    </MenuItem>
                    <MenuItem key="4"><Icon class="ion-gear-b" />menu 4</MenuItem>
                </Menu>
            </Aside>
            <Body>
                <Breadcrumb>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Detail</BreadcrumbItem>
                </Breadcrumb>
                <div>content</div>
            </Body>
        </Layout>
    </Layout>
</div>
```

```styl
.logo
    width 160px
    height 30px
    line-height 30px
    text-align center
    background gray
    margin 0 20px
.k-breadcrumb
    margin 20px 0
```

```ts
import type {MenuProps} from 'kpc';

export default class extends Component {
    static template = template;

    static defaults() {
        return {
            expandedKeys: [],
            selectedKey: '3-1',
            theme: 'white' as MenuProps['theme'],
        };
    }
}
```

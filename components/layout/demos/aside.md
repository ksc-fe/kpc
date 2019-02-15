---
title: 侧边栏布局
order: 1
---

侧边栏布局，导航条和侧边栏为左右关系，通常需要展开收起侧边栏，给`Aside`添加`collapse`属性即可
控制侧边栏的展开收起状态。组件会自动给侧边栏下的菜单组件`Menu`应用相同的`collapse`属性

```vdt
import {Layout, Header, Aside, Body, Footer} from 'kpc/components/layout';
import {Menu, MenuItem} from 'kpc/components/menu';
import Icon from 'kpc/components/icon';
import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb';
import {Button} from 'kpc/components/button';

<Layout class="layout">
    <Aside collapse={{ self.get('collapse') }}>
        <div class="logo">LOGO</div>
        <Menu
            v-model:expandedKeys="expandedKeys" 
            v-model:selectedKey="selectedKey"
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
    <Layout>
        <Header>
            <Button type="none" size="large" style="height: 64px" ev-click={{ self._toggle }}>
                <Icon class="ion-navicon" size="30"/>
            </Button>
        </Header>
        <Body>
            <Breadcrumb>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Detail</BreadcrumbItem>
            </Breadcrumb>
            <div>content</div>
        </Body>
    </Layout>
</Layout>
```

```styl
.logo
    height 30px
    line-height 30px
    text-align center
    color #fff
    background gray
    margin 17px 20px
.k-breadcrumb
    margin 20px 0
.k-aside.k-collapsed
    .logo
        margin 17px 5px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            expandedKeys: [],
            selectedKey: '3-1',
            collapse: false,
        };
    }

    _toggle() {
        this.set('collapse', !this.get('collapse'));
    }
}
```

---
title: 上下布局
order: 0
---

1. `Layout`: 布局容器，其下可嵌套`Header` `Aside` `Body` `Footer`以及`Layout`，可以放置任何容器中
2. `Header`: 顶部导航条，只能放置`Layout`中
3. `Aside`: 侧边栏，只能放置`Layout`中
4. `Body`: 主题部分，只能放置`Layout`中
5. `Footer`: 底部容器，只能放置`Layout`中

上下布局，导航条和侧边栏为左右关系

> 布局组件采用`flex`实现，请注意[浏览器兼容性](https://caniuse.com/#search=flex)，IE需要10及以上

```vdt
import {Layout, Header, Aside, Body, Footer} from 'kpc/components/layout';
import {Menu, MenuItem} from 'kpc/components/menu';
import Icon from 'kpc/components/icon';
import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb';

<Layout class="layout">
    <Header>
        <div class="logo">LOGO</div>
        <Menu type="horizontal">
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
        <Aside>
            <Menu
                v-model:expandedKeys="expandedKeys" 
                v-model:selectedKey="selectedKey"
                theme="light"
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
```

```styl
.logo
    width 160px
    height 30px
    line-height 30px
    text-align center
    color #fff
    background gray
    float left
    margin 17px 20px
.k-breadcrumb
    margin 20px 0
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            expandedKeys: [],
            selectedKey: '3-1',
        };
    }
}
```

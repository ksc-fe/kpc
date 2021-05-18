---
title: 上下布局固定侧边栏和头部
order: 2
iframe: 400
---

给`Header`和`Aside`分别添加`fixed`属性，即可固定顶部或者侧边栏，组件会自动添加相应样式，无需手动
添加样式

```vdt
import {Layout, Header, Aside, Body, Footer} from 'kpc/components/layout';
import {Menu, MenuItem} from 'kpc/components/menu';
import Icon from 'kpc/components/icon';
import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb';

<Layout class="layout">
    <Header fixed>
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
        <Aside fixed>
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
            <div v-for={{ self.get('data') }}>content</div>
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
export default class Demo extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            expandedKeys: [],
            selectedKey: '3-1',
            data: Array.apply(null, {length: 100}),
        };
    }
}
```

```vue-data
data() {
    return {
        expandedKeys: [],
        selectedKey: '3-1',
        data: Array.apply(null, {length: 100}),
    };
}
```

```react-methods
constructor(props) {
    super(props);
    this.state = {
        expandedKeys: [],
        selectedKey: '3-1',
        data: Array.apply(null, {length: 100}),
    };
}
```

```angular-properties
private expandedKeys = [];
private selectedKey = '3-1';
private data = Array.apply(null, {length: 100});
```

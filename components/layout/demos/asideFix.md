---
title: 左右布局固定侧边栏和头部
order: 3
iframe: 400
---

给`Header`和`Aside`分别添加`fixed`属性，即可固定顶部或者侧边栏，组件会自动添加相应样式，无需手动
添加样式。另外我们可以通过给`Aside`添加`size`属性，来控制侧边栏的宽度，给属性会自动应用到子组件
`Menu`中

```vdt
import {
    Layout, Header, Aside, Body, Footer,
    Menu, MenuItem,
    Icon,
    Breadcrumb, BreadcrumbItem,
    Button,
} from 'kpc';

<Layout class="layout">
    <Aside collapse={this.get('collapse')} fixed theme="white">
        <div class="logo">LOGO</div>
        <Menu
            v-model:expandedKeys="expandedKeys" 
            v-model:selectedKey="selectedKey"
            theme="white"
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
                <Icon class="k-icon ion-heart" />menu 3
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
        <Header fixed theme="white">
            <Button type="none" size="large" style="height: 64px" ev-click={this.toggle}>
                <Icon class="ion-navicon" size="30"/>
            </Button>
        </Header>
        <Body>
            <Breadcrumb>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Detail</BreadcrumbItem>
            </Breadcrumb>
            <div v-for={this.get('data')}>content</div>
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
    transition all .25s ease-in-out
.k-breadcrumb
    margin 20px 0
.k-layout-aside.k-collapsed
    .logo
        margin 17px 5px
```

```ts
import {bind} from 'kpc';

interface Props {
    expandedKeys?: string[]
    selectedKey?: string
    collapse: boolean
    data: any[]
}

export default class Demo extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            expandedKeys: [],
            selectedKey: '3-1',
            collapse: false,
            data: Array.apply(null, {length: 100} as unknown[]),
        };
    }

    @bind
    toggle() {
        this.set('collapse', !this.get('collapse'));
    }
}
```

```angular-properties
private expandedKeys = [];
private selectedKey = '3-1';
private collapse = false;
private data = Array.apply(null, {length: 100});
```

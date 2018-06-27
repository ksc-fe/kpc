---
title: 组件尺寸
order: 3
---

通过`size`可以定义尺寸: `default` `large` `small` `mini`

```vdt
import {Tabs, Tab} from 'kpc/components/tabs';

<div>
    <Tabs size="large" value="1">
        <Tab value="1">large1</Tab>
        <Tab value="2">large2</Tab>
    </Tabs>
    <Tabs value="1">
        <Tab value="1">default1</Tab>
        <Tab value="2">defalut2</Tab>
    </Tabs>
    <Tabs size="small" value="1">
        <Tab value="1">small1</Tab>
        <Tab value="2">small2</Tab>
    </Tabs>
    <Tabs size="mini" value="1">
        <Tab value="1">mini1</Tab>
        <Tab value="2">mini2</Tab>
    </Tabs>
</div>
```

```styl
.k-tabs
    margin-bottom 10px
```

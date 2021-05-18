---
title: 头部附加内容
order: 2
---

使用`extra`扩展点，可以在头部右侧追加内容

```vdt
import Card from 'kpc/components/card';
import {Row, Col} from 'kpc/components/grid';
import {Tabs, Tab} from 'kpc/components/tabs';

<div>
    <Card title="用户信息">
        <b:extra>
            <Tabs value="1" size="small">
                <Tab value="1">数据集成</Tab>
                <Tab value="2">数据采集</Tab>
            </Tabs>
        </b:extra>
        <Row>
            <Col span="8">登录账号：test</Col>
            <Col span="8">登录账号：test</Col>
            <Col span="8">登录账号：test</Col>
            <Col span="8">登录账号：test</Col>
            <Col span="8">登录账号：test</Col>
        </Row>
    </Card>
    <Card title="用户信息" type="border">
        <b:extra>
            <Tabs value="1" size="small">
                <Tab value="1">数据集成</Tab>
                <Tab value="2">数据采集</Tab>
            </Tabs>
        </b:extra>
        <Row>
            <Col span="8">登录账号：test</Col>
            <Col span="8">登录账号：test</Col>
            <Col span="8">登录账号：test</Col>
            <Col span="8">登录账号：test</Col>
            <Col span="8">登录账号：test</Col>
        </Row>
    </Card>
</div>
```

```styl
.k-card
    margin-bottom 16px
    .k-tabs
        border none
    &.k-border
        .k-tabs
            height 48px
            line-height 46px
```

---
title: 基础用法 
order: 0
---

```vdt
import Card from 'kpc/components/card';
import {Row, Col} from 'kpc/components/grid';

<div>
    <Card title="用户信息">
        <Row>
            <Col span="8">登录账号：test</Col>
            <Col span="8">登录账号：test</Col>
            <Col span="8">登录账号：test</Col>
            <Col span="8">登录账号：test</Col>
            <Col span="8">登录账号：test</Col>
        </Row>
    </Card>
    <Card title="用户信息" border shadow={{ false }}>
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
```

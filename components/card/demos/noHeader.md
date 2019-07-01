---
title: 无头部
order: 1
---

```vdt
import Card from 'kpc/components/card';
import {Row, Col} from 'kpc/components/grid';

<div>
    <Card>
        <Row>
            <Col span="8">登录账号：test</Col>
            <Col span="8">登录账号：test</Col>
            <Col span="8">登录账号：test</Col>
            <Col span="8">登录账号：test</Col>
            <Col span="8">登录账号：test</Col>
        </Row>
    </Card>
    <Card border shadow={{ false }}>
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

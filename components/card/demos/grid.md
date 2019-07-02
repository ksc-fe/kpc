---
title: 分栏卡片
order: 3
---

使用`CardColumn`组件将`Card`分成若干栏，每栏可以通过`width`（需要指定单位）单独定义宽度，未定义的栏平分剩余宽度；
另外你可以通过`center`属性来指定该栏内容是否居中展示

```vdt
import {Card, CardColumn} from 'kpc/components/card';
import Icon from 'kpc/components/icon';
import {Row, Col} from 'kpc/components/grid';

<div>
    <Row gutter="16">
        <Col span="6">
            <Card>
                <CardColumn width="60px" center>
                    <Icon class="ion-person" size="large"/>
                </CardColumn>
                <CardColumn>用户名：test</CardColumn>
            </Card>
        </Col>
        <Col span="6">
            <Card>
                <CardColumn width="60px" center>
                    <Icon class="ion-person" size="large"/>
                </CardColumn>
                <CardColumn>用户名：test</CardColumn>
            </Card>
        </Col>
        <Col span="6">
            <Card>
                <CardColumn width="60px" center>
                    <Icon class="ion-person" size="large"/>
                </CardColumn>
                <CardColumn>用户名：test</CardColumn>
            </Card>
        </Col>
        <Col span="6">
            <Card>
                <CardColumn width="60px" center>
                    <Icon class="ion-person" size="large"/>
                </CardColumn>
                <CardColumn>用户名：test</CardColumn>
            </Card>
        </Col>
    </Row>
    <Row gutter="16">
        <Col span="6">
            <Card type="border">
                <CardColumn width="60px" center>
                    <Icon class="ion-person" size="large"/>
                </CardColumn>
                <CardColumn>用户名：test</CardColumn>
            </Card>
        </Col>
        <Col span="6">
            <Card type="border">
                <CardColumn width="60px" center>
                    <Icon class="ion-person" size="large"/>
                </CardColumn>
                <CardColumn>用户名：test</CardColumn>
            </Card>
        </Col>
        <Col span="6">
            <Card type="border">
                <CardColumn width="60px" center>
                    <Icon class="ion-person" size="large"/>
                </CardColumn>
                <CardColumn>用户名：test</CardColumn>
            </Card>
        </Col>
        <Col span="6">
            <Card type="border">
                <CardColumn width="60px" center>
                    <Icon class="ion-person" size="large"/>
                </CardColumn>
                <CardColumn>用户名：test</CardColumn>
            </Card>
        </Col>

    </Row>
</div>
```

```styl
.k-row
    margin-bottom 16px
```

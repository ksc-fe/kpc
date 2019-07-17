import React from 'react';
import Card from 'kpc/components/card';
import {Row, Col} from 'kpc/components/grid';
import {Tabs, Tab} from 'kpc/components/tabs';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Card title="用户信息"
                    b-extra={<React.Fragment>
                        <Tabs value="1" size="small">
                            <Tab value="1">数据集成</Tab>
                            <Tab value="2">数据采集</Tab>
                        </Tabs>
                    </React.Fragment>}
                >
                    <Row>
                        <Col span="8">登录账号：test</Col>
                        <Col span="8">登录账号：test</Col>
                        <Col span="8">登录账号：test</Col>
                        <Col span="8">登录账号：test</Col>
                        <Col span="8">登录账号：test</Col>
                    </Row>
                </Card>
                <Card title="用户信息" type="border"
                    b-extra={<React.Fragment>
                        <Tabs value="1" size="small">
                            <Tab value="1">数据集成</Tab>
                            <Tab value="2">数据采集</Tab>
                        </Tabs>
                    </React.Fragment>}
                >
                    <Row>
                        <Col span="8">登录账号：test</Col>
                        <Col span="8">登录账号：test</Col>
                        <Col span="8">登录账号：test</Col>
                        <Col span="8">登录账号：test</Col>
                        <Col span="8">登录账号：test</Col>
                    </Row>
                </Card>
            </div>
        )
    }
}
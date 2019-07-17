import React from 'react';
import Card from 'kpc/components/card';
import {Row, Col} from 'kpc/components/grid';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
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
                <Card title="用户信息" type="border">
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
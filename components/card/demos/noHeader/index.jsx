import React from 'react';
import Card from 'kpc-react/components/card';
import {Row, Col} from 'kpc-react/components/grid';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
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
                <Card type="border">
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
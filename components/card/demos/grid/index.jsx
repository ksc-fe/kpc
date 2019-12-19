import React from 'react';
import {Card, CardColumn} from 'kpc-react/components/card';
import Icon from 'kpc-react/components/icon';
import {Row, Col} from 'kpc-react/components/grid';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Row gutter="16">
                    <Col span="6">
                        <Card>
                            <CardColumn width="60px" center>
                                <Icon className="ion-person" size="large"/>
                            </CardColumn>
                            <CardColumn>用户名：test</CardColumn>
                        </Card>
                    </Col>
                    <Col span="6">
                        <Card>
                            <CardColumn width="60px" center>
                                <Icon className="ion-person" size="large"/>
                            </CardColumn>
                            <CardColumn>用户名：test</CardColumn>
                        </Card>
                    </Col>
                    <Col span="6">
                        <Card>
                            <CardColumn width="60px" center>
                                <Icon className="ion-person" size="large"/>
                            </CardColumn>
                            <CardColumn>用户名：test</CardColumn>
                        </Card>
                    </Col>
                    <Col span="6">
                        <Card>
                            <CardColumn width="60px" center>
                                <Icon className="ion-person" size="large"/>
                            </CardColumn>
                            <CardColumn>用户名：test</CardColumn>
                        </Card>
                    </Col>
                </Row>
                <Row gutter="16">
                    <Col span="6">
                        <Card type="border">
                            <CardColumn width="60px" center>
                                <Icon className="ion-person" size="large"/>
                            </CardColumn>
                            <CardColumn>用户名：test</CardColumn>
                        </Card>
                    </Col>
                    <Col span="6">
                        <Card type="border">
                            <CardColumn width="60px" center>
                                <Icon className="ion-person" size="large"/>
                            </CardColumn>
                            <CardColumn>用户名：test</CardColumn>
                        </Card>
                    </Col>
                    <Col span="6">
                        <Card type="border">
                            <CardColumn width="60px" center>
                                <Icon className="ion-person" size="large"/>
                            </CardColumn>
                            <CardColumn>用户名：test</CardColumn>
                        </Card>
                    </Col>
                    <Col span="6">
                        <Card type="border">
                            <CardColumn width="60px" center>
                                <Icon className="ion-person" size="large"/>
                            </CardColumn>
                            <CardColumn>用户名：test</CardColumn>
                        </Card>
                    </Col>
            
                </Row>
            </div>
        )
    }
}
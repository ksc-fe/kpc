import React from 'react';
import {Row, Col} from 'kpc/components/grid';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Row className="no-gutter"> 
                    <Col span="6" offset="6">col-6 offset-6</Col>
                    <Col span="6" offset="6">col-6 offset-6</Col>
                </Row>
                <Row gutter="16" className="gutter">
                    <Col span="6" offset="6">col-6 gutter-16 offset-6</Col>
                    <Col span="6" offset="6">col-6 gutter-16 offset-6</Col>
                </Row>
            </div>
        )
    }
}
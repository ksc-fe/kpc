import React from 'react';
import {Row, Col} from 'kpc-react/components/grid';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <Row> 
                <Col span="6" order="4">1 col-6 order-4</Col>
                <Col span="6" order="3">2 col-6 order-3</Col>
                <Col span="6" order="2">3 col-6 order-2</Col>
                <Col span="6" order="1">4 col-6 order-1</Col>
            </Row>
        )
    }
}
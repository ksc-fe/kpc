import React from 'react';
import {Row, Col} from 'kpc/components/grid';

export default class extends React.Component {
    render() {
        return (
            <Row> 
                <Col span="18" push="6">1 col-18 push-6</Col>
                <Col span="6" pull="18">2 col-6 push-18</Col>
            </Row>
        )
    }
}
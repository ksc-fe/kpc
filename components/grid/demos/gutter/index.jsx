import React from 'react';
import {Row, Col} from 'kpc-react/components/grid';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Row gutter="16"> 
                    <Col span="12"><div>col-12</div></Col>
                    <Col span="12"><div>col-12</div></Col>
                </Row>
                <Row gutter={{lg: 16, md: 4}}>
                    <Col span="4"><div>col-4</div></Col>
                    <Col span="6"><div>col-6</div></Col>
                    <Col span="8"><div>col-8</div></Col>
                    <Col span="6"><div>col-6</div></Col>
                </Row>
            </div>
        )
    }
}
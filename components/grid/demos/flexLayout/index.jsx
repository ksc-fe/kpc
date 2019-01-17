import React from 'react';
import {Row, Col} from 'kpc/components/grid';

export default class extends React.Component {
    render() {
        return (
            <div>
                <h5>居左 start</h5>
                <Row justify="start"> 
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                </Row>
                <h5>居右 end</h5>
                <Row justify="end"> 
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                </Row>
                <h5>居中 center</h5>
                <Row justify="center"> 
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                </Row>
                <h5>平均分布，顶边 between</h5>
                <Row justify="between"> 
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                </Row>
                <h5>平均分布，与边界的距离是两个子元素的一半 around</h5>
                <Row justify="around"> 
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                </Row>
                <h5>平均分布，间距（包括边界）相等 evenly</h5>
                <Row justify="evenly"> 
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                </Row>
            </div>
        )
    }
}
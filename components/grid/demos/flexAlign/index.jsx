import React from 'react';
import {Row, Col} from 'kpc/components/grid';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <h5>顶端对齐 top</h5>
                <Row align="top" justify="center"> 
                    <Col span="4" style={{"height":"100px"}}>col-4</Col>
                    <Col span="4" style={{"height":"60px"}}>col-4</Col>
                    <Col span="4" style={{"height":"80px"}}>col-4</Col>
                    <Col span="4" style={{"height":"40px"}}>col-4</Col>
                </Row>
                <h5>底部对齐 bottom</h5>
                <Row align="bottom" justify="center"> 
                    <Col span="4" style={{"height":"100px"}}>col-4</Col>
                    <Col span="4" style={{"height":"60px"}}>col-4</Col>
                    <Col span="4" style={{"height":"80px"}}>col-4</Col>
                    <Col span="4" style={{"height":"40px"}}>col-4</Col>
                </Row>
                <h5>居中对齐 middle</h5>
                <Row align="middle" justify="center"> 
                    <Col span="4" style={{"height":"100px"}}>col-4</Col>
                    <Col span="4" style={{"height":"60px"}}>col-4</Col>
                    <Col span="4" style={{"height":"80px"}}>col-4</Col>
                    <Col span="4" style={{"height":"40px"}}>col-4</Col>
                </Row>
                <h5>撑开成容器高度 stretch</h5>
                <Row align="stretch" justify="center" style={{"height":"100px"}}> 
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                    <Col span="4">col-4</Col>
                </Row>
                <h5>基线对齐 baseline</h5>
                <Row align="baseline" justify="center"> 
                    <Col span="4" style={{"height":"100px","fontSize":"20px"}}>col-4</Col>
                    <Col span="4" style={{"height":"60px","fontSize":"16px"}}>col-4</Col>
                    <Col span="4" style={{"height":"80px","fontSize":"28px"}}>col-4</Col>
                    <Col span="4" style={{"height":"40px","fontSize":"12px"}}>col-4</Col>
                </Row>
            </div>
        )
    }
}
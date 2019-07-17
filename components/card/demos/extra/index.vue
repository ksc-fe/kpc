<template>
    <div>
        <Card title="用户信息">
            <template slot="extra">
                <Tabs value="1" size="small">
                    <Tab value="1">数据集成</Tab>
                    <Tab value="2">数据采集</Tab>
                </Tabs>
            </template>
            <Row>
                <Col span="8">登录账号：test</Col>
                <Col span="8">登录账号：test</Col>
                <Col span="8">登录账号：test</Col>
                <Col span="8">登录账号：test</Col>
                <Col span="8">登录账号：test</Col>
            </Row>
        </Card>
        <Card title="用户信息" type="border">
            <template slot="extra">
                <Tabs value="1" size="small">
                    <Tab value="1">数据集成</Tab>
                    <Tab value="2">数据采集</Tab>
                </Tabs>
            </template>
            <Row>
                <Col span="8">登录账号：test</Col>
                <Col span="8">登录账号：test</Col>
                <Col span="8">登录账号：test</Col>
                <Col span="8">登录账号：test</Col>
                <Col span="8">登录账号：test</Col>
            </Row>
        </Card>
    </div>
</template>
<script>
import Card from 'kpc/components/card';
import {Row, Col} from 'kpc/components/grid';
import {Tabs, Tab} from 'kpc/components/tabs';

export default {
    components: {
        Card, Row, Col, Tabs, Tab
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
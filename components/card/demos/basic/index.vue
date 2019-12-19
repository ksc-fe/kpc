<template>
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
</template>
<script>
import Card from 'kpc-vue/components/card';
import {Row, Col} from 'kpc-vue/components/grid';

export default {
    components: {
        Card, Row, Col
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
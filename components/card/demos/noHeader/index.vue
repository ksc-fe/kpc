<template>
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
</template>
<script>
import Card from 'kpc/components/card';
import {Row, Col} from 'kpc/components/grid';

export default {
    components: {
        Card, Row, Col
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
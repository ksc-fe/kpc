<template>
    <div>
        <Row gutter="16">
            <Col span="6">
                <Card>
                    <CardColumn width="60px" center>
                        <Icon class="ion-person" size="large"/>
                    </CardColumn>
                    <CardColumn>用户名：test</CardColumn>
                </Card>
            </Col>
            <Col span="6">
                <Card>
                    <CardColumn width="60px" center>
                        <Icon class="ion-person" size="large"/>
                    </CardColumn>
                    <CardColumn>用户名：test</CardColumn>
                </Card>
            </Col>
            <Col span="6">
                <Card>
                    <CardColumn width="60px" center>
                        <Icon class="ion-person" size="large"/>
                    </CardColumn>
                    <CardColumn>用户名：test</CardColumn>
                </Card>
            </Col>
            <Col span="6">
                <Card>
                    <CardColumn width="60px" center>
                        <Icon class="ion-person" size="large"/>
                    </CardColumn>
                    <CardColumn>用户名：test</CardColumn>
                </Card>
            </Col>
        </Row>
        <Row gutter="16">
            <Col span="6">
                <Card type="border">
                    <CardColumn width="60px" center>
                        <Icon class="ion-person" size="large"/>
                    </CardColumn>
                    <CardColumn>用户名：test</CardColumn>
                </Card>
            </Col>
            <Col span="6">
                <Card type="border">
                    <CardColumn width="60px" center>
                        <Icon class="ion-person" size="large"/>
                    </CardColumn>
                    <CardColumn>用户名：test</CardColumn>
                </Card>
            </Col>
            <Col span="6">
                <Card type="border">
                    <CardColumn width="60px" center>
                        <Icon class="ion-person" size="large"/>
                    </CardColumn>
                    <CardColumn>用户名：test</CardColumn>
                </Card>
            </Col>
            <Col span="6">
                <Card type="border">
                    <CardColumn width="60px" center>
                        <Icon class="ion-person" size="large"/>
                    </CardColumn>
                    <CardColumn>用户名：test</CardColumn>
                </Card>
            </Col>
    
        </Row>
    </div>
</template>
<script>
import {Card, CardColumn} from 'kpc/components/card';
import Icon from 'kpc/components/icon';
import {Row, Col} from 'kpc/components/grid';

export default {
    components: {
        Card, CardColumn, Icon, Row, Col
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
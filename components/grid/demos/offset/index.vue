<template>
    <div>
        <Row class="no-gutter"> 
            <Col span="6" offset="6">col-6 offset-6</Col>
            <Col span="6" offset="6">col-6 offset-6</Col>
        </Row>
        <Row gutter="16" class="gutter">
            <Col span="6" offset="6">col-6 gutter-16 offset-6</Col>
            <Col span="6" offset="6">col-6 gutter-16 offset-6</Col>
        </Row>
    </div>
</template>
<script>
import {Row, Col} from 'kpc/components/grid';

export default {
    components: {
        Row, Col
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
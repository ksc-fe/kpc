<template>
    <Row> 
        <Col span="18" push="6">1 col-18 push-6</Col>
        <Col span="6" pull="18">2 col-6 push-18</Col>
    </Row>
</template>
<script>
import {Row, Col} from 'kpc/components/grid';

export default {
    components: {
        Row, Col
    },
}
</script>
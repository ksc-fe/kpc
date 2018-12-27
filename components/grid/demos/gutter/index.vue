<template>
    <div>
        <Row gutter="16"> 
            <Col span="12"><div>col-12</div></Col>
            <Col span="12"><div>col-12</div></Col>
        </Row>
        <Row :gutter="{lg: 16, md: 4}">
            <Col span="4"><div>col-4</div></Col>
            <Col span="6"><div>col-6</div></Col>
            <Col span="8"><div>col-8</div></Col>
            <Col span="6"><div>col-6</div></Col>
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
<template>
    <div style="margin: 20px">
        <Steps v-model="index">
            <Step title="选择配置">请选择主机的配置信息</Step>
            <Step title="选择弹性IP">请选择主机弹性IP的配置信息</Step>
            <Step title="设置VPC" />
        </Steps>
        <Steps value="1" status="error" style="margin: 20px 0;">
            <Step title="选择配置">请选择主机的配置信息</Step>
            <Step title="选择弹性IP">请选择主机弹性IP的配置信息</Step>
            <Step title="设置VPC">请选择主机对应的vpc</Step>
        </Steps>
    </div>
</template>

<script>
import {Steps, Step} from 'components/steps';

export default {
    data() {
        return {
            index: 0,
        }
    },

    components: {
        Steps, Step
    },
}
</script>

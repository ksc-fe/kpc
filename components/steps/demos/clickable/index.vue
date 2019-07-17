<template>
    <div>
        <Steps v-model="index" clickable>
            <Step title="选择配置">请选择主机的配置信息</Step>
            <Step title="选择弹性IP">请选择主机弹性IP的配置信息</Step>
            <Step title="设置VPC" />
        </Steps>
        <Button type="primary" @click="previous"
            :disabled="index === 0"
        >Previous Step</Button>
        <Button type="primary" @click="next"
            :disabled="index === 2"
        >Next Step</Button>
    </div>
</template>
<script>
import {Steps, Step} from 'kpc/components/steps';
import Button from 'kpc/components/button';

export default {
    components: {
        Steps, Step, Button
    },
    data() {
        return {
            "index": 1
        }
    },
    methods: {
        previous() {
            this.index = this.index - 1;
        },
        next() {
            this.index = this.index + 1;
        },
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
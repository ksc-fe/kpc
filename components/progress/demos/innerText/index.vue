<template>
    <div>
        <Progress percent="0" :isInnerText="true" :isOuterText="false" />
        <Progress percent="50" :isInnerText="true" :isOuterText="false" />
        <Progress percent="60" status="error" :isInnerText="true" :isOuterText="false" />
        <Progress percent="70" status="success" :isInnerText="true" :isOuterText="false" />
    </div>
</template>
<script>
import Progress from 'kpc-vue/components/progress';

export default {
    components: {
        Progress
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
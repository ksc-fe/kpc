<template>
    <div>
        <Progress percent="50" />
        <Progress percent="50" status="normal" />
        <Progress percent="50" status="warning" />
        <Progress percent="50" status="error" />
        <Progress percent="50" status="success" />
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
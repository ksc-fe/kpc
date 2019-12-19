<template>
    <div>
        <Progress percent="50" />
        <Progress percent="50" size="small" />
        <Progress percent="50" size="mini" />
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
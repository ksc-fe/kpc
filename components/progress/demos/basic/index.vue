<template>
    <div>
        <Progress percent="50" />
        <Progress percent="100" />
    </div>
</template>
<script>
import Progress from 'kpc/components/progress';

export default {
    components: {
        Progress
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
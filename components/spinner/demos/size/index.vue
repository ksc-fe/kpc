<template>
    <div>
        <Spinner size="large" />
        <Spinner />
        <Spinner size="small" />
        <Spinner size="mini" />
    </div>
</template>
<script>
import Spinner from 'kpc/components/spinner';

export default {
    components: {
        Spinner
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
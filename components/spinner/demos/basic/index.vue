<template>
    <div>
        <Spinner v-model="value" />
        <Spinner disabled />
    </div>
</template>
<script>
import Spinner from 'kpc-vue/components/spinner';

export default {
    components: {
        Spinner
    },
    data() {
        return {
            "value": null
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
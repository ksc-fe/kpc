<template>
    <div>
        <Tip v-for="(value, key) in ['default', 'primary', 'success', 'warning', 'danger']"
            :key="value"
            :type="value"
            closable
        >
            <template slot="title">{{ value }}</template>
            This is a {{ value }} tip.
        </Tip>
    </div>
</template>
<script>
import Tip from 'kpc-vue/components/tip';

export default {
    components: {
        Tip
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
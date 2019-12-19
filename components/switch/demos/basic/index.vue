<template>
    <div>
        <KSwitch v-model="value" />
        <KSwitch disabled />
    </div>
</template>
<script>
import {Switch as KSwitch} from 'kpc-vue/components/switch';

export default {
    components: {
        KSwitch
    },
    data() {
        return {
            "value": null
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
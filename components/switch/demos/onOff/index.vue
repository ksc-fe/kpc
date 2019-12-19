<template>
    <div>
        <KSwitch on="开" off="关" />
        <KSwitch :value="true">
            <template slot="on"><i class="ion-ios-checkmark-empty"></i></template>
            <template slot="off"><i class="ion-ios-close-empty"></i></template>
        </KSwitch>
    </div>
</template>
<script>
import {Switch as KSwitch} from 'kpc-vue/components/switch';

export default {
    components: {
        KSwitch
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
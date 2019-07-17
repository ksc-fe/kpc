<template>
    <div>
        <KSwitch on="开启" off="关闭" width="62" />
        <KSwitch height="22" />
        <KSwitch on="开启" off="关闭" width="100" height="30" />
    </div>
</template>
<script>
import {Switch as KSwitch} from 'kpc/components/switch';

export default {
    components: {
        KSwitch
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
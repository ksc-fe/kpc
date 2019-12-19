<template>
    <div>
        <Spin v-for="(value, key) in ['large', 'default', 'small', 'mini']"
            :size="value"
        />
    </div>
</template>
<script>
import Spin from 'kpc-vue/components/spin';

export default {
    components: {
        Spin
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
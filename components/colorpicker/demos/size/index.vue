<template>
    <div>
        <Colorpicker v-for="(value, key) in ['large', 'default', 'small', 'mini']"
            :size="value"
            value="#36acef"
        />
    </div>
</template>
<script>
import Colorpicker from 'kpc-vue/components/colorpicker';

export default {
    components: {
        Colorpicker
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
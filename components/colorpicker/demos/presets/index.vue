<template>
    <div>
        <Colorpicker v-model="color1"
            :presets="['transparent', 'red', '#d99123', 'rgb(255, 51, 33)', 'hsl(126, 54%, 46%)']"
        />
        <Colorpicker v-model="color2"
            :presets="[]"
        />
    </div>
</template>
<script>
import Colorpicker from 'kpc-vue/components/colorpicker';

export default {
    components: {
        Colorpicker
    },
    data() {
        return {
            "color1": "#36acef",
            "color2": "#d99123"
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
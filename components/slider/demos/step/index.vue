<template>
    <div>
        <Slider v-model="value1" :step="5" :isShowEnd="false" />
        <Slider v-model="value2" :min="50" :max="500" :step="0.1" />
        <Slider :value="0.234234" :max="1" :step="0" />
    </div>
</template>
<script>
import Slider from 'kpc-vue/components/slider';

export default {
    components: {
        Slider
    },
    data() {
        return {
            "value1": null,
            "value2": null
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
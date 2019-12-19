<template>
    <div>
        <Slider disabled :value="50" />
        <Slider disabled isRange :value="[55, 80]" :min="50" :max="100" />
    </div>
</template>
<script>
import Slider from 'kpc-vue/components/slider';

export default {
    components: {
        Slider
    },
}
</script>
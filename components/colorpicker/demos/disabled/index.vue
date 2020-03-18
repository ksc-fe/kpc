<template>
    <Colorpicker v-model="color" disabled />
</template>
<script>
import Colorpicker from 'kpc-vue/components/colorpicker';

export default {
    components: {
        Colorpicker
    },
    data() {
        return {
            "color": "#d99123"
        }
    },
}
</script>
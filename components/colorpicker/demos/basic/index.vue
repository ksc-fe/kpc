<template>
    <div>
        <Colorpicker v-model="color" />
        <span :style="{color: color, marginLeft: '10px', verticalAlign: 'middle'}">
            Hello, Colorpicker!
        </span>
    </div>
</template>
<script>
import Colorpicker from 'kpc/components/colorpicker';

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
<template>
    <Slider isRange v-model="values" />
</template>
<script>
import Slider from 'kpc/components/slider';

export default {
    components: {
        Slider
    },
    data() {
        return {
            "values": [
                50,
                76
            ]
        }
    },
}
</script>
<template>
    <Rate v-model="value" clearable />
</template>
<script>
import Rate from 'kpc-vue/components/rate';

export default {
    components: {
        Rate
    },
    data() {
        return {
            "value": 2
        }
    },
}
</script>
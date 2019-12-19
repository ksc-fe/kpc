<template>
    <div>
        <Rate v-model="value1" />
        <br />
        <Rate v-model="value2" half />
    </div>
</template>
<script>
import Rate from 'kpc-vue/components/rate';

export default {
    components: {
        Rate
    },
    data() {
        return {
            "value1": 2,
            "value2": 2.5
        }
    },
}
</script>
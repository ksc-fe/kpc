<template>
    <Datepicker clearable v-model="date"/>
</template>
<script>
import Datepicker from 'kpc-vue/components/datepicker';

export default {
    components: {
        Datepicker
    },
    data() {
        return {
            "date": null
        }
    },
}
</script>
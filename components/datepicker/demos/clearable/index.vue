<template>
    <Datepicker clearable v-model="date"/>
</template>
<script>
import Datepicker from 'kpc/components/datepicker';

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
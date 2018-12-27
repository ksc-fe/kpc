<template>
    <div>
        <Datepicker v-model="date" ref="__demo"/>
        <Datepicker disabled value="2018-01-01"/>
    </div>
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
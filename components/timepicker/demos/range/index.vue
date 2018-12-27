<template>
    <div>
        <Timepicker v-model="time" range clearable />
        You selected: {{ stringify(time) }}
    </div>
</template>
<script>
import Timepicker from 'kpc/components/timepicker';

export default {
    components: {
        Timepicker
    },
    data() {
        return {
            "time": null
        }
    },
    methods: {
        stringify(data) { return JSON.stringify(data); },
    },
}
</script>
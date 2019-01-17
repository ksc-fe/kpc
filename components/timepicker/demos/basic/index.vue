<template>
    <div>
        <Timepicker v-model="time" min="01:34:56" max="15:02:59" />
        You selected: {{ time }}
        <br /><br />
        <Timepicker v-model="timeArray" multiple />
        You selected: {{ stringify(timeArray) }}
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
            "time": null,
            "timeArray": null
        }
    },
    methods: {
        stringify(data) { return JSON.stringify(data); },
    },
}
</script>
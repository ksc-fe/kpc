<template>
    <div>
        <Timepicker 
            v-model="time1"
            min="01:34 am"
            max="03:02 pm" 
            format="hh:mm a"
        />
        <span>You selected: {{ time1 }}</span>
        <br /><br />
        <Timepicker v-model="time2"
            step="00:30:00"
            showFormat="HH:mm"
        />
        <span>You selected: {{ time2 }}</span>
        <br /><br />
        <Timepicker
            v-model="time3"
            step="00:30:00"
            range 
            clearable
            valueFormat="HH:mm:ss.SSS"
            showFormat="HH:mm"
        />
        <span>You selected: {{ stringify(time3) }}</span>
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
            "time1": null,
            "time2": null,
            "time3": null
        }
    },
    methods: {
        stringify(data) { return JSON.stringify(data); },
    },
}
</script>
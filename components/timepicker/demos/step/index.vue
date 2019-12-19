<template>
    <div>
        <Timepicker class="time" v-model="time" step="00:30:00"/>
        You selected: {{ stringify(time) }}
        <br /><br />
        <Timepicker v-model="timeArray" multiple clearable
            step="00:30:00" 
            min="09:00:00"
            max="18:00:00"
        />
        You selected: {{ stringify(timeArray) }}
    </div>
</template>
<script>
import Timepicker from 'kpc-vue/components/timepicker';

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
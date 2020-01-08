<template>
    <div>
        <Datepicker range v-model="date" clearable />
        You selected: {{ stringify(date) }}
        <br /><br />
        <Datepicker range type="datetime" v-model="time" clearable />
        You selected: {{ stringify(time) }}
    </div>
</template>
<script>
import Datepicker from 'kpc-vue/components/datepicker';

export default {
    components: {
        Datepicker
    },
    data() {
        return {
            "date": null,
            "time": null
        }
    },
    methods: {
        stringify(data) { return JSON.stringify(data); },
    },
}
</script>
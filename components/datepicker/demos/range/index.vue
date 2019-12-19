<template>
    <div>
        <Datepicker range v-model="date" />
        You selected: {{ stringify(date) }}
        <br /><br />
        <Datepicker range type="datetime" v-model="time" />
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
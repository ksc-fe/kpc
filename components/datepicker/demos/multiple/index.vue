<template>
    <div>
        <Datepicker multiple v-model="date" clearable />
        You selected: {{ stringify(date) }}
        <br /><br />
        <Datepicker multiple v-model="datetime" type="datetime" />
        You selected: {{ stringify(datetime) }}
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
            "datetime": null
        }
    },
    methods: {
        stringify(data) { return JSON.stringify(data); },
    },
}
</script>
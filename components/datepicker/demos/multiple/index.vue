<template>
    <div>
        <Datepicker multiple v-model="date" />
        You selected: {{ stringify(date) }}
        <br /><br />
        <Datepicker multiple v-model="datetime" type="datetime" />
        You selected: {{ stringify(datetime) }}
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
            "date": null,
            "datetime": null
        }
    },
    methods: {
        stringify(data) { return JSON.stringify(data); },
    },
}
</script>
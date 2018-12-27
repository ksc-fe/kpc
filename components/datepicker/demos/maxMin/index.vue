<template>
    <div>
        <Datepicker v-model="from" placeholder="开始日期"
            :maxDate="to"
            :minDate="new Date()"
        /> ~
        <Datepicker v-model="to" placeholder="结束日期"
            :minDate="from"
        />
        <br />
        <br />
        <Datepicker v-model="fromTime" placeholder="开始时间"
            type="datetime"
            :maxDate="toTime || new Date()"
        /> ~
        <Datepicker v-model="toTime" placeholder="结束时间"
            type="datetime"
            :minDate="fromTime"
            :maxDate="new Date()"
        />
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
            "to": null,
            "from": null,
            "toTime": null,
            "fromTime": null
        }
    },
}
</script>
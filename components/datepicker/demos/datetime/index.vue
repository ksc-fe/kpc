<template>
    <div>
        <Datepicker type="datetime" v-model="datetime1" />
        <Datepicker type="datetime" v-model="datetime2" 
            placeholder="时间精确到小时"
            disabledMinutes
            disabledSeconds
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
            "datetime1": null,
            "datetime2": null
        }
    },
}
</script>
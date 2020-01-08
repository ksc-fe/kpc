<template>
    <div>
        <Datepicker type="datetime" v-model="datetime1" clearable />
        <Datepicker type="datetime" v-model="datetime2" 
            placeholder="时间精确到小时"
            disabledMinutes
            disabledSeconds
        />
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
            "datetime1": null,
            "datetime2": null
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
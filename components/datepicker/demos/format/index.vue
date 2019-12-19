<template>
    <div>
        <div>
            <Datepicker v-model="date1" format="MM/DD/YYYY" />
            value: {{ date1 }}
        </div>
        <div>
            <Datepicker v-model="date2" showFormat="YYYY年M月D日"/>
            value: {{ date2 }}
        </div>
        <div>
            <Datepicker type="datetime" v-model="date3" valueFormat="YYYY-MM-DDTHH:mm:ss.SSS[Z]"/>
            value: {{ date3 }}
        </div>
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
            "date1": null,
            "date2": null,
            "date3": null
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
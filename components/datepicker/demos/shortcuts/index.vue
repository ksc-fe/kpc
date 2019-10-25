<template>
    <div>
        <Datepicker v-model="date" :shortcuts="[
            Datepicker.yesterday,
            Datepicker.today,
            Datepicker.tomorrow,
            Datepicker.afterOneWeek,
            Datepicker.afterOneMonth,
            Datepicker.afterThreeMonths,
            Datepicker.beforeOneWeek,
            Datepicker.beforeOneMonth,
            Datepicker.beforeThreeMonths
        ]"/>
        <Datepicker range type="datetime" 
            :shortcuts="[
                Datepicker.lastWeek,
                Datepicker.lastMonth,
                Datepicker.lastThreeMonths,
                Datepicker.nextWeek,
                Datepicker.nextMonth,
                Datepicker.nextThreeMonths
            ]"
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
            date: null,
            Datepicker,
        };
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
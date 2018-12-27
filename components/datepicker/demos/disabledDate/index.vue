<template>
    <Datepicker :disabledDate="(date) => {
        // 禁用掉2018-02-05和2018-03-05
        return ~['2018-02-05', '2018-03-05'].indexOf(date);
    }" />
</template>
<script>
import Datepicker from 'kpc/components/datepicker';

export default {
    components: {
        Datepicker
    },
}
</script>
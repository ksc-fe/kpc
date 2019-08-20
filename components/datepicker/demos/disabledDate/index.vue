<template>
    <Datepicker :disabledDate="(date, dateObject) => {
        // 禁用掉每月的5号和15号
        const d = dateObject.date();
        return d === 5 || d === 15;
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
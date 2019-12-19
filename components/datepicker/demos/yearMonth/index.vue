<template>
    <div>
        <Datepicker type="year" v-model="year" />
        <Datepicker type="month" v-model="month" clearable />
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
            "year": null,
            "month": null
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
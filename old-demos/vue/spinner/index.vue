<template>
    <div>
        <Spinner :value="6" :max="10" :min="-10"></Spinner>
        <br/>
        <Spinner disabled></Spinner>
        <br/>
        <Spinner :value="4"></Spinner>
        <br/>
        <Spinner v-model="rangeValue" :max="15" :min="1"></Spinner>
        <span>{{ "当前值： " + rangeValue }}</span>
    </div>
</template>

<script>
import Spinner from 'components/spinner';

export default {
    data() {
        return {
            rangeValue: 8
        }
    },

    components: {
        Spinner
    },
}
</script>

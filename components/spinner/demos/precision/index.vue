<template>
    <div>
        <Spinner v-model="value1"
            :max="10"
            :min="0"
            :precision="0"
        />
        <Spinner v-model="value2"
            :max="10"
            :min="-10" 
            :step="0.1"
            :precision="1"
        />
    </div>
</template>
<script>
import Spinner from 'kpc-vue/components/spinner';

export default {
    components: {
        Spinner
    },
    data() {
        return {
            "value1": null,
            "value2": null
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
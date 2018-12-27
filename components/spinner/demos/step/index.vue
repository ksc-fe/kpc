<template>
    <div>
        <Spinner v-model="value1" :max="10" :min="0" :step="1.2" />
        <Spinner v-model="value2" :max="10" :min="-10" :step="0.1" />
    </div>
</template>
<script>
import Spinner from 'kpc/components/spinner';

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
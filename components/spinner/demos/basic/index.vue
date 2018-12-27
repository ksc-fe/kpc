<template>
    <div>
        <Spinner v-model="value" />
        <Spinner disabled />
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
            "value": null
        }
    },
}
</script>
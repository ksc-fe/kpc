<template>
    <div>
        <Radio v-model="value">radio</Radio>
        <Radio disabled>disabled radio</Radio>
        <Radio :value="true" disabled>disabled checked radio</Radio>
    </div>
</template>
<script>
import Radio from 'kpc/components/radio';

export default {
    components: {
        Radio
    },
    data() {
        return {
            "value": null
        }
    },
}
</script>
<template>
    <div>
        <Tip v-for="(value, key) in ['default', 'primary', 'success', 'warning', 'danger']"
            :type="value"
        >{{ value }}</Tip>
    </div>
</template>
<script>
import Tip from 'kpc/components/tip';

export default {
    components: {
        Tip
    },
}
</script>
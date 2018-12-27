<template>
    <div>
        <Tip v-for="(value, key) in ['default', 'primary', 'success', 'warning', 'danger']"
            :key="value"
            :type="value"
            closable
        >{{ value }}</Tip>
        <Tip closable>
            custom closing content
            <template slot="close">No longer show</template>
        </Tip>
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
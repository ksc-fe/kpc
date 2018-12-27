<template>
    <div>
        <Checkbox v-model="value">checkbox</Checkbox>
        <Checkbox disabled>disabled checkbox</Checkbox>
        <Checkbox :value="true" disabled>disabled checked checkbox</Checkbox>
    </div>
</template>
<script>
import Checkbox from 'kpc/components/checkbox';

export default {
    components: {
        Checkbox
    },
    data() {
        return {
            "value": null
        }
    },
}
</script>
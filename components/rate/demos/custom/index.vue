<template>
    <Rate v-model="value">
        <template slot="icon"><Icon class="ion-heart" /></template>
    </Rate>
</template>
<script>
import Rate from 'kpc-vue/components/rate';
import Icon from 'kpc-vue/components/icon';

export default {
    components: {
        Rate, Icon
    },
    data() {
        return {
            "value": 2
        }
    },
}
</script>
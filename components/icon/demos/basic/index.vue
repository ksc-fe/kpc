<template>
    <div>
        <Icon v-for="(value, key) in ['36', 'large', 'default', 'small', 'mini']"
             class="ion-happy-outline" 
             :size="value"
        />
    </div>
</template>
<script>
import Icon from 'kpc/components/icon';

export default {
    components: {
        Icon
    },
}
</script>
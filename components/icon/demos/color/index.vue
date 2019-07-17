<template>
    <div>
        <Icon 
            v-for="(value, key) in ['default', 'primary', 'warning', 'danger', 'success', 'red', '#0000ea', 'rgb(183, 18, 193)']"
            class="ion-happy-outline" 
            size="large"
            :color="value"
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
<style lang="stylus" src="./index.styl"></style>
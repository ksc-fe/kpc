<template>
    <div>
        <Button size="large">large</Button>
        <Button>default</Button>
        <Button size="small">small</Button>
        <Button size="mini">mini</Button>
        <br /><br />
        <Button icon circle size="large"><Icon class="ion-ios-search" size="large" /></Button>
        <Button icon circle><Icon class="ion-ios-search" /></Button>
        <Button icon circle size="small"><Icon class="ion-ios-search" size="small" /></Button>
        <Button icon circle size="mini"><Icon class="ion-ios-search" size="mini" /></Button>
    </div>
</template>
<script>
import Button from 'kpc-vue/components/button';
import Icon from 'kpc-vue/components/icon';

export default {
    components: {
        Button, Icon
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
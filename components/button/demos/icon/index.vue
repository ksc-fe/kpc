<template>
    <div>
        <Button icon><Icon class="ion-ios-search" /></Button>
        <Button icon circle><Icon class="ion-ios-search" /></Button>
        <Button type="danger" size="large" icon circle><Icon class="ion-ios-search" size="large" /></Button>
        <Button type="primary"><Icon class="ion-ios-search" size="small" />搜索</Button>
        <Button circle type='primary'><Icon class="ion-ios-search" size="small" />搜索</Button>
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
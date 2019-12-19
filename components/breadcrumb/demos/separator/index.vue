<template>
    <Breadcrumb>
        <template slot="separator">
            <b class="separator">=></b>
        </template>
        <BreadcrumbItem to="/">
            <i class="ion-home"></i> item 1
        </BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb/">
            <i class="ion-earth"></i> item 2
        </BreadcrumbItem>
        <BreadcrumbItem>
            <i class="ion-planet"></i> item 3
        </BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
import {Breadcrumb, BreadcrumbItem} from 'kpc-vue/components/breadcrumb';

export default {
    components: {
        Breadcrumb, BreadcrumbItem
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
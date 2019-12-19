<template>
    <Breadcrumb>
        <BreadcrumbItem to="#/">item 1</BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb/">item 2</BreadcrumbItem>
        <BreadcrumbItem>item 3</BreadcrumbItem>
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
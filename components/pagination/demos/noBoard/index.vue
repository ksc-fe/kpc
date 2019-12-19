<template>
    <div>
        <Pagination noBorder :total="200" size="large" />
        <Pagination noBorder :total="200" />
        <Pagination noBorder :total="200" size="small" />
        <Pagination noBorder :total="200" size="mini" />
    </div>
</template>
<script>
import Pagination from 'kpc-vue/components/pagination';

export default {
    components: {
        Pagination
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
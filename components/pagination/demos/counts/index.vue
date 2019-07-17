<template>
    <div>
        <Pagination :total="200" counts="10" />
        <Pagination :total="200" counts="9" />
    </div>
</template>
<script>
import Pagination from 'kpc/components/pagination';

export default {
    components: {
        Pagination
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
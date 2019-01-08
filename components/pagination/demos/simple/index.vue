<template>
    <div>
        <Pagination simple :total="200" size="large" />
        <Pagination simple :total="200" />
        <Pagination simple :total="200" size="small" />
        <Pagination simple :total="200" size="mini" />
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
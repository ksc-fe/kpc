<template>
    <div>
        <Pagination :total="200" showGoto />
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
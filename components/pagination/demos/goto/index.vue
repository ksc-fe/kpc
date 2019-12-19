<template>
    <div>
        <Pagination :total="200" showGoto />
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
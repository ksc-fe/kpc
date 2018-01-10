<template>
    <div>
        <Pagination 
            :total="201"
            :current="5"
            :limit="20"
            :limits="[10,20,30,40,50]"
            showGoto
        />
    </div>
</template>

<script>
import Pagination from 'components/pagination';

export default {
    components: {
        Pagination,
    },
}
</script>

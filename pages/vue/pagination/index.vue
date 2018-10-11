<template>
    <div>
        <Pagination 
            :total="201"
            :current="5"
            :limit.sync="limit"
            :limits="[10,20,30,40,50]"
            showGoto
        />
    </div>
</template>

<script>
import Pagination from 'components/pagination';

export default {
    data() {
        return {
            limit: 20
        }
    },
    components: {
        Pagination,
    },

    created() {
        window.vm = this;
    }
}
</script>

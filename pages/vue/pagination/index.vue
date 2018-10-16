<template>
    <div>
        <div v-if="show">
            <Pagination 
                :total="total"
                :current="5"
                :limit.sync="limit"
                :limits="[10,20,30,40,50]"
                showGoto
            />
        </div>
        <div v-else></div>
    </div>
</template>

<script>
import Pagination from 'components/pagination';

export default {
    data() {
        return {
            limit: 20,
            show: true,
            total: 0,
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

<template>
    <div>
        <pagination :Goto="true" :total="total" :current="current" :size="size" :opts="opts"></pagination>
    </div>
</template>

<script>
    import Pagination from 'components/pagination';

    export default {
        data() {
            return {
                total: 201,
                current: 5,
                size: 10,
                opts: [10,20,30,40,50,60],

            };
        },

        components: {
            Pagination,
        },

        methods: {

        }
    }
</script>

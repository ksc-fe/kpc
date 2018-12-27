<template>
    <div>
        <Pagination :total="200" ref="__test" @change="_onChange"/>
        <Pagination :total="200" :limit="20" />
        <Pagination :total="200" :limit="20" :limits="[10, 20, 50, 100]"/>
    </div>
</template>
<script>
import Pagination from 'kpc/components/pagination';

export default {
    components: {
        Pagination
    },
    methods: {
        _onChange(v) {
            console.log(v);
        },
    },
}
</script>
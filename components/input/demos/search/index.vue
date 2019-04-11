<template>
    <div>
        <Search @submit="_search" />
        <br />
        <Search type="line" @submit="_search" />
    </div>
</template>
<script>
import {Search} from 'kpc/components/input';


export default {
    components: {
        Search
    },
    methods: {
        _search(keywords) {
            Message.success('Search by keywords: ' + keywords);
        },
    },
}
</script>
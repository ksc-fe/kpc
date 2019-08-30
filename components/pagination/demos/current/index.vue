<template>
    <div>
        <Pagination :total="200" 
            :current="current1"
            @$change:current="_fetch1" 
        />
        <br /><br />
        <Pagination :total="200" 
            :current.sync="current2"
            :limit.sync="limit"
            @change="_fetch2"
        />
    </div>
</template>
<script>
import Pagination from 'kpc/components/pagination';

import Message from 'kpc/components/message';

export default {
    components: {
        Pagination
    },
    data() {
        return {
            "current1": 1,
            "current2": 1,
            "limit": 20
        }
    },
    methods: {
        _fetch1(c, current) {
            // fetch data
            this.current1 = current;
            Message.info(`current page: ${current}`);
        },
        _fetch2({current, limit}) {
            Message.info(`current page: ${current}, limit: ${limit}`);
        },
    },
}
</script>
<template>
    <div>
        <Pagination :total="200" 
            :current="current"
            @$change:current="_fetch" 
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
            "current": 1
        }
    },
    methods: {
        _fetch(c, current) {
            // fetch data
            this.current = current;
            Message.info(`current page: ${current}`);
        },
    },
}
</script>
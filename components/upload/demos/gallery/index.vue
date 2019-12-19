<template>
    <Upload multiple
        action="//jsonplaceholder.typicode.com/posts/"
        type="gallery"
        :limit="3"
        accept=".jpg, .png"
        @error="_onError"
    />
</template>
<script>
import Upload from 'kpc-vue/components/upload';

import Dialog from 'kpc-vue/components/dialog';
import Message from 'kpc-vue/components/message';

export default {
    components: {
        Upload
    },
    methods: {
        _onError(err) {
            Message.error(err.message);
        },
    },
}
</script>
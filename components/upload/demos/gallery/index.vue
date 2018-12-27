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
import Upload from 'kpc/components/upload';
import Dialog from 'kpc/components/dialog';
import Message from 'kpc/components/message';

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
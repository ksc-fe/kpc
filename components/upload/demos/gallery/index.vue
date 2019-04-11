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
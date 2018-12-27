<template>
    <Upload 
        ref="upload"
        multiple 
        action="//jsonplaceholder.typicode.com/posts/"
        :autoUpload="false"
    >
        <Button type="primary">选择文件</Button>
        <template slot="tip">
            <Button @click="upload">开始上传</Button>
        </template>
    </Upload>
</template>
<script>
import Upload from 'kpc/components/upload';
import Button from 'kpc/components/button';

export default {
    components: {
        Upload, Button
    },
    methods: {
        upload(e) {
            this.$refs.upload.submit();
        },
    },
}
</script>
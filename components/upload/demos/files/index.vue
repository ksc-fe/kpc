<template>
    <Upload multiple
        action="//jsonplaceholder.typicode.com/posts/"
        :defaultFiles="[
            {name: 'test1.jpg', url: 'http://www.example.com/test1.jpg'},
            {name: 'test2.png', url: 'http://www.example.com/test2.png'},
        ]"
    />
</template>
<script>
import Upload from 'kpc/components/upload';

export default {
    components: {
        Upload
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
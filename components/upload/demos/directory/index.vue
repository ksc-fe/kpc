<template>
    <Upload 
        directory
        action="//jsonplaceholder.typicode.com/posts/"
    />
</template>
<script>
import Upload from 'kpc/components/upload';
import Button from 'kpc/components/button';

export default {
    components: {
        Upload, Button
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
<template>
    <Code v-model="value" height="200px" language="javascript" />
</template>
<script>
import Code from 'kpc/components/code';

const code = `function test() {
    console.log('hello world');
}`;
export default {
    components: {
        Code
    },
    data() {
        return {
            "value": null
        }
    },
}
</script>
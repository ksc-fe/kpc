<template>
    <div ref="node">
        <Affix :top="150" :shouldFix="_shouldFix">
            <Button type="primary">fix at 150px from the top while scroll top 100px</Button>
        </Affix>
        <Affix :bottom="0" :exclude="_exclude" ref="__test">
            <Button type="primary">fix at the bottom only while this demo is in viewport</Button>
        </Affix>
    </div>
</template>
<script>
import Affix from 'kpc/components/affix';
import Button from 'kpc/components/button';

export default {
    components: {
        Affix, Button
    },
    methods: {
        _shouldFix() {
            // when scroll top greater than or equal to 100
            // fix it at 150px from top
            return window.pageYOffset >= 100;
        },
        _exclude() {
            // when this demo is not in the viewport
            // don't fix it
            const {top} = this.$refs.node.getBoundingClientRect();
            const viewport = document.documentElement.clientHeight;
        
            return top > viewport; 
        },
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
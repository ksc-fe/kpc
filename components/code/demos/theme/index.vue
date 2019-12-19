<template>
    <div>
        主题：<ButtonGroup v-model="theme" checkType="radio">
            <Button v-for="(value, key) in ['vs', 'vs-dark', 'hc-black']"
                :value="value"
            >{{ value }}</Button>
        </ButtonGroup>
        <Code v-model="value" height="200px" :theme="theme" />
    </div>
</template>
<script>
import Code from 'kpc-vue/components/code';
import {ButtonGroup, Button} from 'kpc-vue/components/button';

const code = `function test() {
    console.log('hello world');
}`;
export default {
    components: {
        Code, ButtonGroup, Button
    },
    data() {
        return {
            "theme": null,
            "value": null
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
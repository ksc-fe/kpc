<template>
    <div>
        <Button @click="click" :class="city">default</Button>
        <Button><ka><span>b</span></ka></Button>
        <k-button>test</k-button>
        <test class="test">test</test>
        <ka><span>a</span></ka>
    </div>
</template>

<style scoped>
.test {
    color: red;
}
</style>

<script>
import Button from 'components/button';
import ButtonGroup from 'components/button/group';
import Vue from 'vue';
import A from './a.vue';

Vue.component('test', {
    functional: true,
    render(h, context) {
        return [
            h('div', context.data, context.children),
            h('div', context.data, context.children),
        ]
    }
});

export default {
    data() {
        return {
            loading0: false,
            loading1: false,
            city: 'beijing',
        };
    },

    components: {
        Button,
        ButtonGroup,
        ka: A,
    },

    methods: {
        click() {
            console.log('click');
        },
        loading(name) {
            this[name] = true;
        }
    }
}
</script>

<template>
    <div>
        <Button @click="click" :class="city">default</Button>
        <Button><ka><span>b</span></ka></Button>
        <k-button>test</k-button>
        <test class="test">test</test>
        <ka><span>a</span></ka>
        <transition name="c-fade">
            <div v-if="show">hello</div>
        </transition>
    </div>
</template>

<style scoped>
.test {
    color: red;
}
</style>

<script>
import Button from 'kpc/@vue/@stylus/components/button';
import ButtonGroup from 'kpc/@vue/@stylus/components/button/group';
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
            show: true,
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
            this.show = !this.show;
        },
        loading(name) {
            this[name] = true;
        }
    }
}
</script>

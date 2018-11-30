<template>
    <div>
        <Button @click="click" :class="city">default</Button>
        <k-button>test</k-button>
        <test class="test">test</test>
    </div>
</template>

<script>
import Button from 'components/button';
import ButtonGroup from 'components/button/group';
import Vue from 'vue';

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

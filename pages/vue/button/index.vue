<template>
    <div>
        <Button @click="click" :class="city">default</Button>
        <k-button>test</k-button>
    </div>
</template>

<script>
import Button from 'components/button';
import ButtonGroup from 'components/button/group';

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

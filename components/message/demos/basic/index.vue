<template>
    <ButtonGroup>
        <Button v-for="(value, key) in ['info', 'error', 'warning', 'success']"
            @click="showMessage(value)"
        >{{ value }}</Button>
    </ButtonGroup>
</template>
<script>
import {ButtonGroup, Button} from 'kpc-vue/components/button';

import Message from 'kpc-vue/components/message';

export default {
    components: {
        ButtonGroup, Button
    },
    methods: {
        showMessage(type) {
            Message[type](type);
        },
    },
}
</script>
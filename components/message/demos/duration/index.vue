<template>
    <ButtonGroup>
        <Button @click="showMessage1">close after 10s</Button>
        <Button @click="showMessage2">stick message</Button>
    </ButtonGroup>
</template>
<script>
import {ButtonGroup, Button} from 'kpc/components/button';

import Message from 'kpc/components/message';

export default {
    components: {
        ButtonGroup, Button
    },
    methods: {
        showMessage1() {
            Message.info('close after 10s', 10000);
        },
        showMessage2() {
            Message.info('stick message', 0);
        },
    },
}
</script>
<template>
    <ButtonGroup>
        <Button v-for="(value, key) in ['info', 'error', 'warning', 'success']"
            @click="showMessage(value)"
        >{{ value }}</Button>
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
        showMessage(type) {
            Message[type]({
                content: type,
                duration: 3000,
                type: type,
                closable: false,
                hideIcon: true,
            });
        },
    },
}
</script>
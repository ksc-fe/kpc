<template>
    <ButtonGroup>
        <Button 
            v-for="(value, key) in ['success', 'warning', 'error', 'confirm']"
            @click="showDialog(value)"
        >Show {{ value[0].toUpperCase() + value.substring(1) }} Dialog</Button>
    </ButtonGroup>
</template>
<script>
import {Button, ButtonGroup} from 'kpc/components/button';

import Dialog from 'kpc/components/dialog';

export default {
    components: {
        Button, ButtonGroup
    },
    methods: {
        showDialog(type) {
            Dialog[type]({
                content: type,
            }).then(() => {
                console.log('clicked ok button');
            }, () => {
                console.log('clicked cancel button');
            });
        },
    },
}
</script>
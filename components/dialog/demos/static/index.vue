<template>
    <div>
        <ButtonGroup>
            <Button 
                v-for="(value, key) in ['success', 'warning', 'error', 'confirm']"
                @click="showDialog(value)"
            >Show {{ value[0].toUpperCase() + value.substring(1) }} Dialog</Button>
        </ButtonGroup>
        <br />
        <br />
        <ButtonGroup>
            <Button 
                v-for="(value, key) in ['success', 'warning', 'error', 'confirm']"
                @click="showDialogWithTitle(value)"
            >Show {{ value[0].toUpperCase() + value.substring(1) }} Dialog with Title</Button>
        </ButtonGroup>
    </div>
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
        showDialogWithTitle(type) {
            Dialog[type]({
                title: type[0].toUpperCase() + type.substring(1),
                content: type + ' dialog',
            }).then(() => {
                console.log('clicked ok button');
            }, () => {
                console.log('clicked cancel button');
            });
        },
    },
}
</script>
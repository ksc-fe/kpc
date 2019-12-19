<template>
    <div>
        <Button @click="set('show', true)"
            type="primary"
        >Show Dialog</Button>
        <Dialog v-model="show" title="Dialog Title"
            @ok="onOk"
            @cancel="onCancel"
        >Dialog Body</Dialog>
    </div>
</template>
<script>
import Button from 'kpc-vue/components/button';
import Dialog from 'kpc-vue/components/dialog';

import Message from 'kpc-vue/components/message';

export default {
    components: {
        Button, Dialog
    },
    data() {
        return {
            "show": null
        }
    },
    methods: {
        set(key, value) { this[key] = value },
        onOk() {
            Message.success('You clicked ok button.');
        },
        onCancel() {
            Message.error('You clicked cancel button.');
        },
    },
}
</script>
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
import Button from 'kpc/components/button';
import Dialog from 'kpc/components/dialog';
import Message from 'kpc/components/message';

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
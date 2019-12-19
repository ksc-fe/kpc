<template>
    <div>
        <Button @click="onClick" type="primary">Show Dialog</Button>
        <Dialog v-model="show" title="Dialog Title" ref="__demo" mode="hide">
            <Input />
        </Dialog>
    </div>
</template>
<script>
import Button from 'kpc-vue/components/button';
import Dialog from 'kpc-vue/components/dialog';
import Input from 'kpc-vue/components/input';

export default {
    components: {
        Button, Dialog, Input
    },
    data() {
        return {
            "show": null
        }
    },
    methods: {
        onClick() {
            this.show = true;
        },
    },
}
</script>
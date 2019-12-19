<template>
    <div>
        <Button @click="onClick" type="primary">Show Dialog</Button>
        <Dialog v-model="show" title="Dialog Title" ref="__demo">
            Dialog Body 
        </Dialog>
    </div>
</template>
<script>
import Button from 'kpc-vue/components/button';
import Dialog from 'kpc-vue/components/dialog';

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
        onClick() {
            this.show = true;
        },
    },
}
</script>
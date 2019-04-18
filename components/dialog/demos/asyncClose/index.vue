<template>
    <div>
        <Button type="primary"
            @click="set('show', true)"
        >Close Dialog Asynchronously</Button>
        <Dialog v-model="show" title="Customized ok callback"
            :ok="ok"
        >
            <Form ref="form">
                <FormItem model="code" :rules="{required: true, digits: true}" label="Code:">
                    <Input placeholder="please enter digits" v-model="code" />
                </FormItem>
            </Form>
        </Dialog>
    </div>
</template>
<script>
import Dialog from 'kpc/components/dialog';
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';
import {Button} from 'kpc/components/button';

import Message from 'kpc/components/message';

export default {
    components: {
        Dialog, Form, FormItem, Input, Button
    },
    data() {
        return {
            "show": null,
            "code": null
        }
    },
    methods: {
        set(key, value) { this[key] = value },
        async ok(dialog) {
            // validate the form firstly
            if (await this.$refs.form.validate()) {
                // make the ok button show loading
                dialog.showLoading(); 
                // mock api
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (Math.random() > 0.5) {
                            resolve();
                        } else {
                            reject();
                        }
                    }, 2000);
                }).then(() => {
                    // if success, close dialog 
                    dialog.hideLoading();
                    dialog.close();
                }, () => {
                    // if error, don't close dialog
                    dialog.hideLoading();
                    Message.error('error occured');
                });
            }
        },
    },
}
</script>
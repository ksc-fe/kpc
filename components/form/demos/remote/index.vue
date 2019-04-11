<template>
    <Form ref="form">
        <FormItem label="用户名" model="userName"
            :rules="{required: true, userName: validateUserName}"
        >
            <Input v-model="userName" />
        </FormItem>
    </Form>
</template>
<script>
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';


export default {
    components: {
        Form, FormItem, Input
    },
    data() {
        return {
            "userName": null
        }
    },
    methods: {
        validateUserName(value) {
            // mock api
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.5) {
                        reject({message: `用户名 ${value} 已被占用`});
                    } else {
                        resolve(true);
                    }
                });
            });
        },
    },
}
</script>
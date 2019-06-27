<template>
    <Form>
        <FormItem label="用户名" model="data.userName" :rules="{required: true}">
            <Input v-model="data.userName" />
        </FormItem>
    </Form>
</template>

<script>
import {Form, FormItem} from 'components/form';
import Input from 'components/input';

export default {
    components: {
        Form, FormItem, Input
    },
    
    props: {
        data: Object
    },
}
</script>

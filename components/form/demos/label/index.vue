<template>
    <Form>
        <FormItem>
            <template slot="label"><i style="color: red">*</i> 姓名</template>
            <Input />
        </FormItem>
        <FormItem>
            <template slot="label"><i class="ion-person"/> 姓名</template>
            <Input />
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
}
</script>
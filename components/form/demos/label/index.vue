<template>
    <Form starOnRequired>
        <FormItem :rules="{required: true}" label="姓名">
            <Input />
        </FormItem>
        <FormItem>
            <template slot="label"><i class="ion-person"></i> 姓名</template>
            <Input />
        </FormItem>
    </Form>
</template>
<script>
import {Form, FormItem} from 'kpc-vue/components/form';
import {Input} from 'kpc-vue/components/input';

export default {
    components: {
        Form, FormItem, Input
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
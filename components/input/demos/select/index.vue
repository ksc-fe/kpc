<template>
    <div>
        <Input width="500">
            <template slot="prepend">
                <Select v-model="protocol" width="110">
                    <Option value="http">http://</Option>
                    <Option value="https">https://</Option>
                </Select>
            </template>
            <template slot="append">
                <Select v-model="domain" width="90">
                    <Option value="com">.com</Option>
                    <Option value="cn">.cn</Option>
                    <Option value="org">.org</Option>
                </Select>
            </template>
        </Input>
    </div>
</template>
<script>
import Input from 'kpc-vue/components/input';
import {Select, Option} from 'kpc-vue/components/select';

export default {
    components: {
        Input, Select, Option
    },
    data() {
        return {
            "protocol": "http",
            "domain": "com"
        }
    },
}
</script>
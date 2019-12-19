<template>
    <Select inline>
        <Option value="default">默认主题</Option>
        <Option value="ksyun">金山云主题</Option>
    </Select>
</template>
<script>
import {Select, Option} from 'kpc-vue/components/select';

export default {
    components: {
        Select, Option
    },
}
</script>
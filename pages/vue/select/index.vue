<template>
    <Form style="margin: 20px" class="select-page">
        <FormItem label="标准：">
            <Select v-model="value" :data="data" />
            <template slot="append">
                Your selected value is {{ value }}
            </template>
        </FormItem>
        <FormItem label="可搜索：">
            <Select filterable :data="data" />
        </FormItem>
        <FormItem label="多选+可搜索：">
            <Select multiple filterable :data="data" />
        </FormItem>
    </Form>
</template>

<script>
import Select from 'components/select';
import {Form, FormItem} from 'components/form';

export default {
    data() {
        return {
            value: '',
            data: [
                {label: '星期一', value: 'Monday'},
                {label: '星期二', value: 'Tuesday'},
                {label: '星期三', value: 'Wednesday'},
                {label: '星期四', value: 'Thursday'},
                {label: '星期五', value: 'Friday'},
                {label: '星期六', value: 'Saturday'},
                {label: '星期天', value: 'Sunday'},
            ]
        };
    },

    components: {
        Select, Form, FormItem
    }
}

</script>

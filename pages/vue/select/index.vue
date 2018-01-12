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
        <FormItem label="option:">
            <Select filterable>
                <Option v-for="item in data" :value="item.value"
                    :key="item.value"
                >{{ item.label }}</Option>
            </Select>
        </FormItem>
        <FormItem label="option group:">
            <Select filterable>
                <OptionGroup label="工作日">
                    <Option v-for="(item, index) in data" 
                        v-if="index < 5"
                        :value="item.value"
                        :key="item.value"
                    >{{ item.label }}</Option>
                </OptionGroup>
                <OptionGroup label="双休日">
                    <Option v-for="(item, index) in data" 
                        v-if="index > 4"
                        :value="item.value"
                        :key="item.value"
                    >{{ item.label }}</Option>
                </OptionGroup>
            </Select>
        </FormItem>
        <FormItem label="custom template:">
            <Select filterable>
                <Option v-for="value in data" 
                    :value="value.value"
                    :label="value.label"
                    :key="value.value"
                >
                    <div>
                        <span>{{ value.label }}</span>
                        <span style="float: right; color: #ccc">{{ value.value }}</span>
                    </div>
                </Option>
            </Select>
        </FormItem>
    </Form>
</template>

<script>
import Select, {OptionGroup, Option} from 'components/select';
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
        Select, Form, FormItem,
        OptionGroup, Option
    }
}

</script>

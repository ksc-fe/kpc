<template>
    <Select v-model="day" filterable>
        <Option v-for="(value, key) in data" :value="value.value" :label="value.label">
            <div>
                <span>{{ value.label }}</span>
                <span style="float: right; color: #ccc">{{ value.value }}</span>
            </div>
        </Option>
    </Select>
</template>
<script>
import {Select, Option} from 'kpc-vue/components/select';

export default {
    components: {
        Select, Option
    },
    data() {
        return {
            "data": [
                {
                    "label": "星期一",
                    "value": "Monday"
                },
                {
                    "label": "星期二",
                    "value": "Tuesday"
                },
                {
                    "label": "星期三",
                    "value": "Wednesday"
                },
                {
                    "label": "星期四",
                    "value": "Thursday"
                },
                {
                    "label": "星期五",
                    "value": "Friday"
                },
                {
                    "label": "星期六",
                    "value": "Saturday"
                },
                {
                    "label": "星期天",
                    "value": "Sunday"
                }
            ],
            "day": null
        }
    },
}
</script>
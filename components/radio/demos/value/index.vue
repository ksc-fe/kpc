<template>
    <div>
        <Radio v-model="value1">默认值：{{ stringify(value1) }}</Radio>
        <Radio v-model="value2" trueValue="checked">
            指定选中时的取值为"checked": {{ stringify(value2) }}
        </Radio>
        <Radio v-model="value3" :trueValue="checkedValue">
            指定选中时的取值为对象：{{ stringify(value3) }}
        </Radio>
    </div>
</template>
<script>
import Radio from 'kpc/components/radio';

export default {
    components: {
        Radio
    },
    data() {
        return {
            "checkedValue": {
                "test": 1
            },
            "value1": null,
            "value2": null,
            "value3": null
        }
    },
    methods: {
        stringify(data) { return JSON.stringify(data); },
    },
}
</script>
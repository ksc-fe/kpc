<template>
    <div>
        <Checkbox v-model="value1">默认值: {{ stringify(value1) }}</Checkbox>
        <Checkbox v-model="value2" trueValue="checked">
            指定选中时取值为"checked": {{ stringify(value2) }}
        </Checkbox>
        <Checkbox v-model="value3" :trueValue="0" :falseValue="uncheckedValue">
            指定非选中时取值为对象：{{ stringify(value3) }}
        </Checkbox>
    </div>
</template>
<script>
import Checkbox from 'kpc/components/checkbox';

export default {
    components: {
        Checkbox
    },
    data() {
        return {
            "uncheckedValue": {
                "unchecked": true
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
<template>
    <div>
        <div style="margin-bottom: 20px">
            <KSwitch v-model="value1" />
            {{ stringify(value1) }}
        </div>
        <div>
            <KSwitch v-model="value2" :trueValue="1" falseValue="1" />
            {{ stringify(value2) }}
        </div>
    </div>
</template>
<script>
import {Switch as KSwitch} from 'kpc-vue/components/switch';

export default {
    components: {
        KSwitch
    },
    data() {
        return {
            "value1": null,
            "value2": null
        }
    },
    methods: {
        stringify(data) { return JSON.stringify(data); },
    },
}
</script>
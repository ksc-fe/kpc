<template>
    <div>
        <Editable v-model="value" :validate="value => /\d+/.test(value)"
            ref="__test1"
            @change="_onChange"
        >{{ value }}</Editable>
        <br />
        <Editable v-model="value" :validate="/\d+/"
            ref="__test2"
        >{{ value }}</Editable>
        <br />
        <Editable v-model="value" validate="\d+"
            @error="_showErrorTip"
            ref="__test3"
        >{{ value }}</Editable>
    </div>
</template>
<script>
import Editable from 'kpc/components/editable';


export default {
    components: {
        Editable
    },
    data() {
        return {
            "value": 100
        }
    },
    methods: {
        _showErrorTip(c, value) {
            Message.error('Please enter digits.');
        },
        _onChange(c, newValue, oldValue) {
            console.log(newValue, oldValue);
        },
    },
}
</script>
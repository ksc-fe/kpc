<template>
    <div>
        <Checkbox :indeterminate="length > 0 && length < 3"
            :value="length === 3"
            @$change:value="_toggleSelectAll"
        >全选</Checkbox>
        <hr />
        <Checkbox v-for="(value, key) in options"
            name="languages" 
            :trueValue="value"
            v-model="languages"
        >{{ value }}</Checkbox>
        Your selected: {{ languages }}
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
            "languages": [],
            "options": [
                "Javascript",
                "C++",
                "PHP"
            ]
        }
    },
    methods: {
        _toggleSelectAll(c, checked) {
            if (checked) {
                this.languages = ['Javascript', 'C++', 'PHP'];
            } else {
                this.languages = [];
            }
        },
    },
    computed: {
        length() {
            return this.languages.length;
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
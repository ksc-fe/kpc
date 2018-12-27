<template>
    <div>
        <Checkbox name="languages" trueValue="Javascript" v-model="languages">Javascript</Checkbox>
        <Checkbox name="languages" trueValue="C++" v-model="languages">C++</Checkbox>
        <Checkbox name="languages" trueValue="PHP" v-model="languages">PHP</Checkbox>
        Your selected: {{ stringify(languages) }}
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
            "languages": []
        }
    },
    methods: {
        stringify(data) { return JSON.stringify(data); },
    },
}
</script>
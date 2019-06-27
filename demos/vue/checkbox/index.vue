<template>
    <div>
        <Checkbox>test</Checkbox>
        <Checkbox disabled>disabled</Checkbox>
        <Checkbox :value="true" disabled>disabled checked</Checkbox>

        <br />
        <Checkbox name="group" trueValue="Javascript" v-model="languages">Javascript</Checkbox>
        <Checkbox name="group" trueValue="C++" v-model="languages">C++</Checkbox>
        <Checkbox name="group" trueValue="PHP" v-model="languages" v-if="!removePHP">PHP</Checkbox>
        languages: {{ JSON.stringify(languages) }}
        <Button @click="removePHP = !removePHP">toggle php</Button>

        <br />
        <Checkbox name="single1" v-model="single1">single1</Checkbox> 
        single1: {{ JSON.stringify(single1) }}
        <Checkbox name="single2" v-model="single2" trueValue="single2">single2</Checkbox>
        single2: {{ JSON.stringify(single2) }}
        <Checkbox name="single3" v-model="single3" trueValue="single3" :falseValue="0">single3</Checkbox>
        single3: {{ JSON.stringify(single3) }}

    </div>
</template>

<script>
import Checkbox from 'components/checkbox';
import Button from 'components/button';

export default {
    data() {
        return {
            languages: [],
            removePHP: false,
            single1: undefined,
            single2: undefined,
            single3: undefined,
        }
    },
    components: { 
        Checkbox, Button
    }
}
</script>

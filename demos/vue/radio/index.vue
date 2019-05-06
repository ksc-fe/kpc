<template>
    <div>
        <Radio>test</Radio>
        <Radio disabled>disabled</Radio>
        <Radio :value="true" disabled>disabled checked</Radio>
    
        <br />
        <Radio name="group" trueValue="Javascript" v-model="language">Javascript</Radio>
        <Radio name="group" trueValue="C++" v-model="language">C++</Radio>
        <Radio name="group" trueValue="PHP" v-model="language" v-if="!removePHP">PHP</Radio>
        language: {{ language }}
        <Button @click="removePHP = !removePHP">toggle php</Button>

        <br />
        <Radio name="single1" v-model="single1">single1</Radio> 
        single1: {{ single1 }}
        <Radio name="single2" v-model="single2" trueValue="single2">single2</Radio>
        single2: {{ single2 }}
        <Radio name="single3" v-model="single3" :trueValue="0">single3</Radio>
        single3: {{ single3 }}
    </div>
</template>

<script>
import Radio from 'components/radio';
import Button from 'components/button';

export default {
    components: {
        Radio, Button
    },

    data() {
        return {
            language: '',
            single1: '',
            single2: '',
            single3: '',
            removePHP: false
        }
    }
}
</script>

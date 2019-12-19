<template>
    <div>
        <Radio name="language" trueValue="Javascript" v-model="language">Javascript</Radio>
        <Radio name="language" trueValue="C++" v-model="language">C++</Radio>
        <Radio name="language" trueValue="PHP" v-model="language">PHP</Radio>
        Your selected: {{ language }}
    </div>
</template>
<script>
import Radio from 'kpc-vue/components/radio';

export default {
    components: {
        Radio
    },
    data() {
        return {
            "language": null
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
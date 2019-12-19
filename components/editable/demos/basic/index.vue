<template>
    <div>
        <Editable v-model="text" ref="__test">
            <i class="ion-ios-location"></i>
            <a href="">{{ text }}</a>
        </Editable>
        <br />
        <Editable value="disabled editable text" disabled>
            <i class="ion-ios-location"></i>
            <a href="">disabled editable text</a>
        </Editable>
    </div>
</template>
<script>
import Editable from 'kpc-vue/components/editable';

export default {
    components: {
        Editable
    },
    data() {
        return {
            "text": "editable text"
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
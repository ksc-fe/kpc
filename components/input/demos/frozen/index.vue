<template>
    <div>
        <Input :value="value" @input="_onInput" />
        <br />
        <Input frozenOnInput :value="value" @input="_onInput" />
    </div>
</template>
<script>
import {Input} from 'kpc/components/input';

import tinycolor from 'tinycolor2';

export default {
    components: {
        Input
    },
    data() {
        return {
            "value": "#ddd"
        }
    },
    methods: {
        _onInput(e) {
            const value = e.target.value.trim();
            const color = tinycolor(value);
            if (color.isValid()) {
                const newValue = color.toHexString();
                this.value = newValue;
            }
        },
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
<template>
    <div>
        <ButtonGroup>
            <template v-for="(value, key) in ['large', 'default', 'small', 'mini']">
                <Button @click="set(`show${value}`, true)">Show {{ value }} Dialog</Button>
                <Dialog v-model="$data[`show${value}`]" title="Dialog Title" :size="value">
                    Size: {{ value }}
                </Dialog>
            </template>
        </ButtonGroup>
        <br /><br />
        <Button @click="set('customSize', true)">Show 300px wide dialog</Button>
        <Dialog v-model="customSize" title="Dialog Title" :width="300">
            width: 300px
        </Dialog>
    </div>
</template>
<script>
import {Button, ButtonGroup} from 'kpc-vue/components/button';
import Dialog from 'kpc-vue/components/dialog';

export default {
    components: {
        Button, ButtonGroup, Dialog
    },
    data() {
        return {
            showlarge: false,
            showdefault: false,
            showsmall: false,
            showmini: false,
            customSize: false,
        }
    },
    methods: {
        set(key, value) { this[key] = value },
    },
}
</script>
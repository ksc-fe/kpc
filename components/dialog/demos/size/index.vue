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
    </div>
</template>
<script>
import {Button, ButtonGroup} from 'kpc/components/button';
import Dialog from 'kpc/components/dialog';

export default {
    components: {
        Button, ButtonGroup, Dialog
    },
    data() {
        return {
            showlarge: false,
            showdefault: false,
            showsmall: false,
            showmini: false
        }
    },
    methods: {
        set(key, value) { this[key] = value },
    },
}
</script>
<template>
    <div>
        <Button @click="set('noOverlay', true)"
            type="primary"
        >Show Drawer Without Overlay</Button>
        <Drawer v-model="noOverlay" 
            title="Drawer Title"
            ref="__demoOne"
            :overlay="false"
        >
            Drawer Without Overlay
        </Drawer>
    </div>
</template>
<script>
import Drawer from 'kpc-vue/components/drawer';
import {Button, ButtonGroup} from 'kpc-vue/components/button';

export default {
    components: {
        Drawer, Button, ButtonGroup
    },
    data() {
        return {
            "noOverlay": null
        }
    },
    methods: {
        set(key, value) { this[key] = value },
    },
}
</script>
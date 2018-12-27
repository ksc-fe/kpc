<template>
    <div>
        <Button @click="set('showDrawer', true)"
            type="primary"
        >Show Drawer</Button>
        <Drawer v-model="showDrawer" title="Drawer Title" ref="__demoOne">
            <Select>
                <Option value="1">Option 1</Option>
                <Option value="2">Option 2</Option>
            </Select>
    
            Drawer Body 
        </Drawer>
    </div>
</template>
<script>
import Drawer from 'kpc/components/drawer';
import {Button, ButtonGroup} from 'kpc/components/button';
import {Select, Option} from 'kpc/components/select';

export default {
    components: {
        Drawer, Button, ButtonGroup, Select, Option
    },
    data() {
        return {
            "showDrawer": null
        }
    },
    methods: {
        set(key, value) { this[key] = value },
    },
}
</script>
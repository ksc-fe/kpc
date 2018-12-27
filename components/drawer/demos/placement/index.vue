<template>
    <div>
        <ButtonGroup>
            <Button v-for="(value, key) in showList" 
                @click="showDrawer(value.key)"
            >{{ value.value }}</Button>
        </ButtonGroup>
    
        <Drawer v-model='show'
            title='Drawer Title' 
            ref='__demoTwo' 
            :placement="showPosition" 
            size='small'
        >
            Drawer Body
        </Drawer>
    </div>
</template>
<script>
import Drawer from 'kpc/components/drawer';
import {Button, ButtonGroup} from 'kpc/components/button';

export default {
    components: {
        Drawer, Button, ButtonGroup
    },
    data() {
        return {
            "showList": [
                {
                    "key": "top",
                    "value": "从上侧出现"
                },
                {
                    "key": "bottom",
                    "value": "从下侧出现"
                },
                {
                    "key": "left",
                    "value": "从左侧出现"
                },
                {
                    "key": "right",
                    "value": "从右侧出现"
                }
            ],
            "showPosition": "right",
            "show": false
        }
    },
    methods: {
        showDrawer(value) {
            this.showPosition = value;
            this.show = true;
        },
    },
}
</script>
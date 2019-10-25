<template>
    <div>
        <Button @click="set('show', true)">custom message</Button>
        <Message v-model="show" key="message" 
            hideIcon
            :duration="0" 
            :type="percent >= 100 ? 'success' : 'info'"
        >
            <Progress style="width: 200px" 
                :percent="percent"
                @click="add"
            />
        </Message>
    </div>
</template>
<script>
import Message from 'kpc/components/message';
import {Button} from 'kpc/components/button';
import {Progress} from 'kpc/components/progress';

export default {
    components: {
        Message, Button, Progress
    },
    data() {
        return {
            "percent": 10,
            "show": false
        }
    },
    methods: {
        set(key, value) { this[key] = value },
        add() {
            this.percent += 5;
        },
    },
}
</script>
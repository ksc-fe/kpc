<template>
    <div>
        <Button @click="showMessage(value)"
            v-for="value in ['info', 'error', 'success', 'warning']"
            :key="value"
        >Show {{ value }} message</Button>
        <br />
        <Button @click="showStickMessage">
            Show stick message
        </Button>
        <br />
        <Button @click="show = true">
            Show stick message with custom template
        </Button>
        <Button @click="show2 = true">
            Show message with custom template
        </Button>
        <Message v-model="show" key="key1" :duration="0">
            <Progress :percent="percent"
                style="width: 200px" 
                @click="onClick"
            />
        </Message>
        <Message v-model="show2" key="key2">
            <Progress :percent="percent" style="width: 200px" />
        </Message>
    </div>
</template>

<script>
import Button from 'components/button';
import Progress from 'components/progress';
import Message from 'components/message';

export default {
    components: {
        Button, Progress, Message
    },

    data() {
        return {
            show: false,
            show2: false,
            percent: 40,
        }
    },

    methods: {
        showMessage(type) {
            Message[type](type);
        },
        showStickMessage() {
            Message.error('stick error message', 0);
        },
        onClick() {
            console.log('click');
            this.percent += 5;
            if (this.percent === 100) {
                this.show = false;
            }
        }
    }
}
</script>

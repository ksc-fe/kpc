<template>
    <div class="tooltip-demo">
        <div>
            <Tooltip>
                <button @click="onClick">test</button>
                <div slot="content">message</div>  
            </Tooltip>
        </div>
    </div>
</template>

<script>
import Tooltip from 'components/tooltip';
import Button, {ButtonGroup} from 'components/button';
import Slider from 'components/slider';

export default {
    components: {
        Tooltip, Button, ButtonGroup, Slider
    },

    data() {
        return {
            percent: 40,
            pos: '',
        }
    },

    methods: {
        onClick() {
            console.log('click')
        }
    }
}
</script>

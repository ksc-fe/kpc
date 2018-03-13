<template>
    <div class="tooltip-demo">
        <div>
            <Tooltip>
                <button @click="onClick">test</button>
                <div slot="content">message</div>  
            </Tooltip>
        </div>

        <Tooltip content="World" style="margin-bottom: 10px">Hello</Tooltip>
        <br />
        <ButtonGroup>
            <Tooltip content="lijia">
                <Button>hover</Button>
            </Tooltip>
            <Tooltip canHover>
                <Button>block</Button>
                <template slot="content">关机</template>
            </Tooltip>
            <Tooltip trigger="click">
                <Button>click</Button>
                <template slot="content">Hello 关机</template>
            </Tooltip>
            <Tooltip trigger="click">
                <Button>complex</Button>
                <template slot="content">
                    <Slider v-model="percent" 
                        style="width: 200px; padding: 10px" 
                        :isShowInput="false"
                        :isShowEnd="false"
                    />
                </template>
            </Tooltip>
        </ButtonGroup>
        <br />
        <ButtonGroup style="margin-top: 10px" radio v-model="pos">
            <Tooltip v-for="value in ['top', 'right', 'bottom', 'left']"
                :content="value"
                :position="value"
                :key="value"
            >
                <Button :value="value">{{ value }}</Button> 
            </Tooltip>
        </ButtonGroup>
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

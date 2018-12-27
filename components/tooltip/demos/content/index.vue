<template>
    <div>
        <Tooltip trigger="click">
            <Button>Adjust Volume</Button>
            <template slot="content">
                <Slider v-model="volume" 
                    style="width: 200px;"
                    :isShowInput="false" 
                    :isShowEnd="false"
                />
            </template>
        </Tooltip>
    </div>
</template>
<script>
import Tooltip from 'kpc/components/tooltip';
import {Slider} from 'kpc/components/slider';
import {Button} from 'kpc/components/button';

export default {
    components: {
        Tooltip, Slider, Button
    },
    data() {
        return {
            "volume": null
        }
    },
}
</script>
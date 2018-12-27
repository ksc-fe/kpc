<template>
    <div>
        <Slider v-model="value1" :min="min" :max="max"/>
        <Slider v-model="value2" :min="50" :max="500" ref="__test" />
        <Button @click="_changeRange">Change Range Randomly</Button>
    </div>
</template>
<script>
import Slider from 'kpc/components/slider';
import Button from 'kpc/components/button';

export default {
    components: {
        Slider, Button
    },
    data() {
        return {
            "min": 0,
            "max": 100,
            "value1": 60,
            "value2": 277
        }
    },
    methods: {
        _changeRange() {
            this.max = Math.floor(Math.random() * 100);
            this.min = Math.floor(Math.random() * this.max);
        },
    },
}
</script>
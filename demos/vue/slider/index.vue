<template>
    <div class="slider-demo">
        <Slider :marks="marks"></Slider>
        <Slider disabled ></Slider>
        <div>
             <span>选中值为： {{ currentVal }}</span>
             <Slider v-model="currentVal" :step="step" @stop="stop"></Slider>
        </div>
        <Slider isShowInput></Slider>
        <Slider isRange v-model="valueArr"></Slider>
        <Slider disabled isRange :value="[40, 70]"></Slider>
    </div>
</template>

<script>
import Slider from 'components/slider';
import Intact from 'intact';

export default {
    data() {
        return {
            'currentVal': 25,
            'step': 5,
            'valueArr': [30, 50],
            'marks': {
                50: Intact.normalize(
                    <div>test</div>
                )
            }
        }
    },

    components: {
        Slider
    },

    methods: {
        stop(val) {
            this.currentVal = val;
        }
    }
}
</script>

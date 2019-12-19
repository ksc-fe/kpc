<template>
    <div>
        <Slider v-model="value1" :min="50" :max="500" showTooltip />
        <Slider v-model="values" isRange showTooltip />
        <Slider v-model="value2" :min="1" :max="12"
            :isShowInput="false"
            :marks="marks"
            showTooltip
            always
        >
            <template slot="tooltip" slot-scope="value">
                <span v-if="value > 9">满{{ value - 9 }}年，优惠{{ (value - 9) * 2 }}个月</span>
            </template>
        </Slider>
    </div>
</template>
<script>
import Slider from 'kpc-vue/components/slider';

export default {
    components: {
        Slider
    },
    data() {
        return {
            "marks": {
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4",
                "5": "5",
                "6": "6月",
                "7": "7",
                "8": "8",
                "9": "9",
                "10": "1年",
                "11": "2年",
                "12": "3年"
            },
            "value1": 277,
            "values": [
                50,
                76
            ],
            "value2": 6
        }
    },
}
</script>
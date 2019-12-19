<template>
    <ScrollSelect
        :data="generateData"
        v-model="value"
        :disable="disable"
    />
</template>
<script>
import ScrollSelect from 'kpc-vue/components/scrollSelect';

export default {
    components: {
        ScrollSelect
    },
    data() {
        return {
            "value": 2018
        }
    },
    methods: {
        generateData(value) {
            const start = value - 5;
            return Array.apply(null, {length: 10})
                .map((v, i) => {
                    const year = start + i; 
                    return {
                        label: `${year}年`,
                        value: year
                    };
                });
        },
        disable(value) {
            // 排除闰年
            return value % 4 === 0 && (value % 100 !== 0 || value % 400 === 0);
        },
    },
}
</script>
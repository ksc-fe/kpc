<template>
    <ScrollSelect
        :data="generateData"
        v-model="value"
    />
</template>
<script>
import ScrollSelect from 'kpc/components/scrollSelect';

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
    },
}
</script>
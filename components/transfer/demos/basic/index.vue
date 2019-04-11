<template>
    <div>
        <Transfer :data="data" v-model="value" ref="__test" />
        <p>You selected: {{ stringify(value) }}</p>
    </div>
</template>
<script>
import Transfer from 'kpc/components/transfer';

const data = [
    {label: '主机名0', key: 0},
    {label: '主机名1', key: 1, disabled: true},
    {label: '主机名2', key: 2},
    {label: '主机名3', key: 3, disabled: true},
    {label: '主机名4', key: 4},
];
export default {
    components: {
        Transfer
    },
    data() {
        return {
            data: data,
            value: [
                data[0],
                data[1]
            ]
        }
    },
    methods: {
        stringify(data) { return JSON.stringify(data); },
    },
}
</script>
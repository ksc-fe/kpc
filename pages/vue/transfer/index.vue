<template>
    <Transfer :data="data" :filter="filter" :filterable='true' :batchable='true'>
        <div slot="label" slot-scope="data, index, type">
            <div>{{ data.name }}</div>
            <p>{{ data.desc }} | {{ data.ip }}</p>
        </div>
    </Transfer>
</template>

<script>
import Transfer from 'components/transfer';

export default {
    data() {
        return {
            data: [
                {name: '主机名0', desc: '前端服务器0', ip: '192.168.1.0'},
                {name: '主机名1', desc: '前端服务器1', ip: '192.168.1.1'},
                {name: '主机名2', desc: '前端服务器2', ip: '192.168.1.2'},
                {name: '主机名3', desc: '前端服务器3', ip: '192.168.1.3', disabled: true},
                {name: '主机名4', desc: '前端服务器4', ip: '192.168.1.4'},
            ]
        }
    },

    components: {Transfer},

    methods: {
        filter(data, keywords) {
            return data.name.includes(keywords) || 
                data.desc.includes(keywords) ||
                data.ip.includes(keywords);
        }
    }
}
</script>
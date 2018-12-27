<template>
    <div class='no-data-template'>
        <Table :scheme="scheme" :data="data" />
        <Table :scheme="scheme" :data="data" :noDataTemplate="tip" />
        <Table :scheme="scheme" :data="data">
            <template slot="no-data">
                <div style="color: red">没有数据</div>
            </template>
        </Table>
    </div>
</template>
<script>
import Table from 'kpc/components/table';

export default {
    components: {
        Table
    },
    data() {
        return {
            scheme: {a: '表头1', b: '表头2'},
            data: [],
            tip: <div>这里没有数据(自定义版本)</div>,
        }
    },
}
</script>
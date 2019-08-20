<template>
    <Table 
        :data="[
            {a: '第一行', b: '哈哈1'}, 
            {a: '第二行', b: '哈哈2'},
            {a: '第三行', b: '哈哈3'},
        ]"
    >
        <template slot="tooltip" slot-scope="data, index">
            <div>{{ data.a }}</div>
        </template>
        <TableColumn key="a" title="表头1" />
        <TableColumn key="b" title="表头2" />
    </Table>
</template>
<script>
import {Table, TableColumn} from 'kpc/components/table';

export default {
    components: {
        Table, TableColumn
    },
}
</script>
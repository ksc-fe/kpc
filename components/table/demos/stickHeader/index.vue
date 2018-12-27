<template>
    <Table :data="[
        {name: 'Javey', sex: 'male'},
        {name: 'Lisa', sex: 'female'}
    ]" stickHeader="87" resizable>
        <TableColumn title="姓名" key="name">
            <template slot="template" slot-scope="data">
                {{ data.name }}
            </template>
        </TableColumn>
        <TableColumn title="性别" key="sex">
            <template slot="template" slot-scope="data">
                {{ data.sex }}
            </template>
        </TableColumn>
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
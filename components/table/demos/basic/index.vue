<template>
    <div>
        <Table :scheme="scheme" :data="data" resizable ref="__test" />
        <Table :data="data" resizable>
            <TableColumn key="a" title="表头1" />
            <TableColumn key="b" title="表头2" />
        </Table>
    </div>
</template>
<script>
import {Table, TableColumn} from 'kpc/components/table';

export default {
    components: {
        Table, TableColumn
    },
    data() {
        return {
            scheme: {a: '表头1', b: '表头2'},
            data: [{a: '第一行', b: '哈哈2'}, {a: '第二行', b: '哈哈2'}],
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
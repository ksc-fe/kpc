<template>
    <div>
        <Table :data="data" 
            rowSelectable
            @$change:selectedKeys="_onSelectedKeysChanged"
            :rowCheckable="false"
            ref="__test1"
        >
            <TableColumn key="a" title="表头1" />
            <TableColumn key="b" title="表头2" />
        </Table>
        <Table :data="data"
            rowSelectable="multiple"
            :rowCheckable="false"
            ref="__test2"
        >
            <TableColumn key="a" title="表头1" />
            <TableColumn key="b" title="表头2" />
        </Table>
    </div>
</template>
<script>
import {Table, TableColumn} from 'kpc-vue/components/table';

export default {
    components: {
        Table, TableColumn
    },
    data() {
        return {
            "data": [
                {
                    "a": "第一行",
                    "b": "哈哈2"
                },
                {
                    "a": "第二行",
                    "b": "哈哈2"
                }
            ]
        }
    },
    methods: {
        _onSelectedKeysChanged(table) {
            console.log(table.getSelectedData());
        },
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
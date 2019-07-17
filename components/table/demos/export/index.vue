<template>
    <div>
        <Button type="primary" @click="_export">导出表格</Button>
        <Button type="primary" @click="_exportData">导出自定义数据</Button>
        <Table :data="data" ref="table">
            <TableColumn title="定义该列单元格内容" key="a">
                <template slot="template" slot-scope="data">
                    <a>{{ data.a }}</a>
                </template>
            </TableColumn>
            <TableColumn title="普通文本" key="b" />
            <TableColumn title="自定义导出文本" key="c">
                <template slot="template" slot-scope="data">
                    <div :data-text="'自定义导出文本:' + data.c">
                        {{ data.c }}
                    </div>
                </template>
            </TableColumn>
            <TableColumn title="操作" key="op" ignore align="right">
                <template slot="template" slot-scope="data">
                    <a>删除</a> 
                </template>
            </TableColumn>
        </Table>
    </div>
</template>
<script>
import {Table, TableColumn} from 'kpc/components/table';
import {Button} from 'kpc/components/button';

export default {
    components: {
        Table, TableColumn, Button
    },
    data() {
        return {
            "data": [
                {
                    "a": "第一行",
                    "b": "哈哈1",
                    "c": "自定义1"
                },
                {
                    "a": "第二行",
                    "b": "哈哈2",
                    "c": "自定义2"
                }
            ]
        }
    },
    methods: {
        _export() {
            this.$refs.table.exportTable();
        },
        _exportData() {
            this.$refs.table.exportTable([
                {a: '第一行', b: '哈哈1', c: '自定义1'}, 
                {a: '第二行', b: '哈哈2', c: '自定义2'},
                {a: '第三行', b: '哈哈3', c: '自定义3'}
            ]);
        },
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
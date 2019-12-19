<template>
    <div>
        <Table :scheme="scheme" :data="data" />
        <Table :data="data">
            <TableColumn 
                title='定义该列单元格内容'
                key='a'
            >
                <a slot-scope="item">{{ item.a }}</a>
            </TableColumn>
            <TableColumn title='key形式' key='b' />
            <TableColumn title='key为一个路径字符串' key='c.c1' />
            <TableColumn title='没有这个key，则返回空' key='d.d1' />
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
            scheme: {
                a: {
                    title: '定义该列单元格内容',
                    template: function(item) {
                        return <a>{item.a}</a>
                    }
                },
                b: 'key形式',
                'c.c1': 'key为一个路径字符串',
                'd.d1': '没有这个key，则返回空', 
            },
            data: [{a: '虚拟DOM', b: '获取到了item.b', c: {c1: 'item.c.c1'}}]
        }
    }
}
</script>
<style lang="stylus" src="./index.styl"></style>
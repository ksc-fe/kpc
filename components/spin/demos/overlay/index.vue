<template>
    <div class="wrapper">
        <Table :data="data">
            <TableColumn key="a" title="表头1" />
            <TableColumn key="b" title="表头2" />
        </Table>
        <Spin overlay />
    </div>
</template>
<script>
import Spin from 'kpc-vue/components/spin';
import {Table, TableColumn} from 'kpc-vue/components/table';

export default {
    components: {
        Spin, Table, TableColumn
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
                },
                {
                    "a": "第三行",
                    "b": "哈哈3"
                }
            ]
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
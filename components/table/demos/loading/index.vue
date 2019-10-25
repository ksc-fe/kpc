<template>
    <div>
        <Table 
            :data="[
                {a: '第一行', b: '哈哈1'}, 
                {a: '第二行', b: '哈哈2'},
                {a: '第三行', b: '哈哈3'}
            ]"
            :loading="!!loading"
        >
            <TableColumn key="a" title="表头1" />
            <TableColumn key="b" title="表头2" />
        </Table>
        切换loading状态: <KSwitch v-model="loading"></KSwitch>
    </div>
</template>
<script>
import {Table, TableColumn} from 'kpc/components/table';
import {Switch as KSwitch} from 'kpc/components/switch';

export default {
    components: {
        Table, TableColumn, KSwitch
    },
    data() {
        return {
            "loading": null
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
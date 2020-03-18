<template>
    <div class="wrapper">
        <ButtonGroup>
            <Button @click="scrollToRowByIndex">Scroll to the 20th row</Button>
            <Button @click="scrollToRowByKey">Scroll to the "name 25" row</Button>
        </ButtonGroup>
        <Table fixHeader="300"
            :data="data"
            ref="table"
            :rowKey="item => item.name"
        >
            <TableColumn title="Name" key="name" fixed="left" />
            <TableColumn title="IP" key="ip" />
            <TableColumn title="Operation" key="op" fixed="right">
                <template slot="template" slot-scope="data">
                    <a>Remove</a> 
                </template>
            </TableColumn>
        </Table>
    </div>
</template>
<script>
import {Table, TableColumn} from 'kpc-vue/components/table';
import {Button, ButtonGroup} from 'kpc-vue/components/button';

import {range} from 'kpc-vue/components/utils';

export default {
    components: {
        Table, TableColumn, Button, ButtonGroup
    },
    data() {
        return {
            "data": null
        }
    },
    methods: {
        scrollToRowByIndex() {
            this.$refs.table.scrollToRowByIndex(19);
        },
        scrollToRowByKey() {
            this.$refs.table.scrollToRowByKey('name 25');
        },
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
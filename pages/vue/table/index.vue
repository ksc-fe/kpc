<template>
    <div>
        <Table :data="data">
            <TableColumn key="test" title="测试">
                <template slot-scope="data, index">
                    <div><i class="ion-search"></i>{{ data.test }}</div>
                </template>
            </TableColumn>
            <TableColumn key="aa" title="标题" />
        </Table>
        <Table :data="data" :scheme="scheme" />
        <Table :data="data" :scheme="scheme" checkType="radio" @$change:checkedKey="hello"/>
        <Table :data="data" :scheme="cunstomCellScheme" />
        <Table :data="bigData" :scheme="{a: 'A', b: 'B'}" :fixHeader="300" />
        <Table :data="data" :scheme="scheme" :disableRow="disableRow" />
        <Table :data="data" :scheme="sortableScheme" resizable />
    </div>
</template>

<script>
import {Table, TableColumn} from 'components/table';
import Button from 'components/button';

export default {
    data() {
        const vm = this;
        return {
            scheme: {
                test: 'aaa',
                aa: 'bbb',
            },
            data: [
                {test: 1, aa: 'aa'},
                {test: 2, aa: 'bb'},
            ],
            bigData: Array.apply(null, {length: 100}).map((item, index) => {
                return {a: index, b: index};
            }),
            disableRow(value, index) {
                return index === 1;
            },
            sortableScheme: {
                test: {
                    title: 'aaa',
                    sortable: true
                },
                aa: {
                    title: 'bb',
                    sortable: true
                }
            },
            cunstomCellScheme: {
                test: {
                    title: 'aaa',
                    template(data) {
                        const h = vm.$createElement;
                        const vNode = h('div', null, [
                            h('i', {staticClass: 'ion-search'}),
                            data.test
                        ]);
                        console.log(vNode);
                        return vNode;
                    }
                },
                aa: 'bbb'
            },
        }
    },

    components: {
        Table, TableColumn, Button
    },

    methods: {
        hello() {
            console.log(111);
        }
    }
}
</script>

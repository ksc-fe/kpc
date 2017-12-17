<template>
    <div>
        <Table :data="data" :scheme="scheme" />
        <Table :data="data" :scheme="scheme" checkType="radio" />
        <Table :data="data" :scheme="cunstomCellScheme" />
        <Table :data="bigData" :scheme="{a: 'A', b: 'B'}" :fixHeader="300" />
        <Table :data="data" :scheme="scheme" :disableRow="disableRow" />
        <Table :data="data" :scheme="sortableScheme" resizable />
    </div>
</template>

<script>
import Table from 'components/table';
import Button from 'components/button';

export default {
    data() {
        const h = this.$createElement;
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
        Table, Button
    },
}
</script>

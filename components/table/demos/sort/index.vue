<template>
    <div class='no-data-template'>
        <Table :scheme="scheme" 
            :data="data" 
            :sort="sort"
            @$change:sort="_onSort"
        />
        <Table :data="data" 
            :sort="sort"
            @$change:sort="_onSort"
        >
            <TableColumn title='姓名' key='name' sortable />
            <TableColumn title='年龄' key='age' sortable />
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
            "scheme": {
                "name": {
                    "title": "姓名",
                    "sortable": true
                },
                "age": {
                    "title": "年龄",
                    "sortable": true
                }
            },
            "data": [
                {
                    "name": "aa",
                    "age": 1
                },
                {
                    "name": "cc",
                    "age": 5
                },
                {
                    "name": "bb",
                    "age": 9
                }
            ],
            "sort": {}
        }
    },
    methods: {
        _onSort(c, sort) {
            console.log(sort);
            const data = this.data.slice(0);
            data.sort((a, b) => {
                return sort.type === 'desc' ? 
                    (a[sort.key] > b[sort.key] ? -1 : 1) : 
                    (a[sort.key] > b[sort.key] ? 1 : -1);
            });
            this.set({data, sort});
        },
    },
}
</script>
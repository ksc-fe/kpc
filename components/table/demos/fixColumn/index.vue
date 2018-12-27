<template>
    <div>
        <Table :data="data" resizable stickHeader="87">
            <TableColumn fixed="left" key="name" title="Name" width="200" />
            <TableColumn key="column1" title="Column1" width="300" />
            <TableColumn key="column2" title="Column2" width="300" />
            <TableColumn key="column3" title="Column3" width="300" />
            <TableColumn key="column4" title="Column4" width="300" />
            <TableColumn fixed="right" key="action" title="Action" width="200">
                <template slot="template" slot-scope="data">
                    <a>action</a>
                </template>
            </TableColumn>
        </Table>
        <Table :data="data" fixHeader="100" resizable ref="__test">
            <TableColumn fixed="left" key="name" title="Name" width="200" />
            <TableColumn key="column1" title="Column1" width="300" />
            <TableColumn key="column2" title="Column2" width="300" />
            <TableColumn key="column3" title="Column3" width="300" />
            <TableColumn key="column4" title="Column4" width="300" />
            <TableColumn fixed="right" key="action" title="Action" width="200">
                <template slot="template" slot-scope="data">
                    <a>action</a>
                </template>
            </TableColumn>
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
            data: [
                {name: 'John'},
                {name: 'Tom'},
                {name: 'Javey'},
            ].map(item => {
                for (let i = 0; i < 4; i++) {
                    item[`column${i + 1}`] = 'test';
                }
                return item;
            })
        }
    },
}
</script>
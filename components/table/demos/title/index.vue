<template>
    <div>
        <Table :scheme="scheme" :data="data" />
        <Table :data="data">
            <TableColumn key="a"
                :group="[{label: 'test', value: ''}]"
                sortable
            >
                <template slot="title">
                    <span title="自定义表头内容" class="c-middle title">自定义表头内容</span>
                    <Tooltip content="tooltip content">
                        <i class="ion-ios-help-outline c-middle"></i>
                    </Tooltip>
                </template>
            </TableColumn>
            <TableColumn key="b" title="表头2" />
        </Table>
    </div>
</template>
<script>
import {Table, TableColumn} from 'kpc/components/table';
import {Tooltip} from 'kpc/components/tooltip';

export default {
    components: {
        Table, TableColumn, Tooltip
    },
    data() {
        return {
            scheme: {
                a: {
                    title: (
                        <div>
                            <span title="自定义表头内容" class="c-middle title">自定义表头内容</span>
                            <Tooltip content="tooltip content">
                                <i class="ion-ios-help-outline c-middle"></i>
                            </Tooltip>
                        </div>
                    ), 
                    group: [{label: 'test', value: ''}],
                    sortable: true,
                },
                b: '表头2'
            },
            data: [{a: '第一行', b: '哈哈2'}, {a: '第二行', b: '哈哈2'}],
        }
    }
}
</script>
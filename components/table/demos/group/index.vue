<template>
    <div class='no-data-template'>
        <Table :scheme="scheme" 
            :data="data" 
            :group.sync="group"
            @$change:group="_onChangeGroup"
            ref="__test1"
        />
        <Table :data="multipleData" 
            :group.sync="multipleGroup"
            @$change:group="_onChangeMultipleGroup"
            ref="__test2"
        >
            <TableColumn title='名称' key='name' />
            <TableColumn title='状态' key='status' 
                :group="[ 
                    {label: '运行中', value: 'active'},
                    {label: '已关闭', value: 'stopped'},
                ]"
                multiple
            >
                <template slot="template" slot-scope="data">
                    <span>{{ data.status === 'active' ? '运行中' : '已关闭' }}</span>
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
            data: [], 
            group: {status: ''},
            multipleData: [],
            multipleGroup: {status: []},
            scheme: {
                name: '名称',
                status: {
                    title: '状态',
                    template: function(data) {
                        return <span>{data.status === 'active' ? '运行中' : '已关闭'}</span>
                    },
                    group: [
                        {label: '全部', value: ''},
                        {label: '运行中', value: 'active'},
                        {label: '已关闭', value: 'stopped'},
                    ]
                }
            },
        }
    },
    methods: {
        _onChangeGroup(c, group) {
            console.log(group);
            const data = this.oData.filter(item => {
                let matched = true;
                for (let key in group) {
                    const value = group[key];
                    if (value && item[key] !== value) {
                        matched = false;
                        break;
                    }
                }
                return matched;
            });
        
            this.data = data;
        },
        _onChangeMultipleGroup(c, group) {
            console.log(group);
            const data = this.oData.filter(item => {
                let matched = true;
                for (let key in group) {
                    const value = group[key];
                    if (value.length && value.indexOf(item[key]) === -1) {
                        matched = false;
                        break;
                    }
                }
                return matched;
            });
        
            this.multipleData = data;
        },
    },
    created() {
        this.oData = [
            {name: '主机1', status: 'active'},
            {name: '主机2', status: 'stopped'},
            {name: '主机3', status: 'active'},
        ];
        this.data = this.oData;
        this.multipleData = this.oData;
    },
}
</script>
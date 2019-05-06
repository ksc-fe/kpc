<template>
    <div class="split-container">
        <Split mode="vertical"
            :lastSize.sync="size"
            :class="{closed: size === '0px'}"
            :min="10"
        >
            <template slot="first">
                <Table :data="data"
                    fixHeader
                    ref="table"
                    :rowCheckable="false"
                    :checkedKeys.sync="checkedKeys"
                    @click:row="_onClickRow"
                    @$change:checkedKeys="_togglePanel"
                >
                    <TableColumn title="名称" key="name" />
                    <TableColumn title="网段" key="ip" />
                    <TableColumn title="操作" key="op">
                        <template slot="template" slot-scope="data">
                            <a>删除</a> 
                        </template>
                    </TableColumn>
                </Table>
                <Pagination :total="100" size="small" />
            </template>
            <template slot="last">
                <Button type="none" icon class="close"
                    @click="_close"
                >
                    <Icon class="ion-ios-close-empty" size="40" />
                </Button>
                <Tabs v-model="tab">
                    <Tab value="detail">详情</Tab>
                    <Tab value="data">流量统计</Tab>
                    <Tab value="tag">标签</Tab>
                </Tabs>
                <div v-if="tab === 'detail'" class="tab-panel">
                    <FormItem label="创建时间：">2018-09-28 17:31:25</FormItem>
                    <FormItem label="弹性IP：">{{ selectedData.ip }}</FormItem>
                    <FormItem label="名称：">{{ selectedData.name }}</FormItem>
                </div>
            </template>
            <template slot="drag">
                <Icon class="ion-drag" />
            </template>
        </Split>
    </div>
</template>
<script>
import Split from 'kpc/components/split';
import {Table, TableColumn} from 'kpc/components/table';
import {Pagination} from 'kpc/components/pagination';
import {Tabs, Tab} from 'kpc/components/tabs';
import {FormItem} from 'kpc/components/form';
import Button from 'kpc/components/button';
import Icon from 'kpc/components/icon';

import {range} from 'kpc/components/utils';

export default {
    components: {
        Split, Table, TableColumn, Pagination, Tabs, Tab, FormItem, Button, Icon
    },
    data() {
        return {
            data: range(0, 10).map(item => {
                return {
                    name: 'name ' + item,
                    ip: '127.0.0.' + item
                };
            }),
            tab: 'detail',
            size: '0px',
            selectedData: {},
            checkedKeys: [],
        }
    },
    methods: {
        _close() {
            this.size = '0px';
        },
        _open() {
            if (this.size === '0px') {
                this.size = '200px';
            }
        },
        _togglePanel(table, keys) {
            if (keys.length === 1) {
                // 只选中一行时，展开详情面板
                const data = table.getCheckedData()[0];
                this.selectedData = data;
                this._open();
            } else {
                this._close();
            }
        },
        _onClickRow(data, index, key) {
            const checkedKeys = this.checkedKeys;
            if (checkedKeys.length === 1 && checkedKeys[0] === key) {
                // 如果只选中了一行，再次点击当前行，则取消选中
                key = [];
            } else {
                // 否则只选中当前行
                key = [key];
            }
            this.checkedKeys = key;
        },
    },
}
</script>
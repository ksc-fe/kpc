<template>
    <div class='no-data-template'>
        <Table 
            :data="data" 
            checkType="none"
            ref="__test1"
        >
            <template slot="expand" slot-scope="data, index">
                <div>Email: {{ data.email }}</div>
            </template>
            <TableColumn title="点击整行展开内容" key="name" />
        </Table>
    
        <Table 
            :data="data" 
            checkType="none"
            :rowExpandable="false"
            :expandedKeys="expandedKeys"
            ref="__test2"
        >
            <template slot="expand" slot-scope="data, index">
                <div>Email: {{ data.email }}</div>
            </template>
            <TableColumn title="点击+，展开内容" key="name">
                <template slot="template" slot-scope="data, index">
                    <div>
                        <i 
                            :class="{
                                'icon': true,
                                'ion-ios-plus-outline': expandedKeys.indexOf(index) < 0,
                                'ion-ios-minus-outline': expandedKeys.indexOf(index) > -1,
                            }"
                            @click="toggleExpand(data, index)"
                        ></i>
                        {{ data.name }}
                    </div>
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
            "data": [
                {
                    "name": "Javey",
                    "email": "jiawei23716@sina.com"
                },
                {
                    "name": "Jiawei",
                    "email": "zoujiawei@gmail.com"
                }
            ],
            "expandedKeys": []
        }
    },
    methods: {
        toggleExpand(data, index) {
            const expandedKeys = this.expandedKeys.slice(0);
            const i = expandedKeys.indexOf(index);
            if (i > -1) {
                expandedKeys.splice(i, 1);
            } else {
                expandedKeys.push(index);
            }
            this.expandedKeys = expandedKeys;
        },
    },
}
</script>
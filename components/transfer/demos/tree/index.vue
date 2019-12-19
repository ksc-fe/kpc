<template>
    <Transfer
        :enableAdd="enableAdd"
        :enableRemove="enableRemove"
        @add="onAdd"
        @remove="onRemove"
    >
        <template slot="header" slot-scope="type">
            <div v-if="type === 'left'">请选择</div>
            <div v-else>已选择</div>
        </template>
        <template slot="list" slot-scope="type">
            <Tree v-if="type === 'left'"
                :data="leftData"
                checkbox
                :checkedKeys.sync="leftCheckedKeys"
                :expandedKeys.sync="leftExpandedKeys"
                ref="left"
            />
            <Tree v-else
                :data="rightData"
                checkbox
                :checkedKeys.sync="rightCheckedKeys"
                :expandedKeys.sync="rightExpandedKeys"
                ref="right"
            />
        </template>
    </Transfer>
</template>
<script>
import Transfer from 'kpc-vue/components/transfer';
import Tree from 'kpc-vue/components/tree';

export default {
    components: {
        Transfer, Tree
    },
    data() {
        return {
            "leftData": [],
            "rightData": [],
            "leftCheckedKeys": [],
            "leftExpandedKeys": [],
            "rightCheckedKeys": [],
            "rightExpandedKeys": [],
            "data": [
                {
                    "label": "database",
                    "key": "database",
                    "children": [
                        {
                            "label": "table1",
                            "key": "table1",
                            "children": [
                                {
                                    "label": "class",
                                    "key": "class"
                                },
                                {
                                    "label": "student",
                                    "key": "student"
                                }
                            ]
                        },
                        {
                            "label": "table2",
                            "key": "table2",
                            "children": [
                                {
                                    "label": "id",
                                    "key": "id"
                                },
                                {
                                    "label": "name",
                                    "key": "name"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        enableAdd() {
            return this.leftCheckedKeys.length > 0;
        },
        enableRemove() {
            return this.rightCheckedKeys.length > 0;
        },
        onAdd() {
            const {from, to} = this.moveData(this.$refs.left, this.leftData, this.rightData);
            this.set({leftData: from, rightData: to, leftCheckedKeys: []});
        },
        onRemove() {
            const {from, to} = this.moveData(this.$refs.right, this.rightData, this.leftData);
            this.set({leftData: to, rightData: from, rightCheckedKeys: []});
        },
        moveData(tree, from, to) {
            from = this.deepClone(from);
            to = this.deepClone(to);
            const loop = (children, from, to) => {
                let deleteCount = 0;
                children.forEach((node, index) => {
                    const data = node.data;
                    if (node.checked) {
                        // remove from `from` 
                        if (from) {
                            from.splice(index - deleteCount, 1);
                            deleteCount++;
                        }
                        // add to `to` 
                        let newData = to.find(item => item.key === data.key);
                        if (!newData) {
                            to.push(this.deepClone(data));
                        } else {
                            loop(node.children, null, newData.children);
                        }
                    } else if (node.indeterminate) {
                        let newData = to.find(item => item.key === data.key);
                        if (!newData) {
                            newData = {...data, children: []};
                            to.push(newData);
                        }
                        loop(node.children, from[index - deleteCount].children, newData.children);
                    }
                });
            };
        
            loop(tree.root.children, from, to);
        
            return {from, to};
        },
        deepClone(data) {
            if (data == null) return data;
        
            if (Array.isArray(data)) {
                return data.map(item => {
                    return this.deepClone(item);
                });
            } 
        
            if (typeof data === 'object') {
                const ret = {};
                for (let key in data) {
                    ret[key] = this.deepClone(data[key]);
                }           
                return ret;
            }
        
            return data;
        },
    },
}
</script>
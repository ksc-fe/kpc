<template>
    <div>
        <Button @click="_getCheckedData">get checked data</Button>
        <Button @click="_getCheckedLeavesData">get checked leaves data</Button>
        <br />
        <br />
        <Tree :data="data" 
            checkbox
            ref="tree"
            :checkedKeys.sync="checkedKeys"
        />
    </div>
</template>
<script>
import Tree from 'kpc/components/tree';
import Button from 'kpc/components/button';

export default {
    components: {
        Tree, Button
    },
    data() {
        return {
            "checkedKeys": [
                "floor-2.1.1"
            ],
            "data": [
                {
                    "label": "First floor-1",
                    "children": [
                        {
                            "label": "Second floor-1.1",
                            "children": [
                                {
                                    "label": "Third floor-1.1.1"
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "First floor-2",
                    "children": [
                        {
                            "label": "Second floor-2.1",
                            "children": [
                                {
                                    "label": "Third floor-2.1.1",
                                    "key": "floor-2.1.1"
                                },
                                {
                                    "label": "Third floor-2.1.2"
                                }
                            ]
                        },
                        {
                            "label": "Second floor-2.2",
                            "disabled": true,
                            "children": [
                                {
                                    "label": "Third floor-2.2.1"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        _getCheckedData() {
            console.log(this.$refs.tree.getCheckedData());
        },
        _getCheckedLeavesData() {
            console.log(this.$refs.tree.getCheckedData(true));
        },
    },
}
</script>
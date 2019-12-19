<template>
    <div>
        <Button @click="_getSelectedData">get selected data</Button>
        <br />
        <br />
        <Tree :data="data" 
            ref="tree"
            :selectedKeys.sync="selectedKeys"
            :expandedKeys.sync="expandedKeys"
            multiple
        />
    </div>
</template>
<script>
import Tree from 'kpc-vue/components/tree';
import Button from 'kpc-vue/components/button';

export default {
    components: {
        Tree, Button
    },
    data() {
        return {
            "selectedKeys": [
                "floor-2.1.1"
            ],
            "expandedKeys": [
                "floor-2",
                "floor-2.1",
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
                    "key": "floor-2",
                    "children": [
                        {
                            "label": "Second floor-2.1",
                            "key": "floor-2.1",
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
        _getSelectedData() {
            console.log(this.$refs.tree.getSelectedData());
        },
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
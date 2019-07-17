<template>
    <Tree :data="data" 
        checkbox
        :checkedKeys.sync="checkedKeys"
        uncorrelated
    />
</template>
<script>
import Tree from 'kpc/components/tree';

export default {
    components: {
        Tree
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
}
</script>
<style lang="stylus" src="./index.styl"></style>
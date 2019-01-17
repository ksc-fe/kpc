<template>
    <div class="wrapper">
        <div class="c-clearfix">
            <ButtonGroup>
                <Button icon size="small" @click="_appendToRoot">+</Button>
            </ButtonGroup>
        </div>
        <Tree :data="data" ref="tree" checkbox>
            <template slot="label" slot-scope="data, node">
                <span class="k-text">{{ data.label }}</span>
                <ButtonGroup v-if="!data.disabled">
                    <Button icon size="small" @click="_append(node)">+</Button>
                    <Button icon size="small" @click="_remove(node)">-</Button>
                </ButtonGroup>
                <div v-else-if="a">test</div>
                <div v-else>aaa</div>
            </template>
        </Tree>
    </div>
</template>
<script>
import Tree from 'kpc/components/tree';
import {Button, ButtonGroup} from 'kpc/components/button';

export default {
    components: {
        Tree, Button, ButtonGroup
    },
    data() {
        return {
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
        _append(node) {
            node.append({
                label: 'Appended node',
            });
        },
        _remove(node) {
            node.remove();
        },
        _appendToRoot() {
            this.$refs.tree.root.append({
                label: 'Appended root node'
            });
        },
    },
}
</script>
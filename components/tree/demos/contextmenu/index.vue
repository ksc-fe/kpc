<template>
    <div>
        <Tree 
            :data="[
                {
                    label: 'First floor-1',
                    children: [
                        {
                            label: 'Second floor-1.1',
                            children: [
                                {
                                    label: 'Third floor-1.1.1'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'First floor-2',
                    key: '2',
                    children: [
                        {
                            label: 'Second floor-2.1',
                            children: [
                                {
                                    label: 'Third floor-2.1.1',
                                    key: '2-1' 
                                },
                                {
                                    label: 'Third floor-2.1.2'
                                }
                            ]
                        },
                        {
                            label: 'Second floor-2.2',
                            disabled: true,
                            children: [
                                {
                                    label: 'Third floor-2.2.1'
                                }
                            ]
                        }
                    ]
                }
            ]"
            :expandedKeys.sync="expandedKeys"
            @rightclick:node="_showMenu"
        />
        <DropdownMenu v-model="show"
            :of="event"
            :position="{my: 'left+1 top', at: 'right bottom'}"
        >
            <DropdownItem @select="_appendNode">Append</DropdownItem>
            <DropdownItem @select="_removeNode">Remove</DropdownItem>
        </DropdownMenu>
    </div>
</template>
<script>
import Tree from 'kpc/components/tree';
import {DropdownMenu, DropdownItem} from 'kpc/components/dropdown';

export default {
    components: {
        Tree, DropdownMenu, DropdownItem
    },
    data() {
        return {
            "event": null,
            "expandedKeys": [
                "2",
                "2-1"
            ],
            "show": false,
            "node": null
        }
    },
    methods: {
        _showMenu(node, e) {
            e.preventDefault();
            this.show = true;
            this.event = e;
            this.node = node;
        },
        _appendNode() {
            this.node.append({
                label: 'Appended node',
            });
        },
        _removeNode() {
            this.node.remove();
        },
    },
}
</script>
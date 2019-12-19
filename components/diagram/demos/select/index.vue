<template>
    <Diagram @selectionChanged="_onSelect">
        <DTreeLayout type="vertical">
            <DCircle v-for="node in nodes"
                :key="node.key"
                :label="node.label"
                :selectable="node.selectable"
                :data="node.data"
            />
            <DLine v-for="line in lines"
                :from="line.from"
                :to="line.to"
                type="rounded"
            />
        </DTreeLayout>
    </Diagram>
</template>
<script>
import {Diagram, DTreeLayout, DCircle, DLine, DText} from 'kpc/components/diagram';
import Message from 'kpc/components/message';

export default {
    components: {
        Diagram, DTreeLayout, DCircle, DLine, DText
    },
    data() {
        return {
            "data": {
                "key": "Database",
                "children": [
                    {
                        "key": "Table1",
                        "children": [
                            {
                                "key": "Column1-1"
                            },
                            {
                                "key": "Column1-2"
                            }
                        ]
                    },
                    {
                        "key": "Table2",
                        "disabled": true,
                        "children": [
                            {
                                "key": "Column2-1"
                            },
                            {
                                "key": "Column2-2"
                            }
                        ]
                    }
                ]
            },
            nodes: [],
            lines: [],
        }
    },

    watch: {
        data: {
            immediate: true,
            handler() {
                const nodes = [];
                const lines = [];
                const loop = (children, parent, disabled) => {
                    for (let i = 0; i < children.length; i++) {
                        const data = children[i];

                        // if parent is disabled, disable all children
                        if (!disabled && data.disabled) disabled = true; 

                        nodes.push({
                            key: data.key, 
                            label: data.key,
                            selectable: !disabled,
                            data: data
                        });

                        // add line if it has parent
                        if (parent) {
                            lines.push({from: parent.key, to: data.key});
                        }
                        if (data.children) {
                            loop(data.children, data, disabled);
                        }
                    }
                };
                loop([this.data]);

                this.nodes = nodes;
                this.lines = lines;
            }
        }
    },

    methods: {
        _onSelect(shapes) {
            if (!shapes.length) {
                Message.info('You selected nothing.');
            } else {
                const data = shapes[0].data;
                Message.info(`You selected ${data.key}.`);
            }
        },
    },
}
</script>
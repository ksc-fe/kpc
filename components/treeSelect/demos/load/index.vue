<template>
    <TreeSelect :data="data" 
        :load="_loadData"
    />
</template>
<script>
import {TreeSelect} from 'kpc-vue/components/treeSelect';

export default {
    components: {
        TreeSelect
    },
    data() {
        return {
            "data": [
                {
                    "label": "parent",
                    "key": "1",
                    "children": [
                        {
                            "label": "first child",
                            "children": [],
                            "key": "1.1"
                        },
                        {
                            "label": "last child",
                            "children": [],
                            "loaded": true,
                            "key": "1.2"
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        _loadData(node) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve([
                        {label: `child ${node.key}.1`, children: [], key: `${node.key}.1`},
                        {label: `child ${node.key}.2`, key: `${node.key}.2`},
                    ]);
                }, 1000);
            });
        },
    },
}
</script>
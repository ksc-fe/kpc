<template>
    <Tree :data="data" 
        checkbox
        :load="_loadData"
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
            "data": [
                {
                    "label": "parent",
                    "children": []
                }
            ]
        }
    },
    methods: {
        _loadData(node) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve([
                        {label: 'child1', children: []},
                        {label: 'child2'},
                    ]);
                }, 1000);
            });
        },
    },
}
</script>
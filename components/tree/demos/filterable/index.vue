<template>
    <div>
        <Input v-model="keywords" placeholder="Please enter keywords to filter node."/>
        <Tree 
            :data="[
                {
                    label: 'First floor-1',
                    key: '1',
                    children: [
                        {
                            label: 'Second floor-1.1',
                            key: '1-1',
                            children: [
                                {
                                    label: 'Third floor-1.1.1',
                                    key: '1-1-1'
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
                            key: '2-1',
                            children: [
                                {
                                    label: 'Third floor-2.1.1',
                                    key: '2-1-1' 
                                },
                                {
                                    label: 'Third floor-2.1.2',
                                    key: '2-1-2'
                                }
                            ]
                        },
                        {
                            label: 'Second floor-2.2',
                            disabled: true,
                            key: '2-2',
                            children: [
                                {
                                    label: 'Third floor-2.2.1',
                                    key: '2-2-1'
                                }
                            ]
                        }
                    ]
                }
            ]"
            :expandedKeys.sync="expandedKeys"
            :filter="_filter"
        />
    </div>
</template>
<script>
import Tree from 'kpc-vue/components/tree';
import Input from 'kpc-vue/components/input';

export default {
    components: {
        Tree, Input
    },
    data() {
        return {
            "keywords": null,
            "expandedKeys": [
                "2",
                "2-1"
            ]
        }
    },
    methods: {
        _filter(data) {
            const keywords = this.keywords;
            if (!keywords) return true;
            return data.label.includes(keywords);
        },
    },
}
</script>
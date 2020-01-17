<template>
    <TreeSelect
        v-model="values"
        checkbox
        :data="[
            {
                label: 'First floor-1',
                key: '1',
                children: [
                    {
                        label: 'Second floor-1.1',
                        key: '1.1',
                        children: [
                            {
                                label: 'Third floor-1.1.1',
                                key: '1.1.1'
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
                        key: '2.1',
                        children: [
                            {
                                label: 'Third floor-2.1.1',
                                key: '2.1.1' 
                            },
                            {
                                label: 'Third floor-2.1.2',
                                key: '2.1.2'
                            }
                        ]
                    },
                    {
                        label: 'Second floor-2.2',
                        disabled: true,
                        key: '2.2',
                        children: [
                            {
                                label: 'Third floor-2.2.1',
                                key: '2.2.1'
                            }
                        ]
                    }
                ]
            }
        ]"
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
            "values": null
        }
    },
}
</script>
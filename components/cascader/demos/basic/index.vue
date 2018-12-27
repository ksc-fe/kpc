<template>
    <div>
        <Cascader :data="data" v-model="value" />
        You selected: {{ stringify(value) }}
    </div>
</template>
<script>
import Cascader from 'kpc/components/cascader';

export default {
    components: {
        Cascader
    },
    data() {
        return {
            "data": [
                {
                    "value": "beijing",
                    "label": "北京",
                    "children": [
                        {
                            "value": "haidian",
                            "label": "海淀区"
                        },
                        {
                            "value": "chaoyang",
                            "label": "朝阳区"
                        },
                        {
                            "value": "fengtai",
                            "label": "丰台区"
                        }
                    ]
                },
                {
                    "value": "hunan",
                    "label": "湖南",
                    "children": [
                        {
                            "value": "changsha",
                            "label": "长沙市",
                            "children": [
                                {
                                    "value": "yuelu",
                                    "label": "岳麓区"
                                }
                            ]
                        },
                        {
                            "value": "yueyang",
                            "label": "岳阳市",
                            "children": [
                                {
                                    "value": "yueyanglou",
                                    "label": "岳阳楼区"
                                },
                                {
                                    "value": "yueyangxian",
                                    "label": "岳阳县"
                                }
                            ]
                        }
                    ]
                }
            ],
            "value": null
        }
    },
    methods: {
        stringify(data) { return JSON.stringify(data); },
    },
}
</script>
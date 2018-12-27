<template>
    <Cascader :data="data" clearable>
        <template slot="format" slot-scope="values">
            <div v-if="values.length">
                <i class="ion-ios-location" style="line-height: 1; margin-right: 8px;"></i>
                {{ values[values.length - 1].label }}
            </div>
        </template>
    </Cascader>
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
            ]
        }
    },
}
</script>
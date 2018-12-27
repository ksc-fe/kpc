<template>
    <div>
        <div class='no-data-template'>
            <Table :scheme="{a: 'radio不指定rowKey'}"
                :data="data1"
                :checkedKey="0"
                checkType='radio'
            />
            <Table :scheme="{text: 'radio指定为item的id'}" 
                :data="data2" 
                checkType='radio' 
                :rowKey="setRowKey"  
                checkedKey="yes"
            />
        </div>
        <div class='no-data-template'>
            <Table :scheme="{a: 'checkbox不指定rowKey'}" 
                :data="data3" 
                :checkedKeys="[0, 2]"
            />
            <Table :scheme="{text: 'checkbox指定为item的id'}" 
                :data="data2" 
                :rowKey="setRowKey" 
                :checkedKeys="['yes']"
            />
        </div>
    </div>
</template>
<script>
import Table from 'kpc/components/table';

export default {
    components: {
        Table
    },
    data() {
        return {
            "data1": [
                {
                    "a": "赋默认值选中"
                },
                {
                    "a": "不选中"
                }
            ],
            "data2": [
                {
                    "text": "选中",
                    "id": "yes"
                },
                {
                    "text": "不选中",
                    "id": "no"
                }
            ],
            "data3": [
                {
                    "a": "赋默认值选中"
                },
                {
                    "a": "不选中"
                },
                {
                    "a": "赋默认值选中，可设置多个"
                }
            ]
        }
    },
    methods: {
        setRowKey(value, index) {
            return value.id;
        },
    },
}
</script>
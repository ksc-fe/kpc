<template>
    <div>
        <Table :scheme="scheme" :data="data1" ref="__checkbox" />
        <Table :scheme="scheme" :data="data2" checkType="radio" ref="__radio" />
        <Table :scheme="scheme" :data="data3" checkType="none" />
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
            "scheme": {
                "a": "表头"
            },
            "data1": [
                {
                    "a": "多选1"
                },
                {
                    "a": "多选2"
                }
            ],
            "data2": [
                {
                    "a": "单选1"
                },
                {
                    "a": "单选2"
                }
            ],
            "data3": [
                {
                    "a": "不可选1"
                },
                {
                    "a": "不可选2"
                }
            ]
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
<template>
    <Table :scheme="{a: '奇数行不可点击'}"
        :data="[{a: '1'}, {a: '2'}, {a: '3'}, {a: '4'}, {a: '5'}]"
        :disableRow="(data, index) => index % 2 === 0"
        :checkedKeys.sync="checkedKeys"
        :rowKey="data => data.a"
        ref="__test"
    />
</template>
<script>
import Table from 'kpc-vue/components/table';

export default {
    components: {
        Table
    },
    data() {
        return {
            "checkedKeys": [
                "3"
            ]
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
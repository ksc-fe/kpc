<template>
    <div>
        <Table :scheme="{a: '类型', b: '属性'}"
            :data="data1"
            type="border" 
        />
        <Table :scheme="{a: '类型', b: '属性'}"
            :data="data2"
            type="grid" 
        />
    </div>
</template>
<script>
import Table from 'kpc-vue/components/table';

export default {
    components: {
        Table
    },
    data() {
        return {
            "data1": [
                {
                    "a": "border类型",
                    "b": "type=\"border\""
                }
            ],
            "data2": [
                {
                    "a": "grid类型",
                    "b": "type=\"grid\""
                }
            ]
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
<template>
    <div class="wrapper">
        <Table :scheme="{a: '100px'}" 
            :data="[{a: '表头固定，但内容没有超出最高高度'}]"
            fixHeader="100"
        />
        <Table :scheme="{a: '100px' }" 
            :data="[{a: '表头固定啦'}, {a: '下拉'}, {a: 'yeah!'}]"
            fixHeader="100" 
        />
    </div>
</template>
<script>
import Table from 'kpc-vue/components/table';

export default {
    components: {
        Table
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
<template>
    <Table :scheme="{a: '奇数行不可点击'}"
        :data="[{a: '1'}, {a: '2'}, {a: '3'}, {a: '4'}, {a: '5'}]"
        :disableRow="(data, index) => index % 2 !== 0"
    />
</template>
<script>
import Table from 'kpc/components/table';

export default {
    components: {
        Table
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
<template>
    <div>
        <Table :scheme="{a: '偶数行背景变换'}" 
            :data="[{a: '1'}, {a: '2'}, {a: '3'}, {a: '4'}, {a: '5'}]" 
            :rowClassName="(value, index) => index % 2 === 0 ? 'odd' : 'even'"
        />
        <Table :scheme="{a: '偶数行背景变换'}" 
            :data="[{a: '1'}, {a: '2'}, {a: '3'}, {a: '4'}, {a: '5'}]" 
            stripe
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
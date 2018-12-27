<template>
    <Table :scheme="{a: '类型'}" :data="[{a: 'border类型'}]" type="border" />
</template>
<script>
import Table from 'kpc/components/table';

export default {
    components: {
        Table
    },
}
</script>
<template>
    <Split mode="vertical" lastSize="80px">
        <template slot="first"><div class="panel">top</div></template>
        <template slot="last"><div class="panel">bottom</div></template>
    </Split>
</template>
<script>
import Split from 'kpc/components/split';

export default {
    components: {
        Split
    },
}
</script>
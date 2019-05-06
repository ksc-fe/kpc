<template>
    <Split min="40" max="50%+10" firstSize="80px">
        <template slot="first"><div class="panel">left</div></template>
        <template slot="last"><div class="panel">right</div></template>
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
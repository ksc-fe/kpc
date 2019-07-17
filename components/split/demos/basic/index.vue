<template>
    <div>
        <Split>
            <template slot="first"><div class="panel">left</div></template>
            <template slot="last"><div class="panel">right</div></template>
        </Split>
        <Split firstSize="80px">
            <template slot="first"><div class="panel">left</div></template>
            <template slot="last"><div class="panel">right</div></template>
        </Split>
        <Split lastSize="80px">
            <template slot="first"><div class="panel">left</div></template>
            <template slot="last"><div class="panel">right</div></template>
        </Split>
    </div>
</template>
<script>
import Split from 'kpc/components/split';

export default {
    components: {
        Split
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
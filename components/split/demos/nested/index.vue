<template>
    <div class="wrapper">
        <Split>
            <template slot="first">
                <div class="panel">left</div>
            </template>
            <template slot="last">
                <Split mode="vertical">
                    <template slot="first">
                        <div class="panel">right top</div>
                    </template>
                    <template slot="last">
                        <div class="panel">right bottom</div>
                    </template>
                </Split>
            </template>
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
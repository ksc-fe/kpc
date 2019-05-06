<template>
    <Collapse>
        <CollapseItem title="aaa">
            <span slot="title">xxx</span>
            <!-- <div>aaa</div> -->
            <!-- <div>bbb</div> -->
        </CollapseItem>
    </Collapse>
</template>

<style lang='stylus'>
.k-wrapper
    padding 0 !important
</style>

<script>
import {Collapse, CollapseItem} from 'kpc/components/collapse';

export default {
    data() {
        return {
        }
    },

    components: {
        Collapse, CollapseItem
    },
}
</script>

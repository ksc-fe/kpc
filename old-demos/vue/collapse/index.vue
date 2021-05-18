<template>
    <Collapse>
        <CollapseItem title="aaa">
            <span slot="title">xxx</span>
            <!-- <div>aaa</div> -->
            <!-- <div>bbb</div> -->
        </CollapseItem>
    </Collapse>
</template>

<script>
import {Collapse, CollapseItem} from 'kpc/components/collapse';
import './index.styl';

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

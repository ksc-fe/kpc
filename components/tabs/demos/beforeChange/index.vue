<template>
    <div>
        <Tabs v-model="tab" :beforeChange="beforeChange">
            <Tab value="rulein">入站规则</Tab>
            <Tab value="ruleout">出站规则</Tab>
            <Tab value="relatedVM">关联云主机</Tab>
        </Tabs>
    
        <div class="content">
            <div v-if="tab === 'rulein'">入站规则</div>
            <div v-else-if="tab === 'ruleout'">出站规则</div>
            <div v-else>关联云主机</div> 
        </div>
    </div>
</template>
<script>
import {Tabs, Tab} from 'kpc-vue/components/tabs';

import Dialog from 'kpc-vue/components/dialog';

export default {
    components: {
        Tabs, Tab
    },
    data() {
        return {
            "tab": "ruleout"
        }
    },
    methods: {
        beforeChange(value) {
            return new Promise(resolve => {
                Dialog.confirm({
                    content: `Are you sure to change to "${value}"`
                }).then(() => {
                    resolve(true);
                }, () => {
                    resolve(false);
                });
            });
        },
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
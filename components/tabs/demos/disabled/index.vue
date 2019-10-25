<template>
    <div>
        <Tabs v-model="tab">
            <Tab value="rulein">入站规则</Tab>
            <Tab value="ruleout" disabled>出站规则</Tab>
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
import {Tabs, Tab} from 'kpc/components/tabs';

export default {
    components: {
        Tabs, Tab
    },
    data() {
        return {
            "tab": null
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
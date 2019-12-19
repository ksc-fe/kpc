<template>
    <div>
        <Tabs v-model="tab" vertical>
            <Tab value="rulein">入站规则</Tab>
            <Tab value="ruleout">出站规则</Tab>
            <Tab value="relatedVM">关联云主机</Tab>
        </Tabs>
        <Tabs v-model="tab" vertical type="card">
            <Tab value="rulein">入站规则</Tab>
            <Tab value="ruleout">出站规则</Tab>
            <Tab value="relatedVM">关联云主机</Tab>
        </Tabs>
        <Tabs v-model="tab" vertical type="border-card">
            <Tab value="rulein">入站规则</Tab>
            <Tab value="ruleout">出站规则</Tab>
            <Tab value="relatedVM">关联云主机</Tab>
        </Tabs>
        <Tabs v-model="tab" vertical type="no-border-card">
            <Tab value="rulein">入站规则</Tab>
            <Tab value="ruleout">出站规则</Tab>
            <Tab value="relatedVM">关联云主机</Tab>
        </Tabs>
    </div>
</template>
<script>
import {Tabs, Tab} from 'kpc-vue/components/tabs';

export default {
    components: {
        Tabs, Tab
    },
    data() {
        return {
            "tab": "rulein"
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
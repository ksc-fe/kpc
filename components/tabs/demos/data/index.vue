<template>
    <div>
        <Tabs 
            :data="[
                {
                    text: '入站规则',
                    value: 'rulein'
                },
                {
                    text: '出站规则',
                    value: 'ruleout'
                },
                {
                    text: '关联云主机',
                    value: 'relatedVM'
                }
            ]" 
            v-model="tab"  
        />
    
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
            "tab": "ruleout"
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
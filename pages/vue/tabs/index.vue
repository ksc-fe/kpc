<template>
    <div>
        <Tabs :data="data" />
    </div>
</template>

<script>
import Tabs from 'components/tabs';

export default {
    data() {
        return {
            data: [
                {
                    text: '入站规则',
                    value: 'rulein',
                },
                {
                    text: '出站规则',
                    value: 'ruleout',
                },
                {
                    text: '关联云主机',
                    value: 'relatedVM',
                }
            ]
        }
    },

    components: {
        Tabs
    },
}
</script>

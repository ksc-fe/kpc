<template>
    <div>
        <ButtonGroup v-model="size" checkType="radio">
            <Button v-for="(value, key) in ['large', 'default', 'small', 'mini']"
                :value="value"
            >{{ value }}</Button>
        </ButtonGroup>
        <br /><br />
        <Button @click="_add">新增Tab</Button>
        <Tabs v-model="tab"
            :closable="tabs.length > 1"
            @remove="_remove"
            v-for="(value, key) in ['default', 'card', 'border-card', 'no-border-card']"
            :type="value"
            :size="size"
        >
            <Tab v-for="(value, key) in tabs"
                :value="value.value"
                :key="value.value"
                :closable="value.value !== 10"
            >{{ value.label }}</Tab>
        </Tabs>
    </div>
</template>
<script>
import {Tabs, Tab} from 'kpc/components/tabs';
import {Button, ButtonGroup} from 'kpc/components/button';

export default {
    components: {
        Tabs, Tab, Button, ButtonGroup
    },
    data() {
        return {
            "tabs": [
                {
                    "value": 1,
                    "label": "Tab 1"
                },
                {
                    "value": 2,
                    "label": "Tab 2"
                },
                {
                    "value": 3,
                    "label": "Tab 3"
                }
            ],
            "size": "large",
            "tab": 1
        }
    },
    methods: {
        _remove(value) {
            const index = this.tabs.findIndex(item => item.value === value);
            this.tabs.splice(index, 1);
        
            // 如果删除当前tab，则切换至下一个
            if (value === this.tab) {
                this.tab = (this.tabs[index] || this.tabs[index - 1]).value
            }
        },
        _add() {
            const id = ++this.id;
            this.tabs.push({
                value: id,
                label: `Tab ${id}`,
            });
            this.tab = id;
        },
    },
    beforeCreate() {
        this.id = 3;
    }
}
</script>
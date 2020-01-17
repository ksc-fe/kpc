<template>
    <div>
        <div>
            <span class="label">border:</span>
            <Select v-model="type">
                <Option v-for="(value, key) in ['solid', 'dashed', 'dotted']"
                    :value="value"
                >
                    <div :style="{borderBottom: `1px ${value} #666`}" class="line"></div>
                </Option>
                <template slot="value" slot-scope="value, label">
                    <div :style="{borderBottom: `1px ${value} #666`}" class="line"></div>
                </template>
            </Select>
            <div :style="{border: `1px ${type} #b2b2b2`}" class="rect">
                Rectangle
            </div>
        </div>
        <div>
            <span class="label">multiple:</span>
            <Select v-model="icons" multiple>
                <Option v-for="(value, key) in ['ion-chatbubble', 'ion-person-stalker', 'ion-beer', 'ion-camera']"
                    :value="value"
                >
                    <Icon :class="value" />
                </Option>
                <template slot="value" slot-scope="value, label">
                    <Icon :class="value" />
                    <span class="c-middle">{{ value }}</span>
                </template>
            </Select>
        </div>
    </div>
</template>
<script>
import {Select, Option} from 'kpc-vue/components/select';
import {Icon} from 'kpc-vue/components/icon';

export default {
    components: {
        Select, Option, Icon
    },
    data() {
        return {
            "type": "dashed",
            "icons": [
                "ion-camera"
            ]
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
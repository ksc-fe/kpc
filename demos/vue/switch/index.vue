<template>
    <div style="margin: 10px;">
        <KSwitch @click="click" />
        <KSwitch :value="true"/>
        <br />
        <KSwitch on="开" off="关" v-model="status1" />
        <span>status1: {{ JSON.stringify(status1) }}</span>
        <KSwitch width="100" height="30" v-model="status2"
            trueValue="on"
            falseValue="off"
            class="big-switch"
        >
            <template slot="on">开启主机</template>
            <template slot="off">关闭主机</template>
        </KSwitch>
        <span>status2: {{ JSON.stringify(status2) }}</span>
        <br />
        <KSwitch size="default" />
        <KSwitch size="small" on="开" off="关"/>
        <KSwitch size="mini" />
        <br />
        <KSwitch disabled />
        <KSwitch disabled :value="true" />
        <KSwitch disabled off="关" />
    </div>
</template>

<script>
import Switch from 'components/switch';

export default {
    data() {
        return {
            status1: undefined,
            status2: undefined,
        }
    },

    components: {
        // switch is a reserved svg tagname
        KSwitch: Switch
    },

    methods: {
        click() {
            console.log('click')
        }
    }
}
</script>

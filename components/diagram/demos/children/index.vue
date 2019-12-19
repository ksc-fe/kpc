<template>
    <Diagram>
        <DTreeLayout>
            <DRectangle key="from" strokeStyle="dashed" height="100">
                <div class="container">
                    <div>始发站</div>
                    <Select v-model="from" fluid>
                        <Option v-for="(value, key) in cities" :value="value.value">
                            {{ value.name }}
                        </Option>
                    </Select>
                </div>
            </DRectangle>
            <DRectangle key="to" strokeStyle="dashed" height="100">
                <div class="container">
                    <div>终点站</div>
                    <Select v-model="to" fluid>
                        <Option v-for="(value, key) in cities" :value="value.value">
                            {{ value.name }}
                        </Option>
                    </Select>
                </div>
            </DRectangle>
            <DLine from="from" to="to" />
        </DTreeLayout>
    </Diagram>
</template>
<script>
import {Diagram, DTreeLayout, DRectangle, DLine} from 'kpc-vue/components/diagram';
import {Select, Option} from 'kpc-vue/components/select';

export default {
    components: {
        Diagram, DTreeLayout, DRectangle, DLine, Select, Option
    },
    data() {
        return {
            "from": "",
            "to": "",
            "cities": [
                {
                    "name": "北京",
                    "value": "beijing"
                },
                {
                    "name": "上海",
                    "value": "shanghai"
                },
                {
                    "name": "深圳",
                    "value": "shenzhen"
                }
            ]
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
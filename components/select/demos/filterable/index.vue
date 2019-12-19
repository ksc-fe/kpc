<template>
    <div>
        <Select v-model="day" filterable>
            <Option value="Monday">星期一</Option>
            <Option value="Tuesday">星期二</Option>
            <Option value="Wednesday">星期三</Option>
            <Option value="Thursday">星期四</Option>
            <Option value="Friday">星期五</Option>
            <Option value="Saturday">星期六</Option>
            <Option value="Sunday">星期天</Option>
        </Select>
        <Select v-model="days" filterable multiple>
            <Option value="Monday">星期一</Option>
            <Option value="Tuesday">星期二</Option>
            <Option value="Wednesday">星期三</Option>
            <Option value="Thursday">星期四</Option>
            <Option value="Friday">星期五</Option>
            <Option value="Saturday">星期六</Option>
            <Option value="Sunday">星期天</Option>
        </Select>
        <Select v-model="day1" filterable 
            :filter="(keywords, item) => !keywords || item.label.includes(keywords)"
        >
            <Option value="Monday">星期一</Option>
            <Option value="Tuesday">星期二</Option>
            <Option value="Wednesday">星期三</Option>
            <Option value="Thursday">星期四</Option>
            <Option value="Friday">星期五</Option>
            <Option value="Saturday">星期六</Option>
            <Option value="Sunday">星期天</Option>
        </Select>
    </div>
</template>
<script>
import {Select, Option} from 'kpc-vue/components/select';

export default {
    components: {
        Select, Option
    },
    data() {
        return {
            "day": null,
            "days": null,
            "day1": null
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
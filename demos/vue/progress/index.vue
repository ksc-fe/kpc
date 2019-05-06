<template>
    <div class='progress-demo'>
        <div class='progress-container'>
            <Progress :percent="percent" size="mini"></Progress>
            <Progress :percent="percent"></Progress>
            <Progress :percent="percent" size="small"></Progress>
            <Progress :percent="percent" isInnerText></Progress>
        </div>
        <div class='k-btns'>
            <Button size="mini" class="k-btn" type="default" @click="add">+</Button>
            <Button size="mini" class="k-btn" type="default" @click="min">-</Button>
        </div>

        <Progress :percent="percent" type="circle" />
        <Progress :percent="percent" type="circle" size="small" />
        <Progress :percent="percent" type="circle" size="mini" />

        <Progress :percent="percent" type="circle">
            <div style="font-size: 14px; line-height: 20px;" v-if="percent !== 100">
                正在上传<br />
                {{ percent }}%
            </div>
            <div style="font-size: 14px; line-height: 20px; color: #4db500;" v-else>
                上传完成
            </div>
        </Progress>
    </div>
</template>

<script>
import Progress from 'components/progress';
import Button from 'components/button';

export default {
    data() {
        return {
            percent: 35,
        }
    },

    components: {
        Progress, Button
    },

    methods: {
        add() {
            this.percent += 10;
            if (this.percent > 100) this.percent = 100;
        },

        min() {
            this.percent -= 10;
            if (this.percent < 0) this.percent = 0;
        }
    }
}
</script>

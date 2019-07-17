<template>
    <div>
        <Progress :percent="percent" type="circle">
            <div style="font-size: 14px; line-height: 20px;" v-if="percent !== 100">
                正在上传<br />
                {{ percent }}%
            </div>
            <div style="font-size: 14px; line-height: 20px; color: #4db500;" v-else>
                上传完成
            </div>
        </Progress>
        <ButtonGroup>
            <Button size="mini" icon @click="add">+</Button>
            <Button size="mini" icon @click="minus">-</Button>
        </ButtonGroup>
    </div>
</template>
<script>
import Progress from 'kpc/components/progress';
import {ButtonGroup, Button} from 'kpc/components/button';

export default {
    components: {
        Progress, ButtonGroup, Button
    },
    data() {
        return {
            "percent": 40
        }
    },
    methods: {
        add() {
            if (this.percent >= 100) return;
            this.percent += 10;
        },
        minus() {
            if (this.percent <= 0) return;
            this.percent -= 10;
        },
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
<template>
    <div>
        <Button type="primary" loading>确认</Button>
        <Button icon circle loading><i class="k-icon ion-ios-search"></i></Button>
        <br /> <br />
        <Button type="primary" 
            :loading="loading1"
            @click="onClick('loading1')"
        >点击加载</Button>
        <Button type="primary" 
            :loading="loading2"
            @click="onClick('loading2')"
        ><Icon class="ion-ios-search" />点击加载</Button>
        <Button icon circle
            :loading="loading3"
            @click="onClick('loading3')"
        ><Icon class="ion-ios-search" /></Button>
        <Button type="primary" 
            :loading="loading4"
            @click="onClick('loading4')"
        >图标在右侧<Icon class="ion-ios-search" /></Button>
    </div>
</template>
<script>
import Button from 'kpc/components/button';
import Icon from 'kpc/components/icon';

export default {
    components: {
        Button, Icon
    },
    data() {
        return {
            "loading1": null,
            "loading2": null,
            "loading3": null,
            "loading4": null
        }
    },
    methods: {
        onClick(name) {
            this[name] = true;
        },
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
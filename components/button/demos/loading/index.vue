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
        ><i class="k-icon ion-ios-search"></i>点击加载</Button>
        <Button icon circle
            :loading="loading3"
            @click="onClick('loading3')"
        ><i class="k-icon ion-ios-search"></i></Button>
        <Button type="primary" 
            :loading="loading4"
            @click="onClick('loading4')"
        >图标在右侧<i class="k-icon ion-ios-search"></i></Button>
    </div>
</template>
<script>
import Button from 'kpc/components/button';

export default {
    components: {
        Button
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
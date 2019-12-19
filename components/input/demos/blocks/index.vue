<template>
    <div>
        <Input placeholder="please enter">
            <template slot="prepend">http://</template>
            <template slot="append">.com</template>
        </Input>
        <Input placeholder="please enter">
            <template slot="append"><Button icon type="none"><i class="ion-ios-search"></i></Button></template>
        </Input>
        <Input placeholder="please enter">
            <template slot="append"><Button icon type="primary"><i class="ion-ios-search"></i></Button></template>
        </Input>
        <Input placeholder="please enter">
            <template slot="append"><Button type="primary">搜索</Button></template>
        </Input>
        <Input placeholder="please enter">
            <template slot="prefix"><i class="ion-earth"></i></template>
            <template slot="suffix"><i class="ion-ios-search"></i></template>
        </Input>
        <Input placeholder="please enter">
            <template slot="prepend">http://</template>
            <template slot="append">.com</template>
            <template slot="prefix"><i class="ion-earth"></i></template>
            <template slot="suffix"><i class="ion-ios-search"></i></template>
        </Input>
    </div>
</template>
<script>
import Input from 'kpc-vue/components/input';
import Button from 'kpc-vue/components/button';

export default {
    components: {
        Input, Button
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
<template>
    <div>
        <Input size="large" value="large" />
        <br />
        <Input value="default" />
        <br />
        <Input value="small" size="small" />
        <Input size="small" placeholder="please enter">
            <template slot="prepend">http://</template>
            <template slot="append">.com</template>
        </Input>
        <Input size="small" placeholder="please enter">
            <template slot="prefix"><i class="ion-earth"></i></template>
            <template slot="suffix"><i class="ion-ios-search"></i></template>
            <template slot="append"><Button size="small" icon type="primary"><i class="ion-ios-search"></i></Button></template>
        </Input>
        <Input size="small" placeholder="please enter" clearable>
            <template slot="append"><Button type="primary" size="small">Search</Button></template>
        </Input>
    
        <Input value="mini" size="mini" />
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
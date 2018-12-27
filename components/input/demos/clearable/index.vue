<template>
    <div>
        <Input clearable placeholder="please enter" />
        <br />
        <Input clearable placeholder="please enter">
            <template slot="suffix"><i class="ion-ios-search"></i></template>
        </Input>
    </div>
</template>
<script>
import Input from 'kpc/components/input';

export default {
    components: {
        Input
    },
}
</script>
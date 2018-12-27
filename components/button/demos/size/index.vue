<template>
    <div>
        <Button size="large">large</Button>
        <Button>default</Button>
        <Button size="small">small</Button>
        <Button size="mini">mini</Button>
        <br /><br />
        <Button icon circle size="large"><i class="k-icon ion-ios-search"></i></Button>
        <Button icon circle><i class="k-icon ion-ios-search"></i></Button>
        <Button icon circle size="small"><i class="k-icon ion-ios-search"></i></Button>
        <Button icon circle size="mini"><i class="k-icon ion-ios-search"></i></Button>
    </div>
</template>
<script>
import Button from 'kpc/components/button';

export default {
    components: {
        Button
    },
}
</script>
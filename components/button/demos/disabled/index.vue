<template>
    <div>
        <Button disabled>disabled</Button>
        <Button disabled type="none">disabled text</Button>
        <Button disabled icon circle><i class="k-icon ion-ios-search"></i></Button>
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
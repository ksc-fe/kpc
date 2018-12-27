<template>
    <div>
        <Button>default</Button>
        <Button type="primary">primay</Button>
        <Button type="warning">warning</Button>
        <Button type="danger">danger</Button>
        <Button type="success">success</Button>
        <Button type="none">none</Button>
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
<template>
    <div>
        <Button>default</Button>
        <Button type="primary">primay</Button>
        <Button type="secondary">secondary</Button>
        <Button type="warning">warning</Button>
        <Button type="danger">danger</Button>
        <Button type="success">success</Button>
        <Button type="none">none</Button>
        <Button type="link">link</Button>
    </div>
</template>
<script>
import Button from 'kpc-vue/components/button';

export default {
    components: {
        Button
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
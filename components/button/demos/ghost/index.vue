<template>
    <div class="wrapper">
        <Button ghost>default</Button>
        <Button type="primary" ghost>primay</Button>
        <Button type="warning" ghost>warning</Button>
        <Button type="danger" ghost>danger</Button>
        <Button type="success" ghost>success</Button>
        <Button type="none" ghost>none</Button>
        <Button type="primary" ghost disabled>primay</Button>
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
<style lang="stylus" src="./index.styl"></style>
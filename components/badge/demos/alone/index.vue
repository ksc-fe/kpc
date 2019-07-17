<template>
    <div>
        <Badge />
        <Badge text="new" />
        <Badge :text="19" />
        <Badge :text="100" :max="99" />
    </div>
</template>
<script>
import Badge from 'kpc/components/badge';
import Button from 'kpc/components/button';

export default {
    components: {
        Badge, Button
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
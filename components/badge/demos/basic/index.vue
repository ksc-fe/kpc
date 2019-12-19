<template>
    <div>
        <Badge>Message</Badge>
        <Badge>
            <Button>Message</Button>
        </Badge>
    </div>
</template>
<script>
import Badge from 'kpc-vue/components/badge';
import Button from 'kpc-vue/components/button';

export default {
    components: {
        Badge, Button
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
<template>
    <div>
        <Badge text="new">Message</Badge>
        <Badge :text="6">
            <Button>Message</Button>
        </Badge>
        <Badge :text="19">
            <Button>Message</Button>
        </Badge>
        <Badge :text="100" :max="99">
            <Button>Message</Button>
        </Badge>
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
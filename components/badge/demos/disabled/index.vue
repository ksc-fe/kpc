<template>
    <div>
        <Badge disabled>Message</Badge>
        <Badge disabled>
            <Button>Message</Button>
        </Badge>
        <Badge :text="19" disabled>
            <Button>Message</Button>
        </Badge>
        <Badge :text="100" :max="99" disabled>
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
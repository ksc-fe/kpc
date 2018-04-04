<template>
    <div>
        <ButtonGroup>
            <Button>开机</Button>
            <Button>关机</Button>
            <Button>重启</Button>
        </ButtonGroup>
        <ButtonGroup>
            <Button type="primary" size="small">开机</Button>
            <Button type="primary" size="small">关机</Button>
            <Button type="primary" size="small">重启</Button>
        </ButtonGroup>
        <ButtonGroup vertical>
            <Button type="primary" size="small">开机</Button>
            <Button type="primary" size="small">关机</Button>
            <Button type="primary" size="small">重启</Button>
        </ButtonGroup>
    </div>
</template>
<style src="./index.styl" lang="stylus"></style>
<script>
import {Button, ButtonGroup} from 'kpc/components/button';

export default {
    components: {
        Button, ButtonGroup
    }
}
</script>
<template>
    <div>
        <Input v-model="value" placeholder="please enter" ref="__test" /> {{ value }}
        <br />
        <Input disabled placeholder="disabled" />
    </div>
</template>
<script>
import Input from 'kpc/components/input';

export default {
    components: {
        Input
    },
    data() {
        return {
            "value": null
        }
    },
}
</script>
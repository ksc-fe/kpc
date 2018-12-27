<template>
    <div>
        large: <KSwitch size="large" />
        default: <KSwitch />
        small: <KSwitch size='small' />
        mini: <KSwitch size='mini' />
    </div>
</template>
<script>
import {Switch as KSwitch} from 'kpc/components/switch';

export default {
    components: {
        KSwitch
    },
}
</script>
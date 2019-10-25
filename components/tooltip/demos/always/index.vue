<template>
    <div>
        <Tooltip content="hello" always :value="true">
            always show this tootip 
        </Tooltip>
        <br /><br />
        <Tooltip content="" always :value="true">
            don't show if content is empty
        </Tooltip>
    </div>
</template>
<script>
import Tooltip from 'kpc/components/tooltip';

export default {
    components: {
        Tooltip
    },
}
</script>
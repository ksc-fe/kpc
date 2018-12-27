<template>
    <div>
        <Tooltip content="hello">
            hover the text
        </Tooltip>
        <br /> <br />
        <Tooltip>
            don't show anything if content is empty 
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
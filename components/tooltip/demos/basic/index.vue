<template>
    <div>
        <Tooltip content="hello">
            hover the text
        </Tooltip>
        <br /><br />
        <Tooltip>
            don't show anything if content is empty 
        </Tooltip>
        <br /><br />
        <Tooltip content="hello" theme="light">
            light theme 
        </Tooltip>
        <br /><br />
        <Tooltip content="hello" disabled>
            disabled
        </Tooltip>
    </div>
</template>
<script>
import Tooltip from 'kpc-vue/components/tooltip';

export default {
    components: {
        Tooltip
    },
}
</script>
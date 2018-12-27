<template>
    <ButtonGroup>
        <Tooltip v-for="(value, key) in ['left', 'right', 'top', 'bottom']"
            :content="value"
            :position="value"
        >
            <Button>{{ value }}</Button>
        </Tooltip>
    </ButtonGroup>
</template>
<script>
import Tooltip from 'kpc/components/tooltip';
import {ButtonGroup, Button} from 'kpc/components/button';

export default {
    components: {
        Tooltip, ButtonGroup, Button
    },
}
</script>
<template>
    <div>
        <Menu>
            <div slot="header">test</div>
            <MenuItem key="1">Option 1</MenuItem>
        </Menu>
    </div>
</template>

<script>
import {Menu, MenuItem} from 'components/menu';

export default {
    components: {
        Menu, MenuItem
    },
}
</script>

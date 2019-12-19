<template>
    <Menu :expandedKeys.sync="expandedKeys" theme="light">
        <MenuItem key="1"><Icon class="ion-flag" />menu 1</MenuItem>
        <MenuItem key="2" disabled><Icon class="ion-star" />menu 2</MenuItem>
        <MenuItem key="3">
            <Icon class="ion-heart" />menu 3
            <Menu>
                <MenuItem key="3-1">sub menu 1</MenuItem>
                <MenuItem key="3-2">sub menu 2</MenuItem>
                <MenuItem key="3-3" disabled>sub menu 3</MenuItem>
                <MenuItem key="3-4">sub menu 4</MenuItem>
            </Menu>
        </MenuItem>
        <MenuItem key="4"><Icon class="ion-gear-b" />menu 4</MenuItem>
    </Menu>
</template>
<script>
import {Menu, MenuItem} from 'kpc-vue/components/menu';
import Icon from 'kpc-vue/components/icon';

export default {
    components: {
        Menu, MenuItem, Icon
    },
    data() {
        return {
            "expandedKeys": [
                "3"
            ]
        }
    },
}
</script>
<template>
    <Menu :expandedKeys.sync="expandedKeys" :selectedKey.sync="selectedKey" dot theme="light">
        <template slot="header"><Icon class="ion-star" />Header</template>
        <MenuItem key="1" @select="onSelect">menu 1</MenuItem>
        <MenuItem key="2" disabled>menu 2</MenuItem>
        <MenuItem key="3" :dot="false">
            <Icon class="ion-heart" />menu 3
            <Menu>
                <MenuItem key="3-1">sub menu 1</MenuItem>
                <MenuItem key="3-2">sub menu 2</MenuItem>
                <MenuItem key="3-3" disabled>sub menu 3</MenuItem>
                <MenuItem key="3-4">sub menu 4</MenuItem>
            </Menu>
        </MenuItem>
        <MenuItem key="4" to="/">menu 4</MenuItem>
    </Menu>
</template>
<script>
import {Menu, MenuItem} from 'kpc/components/menu';
import Icon from 'kpc/components/icon';

export default {
    components: {
        Menu, MenuItem, Icon
    },
    data() {
        return {
            "expandedKeys": [
                "3"
            ],
            "selectedKey": "3-1"
        }
    },
    methods: {
        onSelect(item) {
            console.log('key', item.get('key'));
        },
    },
}
</script>
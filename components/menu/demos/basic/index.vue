<template>
    <Menu
        :expandedKeys.sync="expandedKeys" 
        :selectedKey.sync="selectedKey"
    >
        <MenuItem key="1" @select="onSelect">
            <Icon class="ion-flag" />menu 1
            <Menu>
                <MenuItem key="1-1">sub menu 1</MenuItem>
                <MenuItem key="1-2">sub menu 2</MenuItem>
                <MenuItem key="1-3" disabled>sub menu 3</MenuItem>
                <MenuItem key="1-4">sub menu 4</MenuItem>
            </Menu>
        </MenuItem>
        <MenuItem key="2" disabled><Icon class="ion-star" />menu 2</MenuItem>
        <MenuItem key="3">
            <i class="k-icon ion-heart"></i>menu 3
            <Menu>
                <MenuItem key="3-1">sub menu 1</MenuItem>
                <MenuItem key="3-2">sub menu 2</MenuItem>
                <MenuItem key="3-3" disabled>sub menu 3</MenuItem>
                <MenuItem key="3-4">
                    sub menu 4
                    <Menu>
                        <MenuItem key="3-4-1">Option 1</MenuItem>
                        <MenuItem key="3-4-2">Option 2</MenuItem>
                    </Menu>
                </MenuItem>
    
            </Menu>
        </MenuItem>
        <MenuItem key="4" to="/"><Icon class="ion-gear-b" />menu 4</MenuItem>
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
            "expandedKeys": [],
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
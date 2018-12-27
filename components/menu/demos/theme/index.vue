<template>
    <Menu :expandedKeys.sync="expandedKeys" theme="light">
        <MenuItem key="1"><i class="k-icon ion-flag"></i>menu 1</MenuItem>
        <MenuItem key="2" disabled><i class="k-icon ion-star"></i>menu 2</MenuItem>
        <MenuItem key="3">
            <i class="k-icon ion-heart"></i>menu 3
            <Menu>
                <MenuItem key="3-1">sub menu 1</MenuItem>
                <MenuItem key="3-2">sub menu 2</MenuItem>
                <MenuItem key="3-3" disabled>sub menu 3</MenuItem>
                <MenuItem key="3-4">sub menu 4</MenuItem>
            </Menu>
        </MenuItem>
        <MenuItem key="4"><i class="k-icon ion-gear-b"></i>menu 4</MenuItem>
    </Menu>
</template>
<script>
import {Menu, MenuItem} from 'kpc/components/menu';

export default {
    components: {
        Menu, MenuItem
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
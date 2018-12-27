<template>
    <div>
        <KSwitch on="收起" off="展开" v-model="isCollapse" width="60" />
        <KSwitch on="light" off="dark" v-model="theme" width="60" trueValue="light" falseValue="dark"  />
        <KSwitch on="horizontal" off="vertical" v-model="type" width="100" trueValue="horizontal" falseValue="vertical" />
        <ButtonGroup checkType="radio" v-model="size">
            <Button value="large">large</Button>
            <Button value="default">default</Button>
            <Button value="small">small</Button>
        </ButtonGroup>
        <br /><br />
        <Menu :expandedKeys.sync="expandedKeys" 
            :collapse="isCollapse"
            :theme="theme"
            :size="size"
            :type="type"
        >
            <template slot="header"><i class="k-icon ion-star"></i>Header</template>
            <MenuItem key="1"><i class="k-icon ion-flag"></i>menu 1</MenuItem>
            <MenuItem key="2" disabled dot>menu 2</MenuItem>
            <MenuItem key="3">
                <i class="k-icon ion-heart"></i>menu 3
                <Menu>
                    <MenuItem key="3-1">sub menu 1</MenuItem>
                    <MenuItem key="3-2">sub menu 2</MenuItem>
                    <MenuItem key="3-3" disabled>sub menu 3</MenuItem>
                    <MenuItem key="3-4">
                        sub menu 4
                        <Menu>
                            <MenuItem key="3-4-1">option 1</MenuItem>
                            <MenuItem key="3-4-2">option 2</MenuItem>
                        </Menu>
                    </MenuItem>
                </Menu>
            </MenuItem>
            <MenuItem key="4"><i class="k-icon ion-gear-b"></i>menu 4</MenuItem>
        </Menu>
    </div>
</template>
<script>
import {Menu, MenuItem} from 'kpc/components/menu';
import {Switch as KSwitch} from 'kpc/components/switch';
import {ButtonGroup, Button} from 'kpc/components/button';

export default {
    components: {
        Menu, MenuItem, KSwitch, ButtonGroup, Button
    },
    data() {
        return {
            "isCollapse": null,
            "theme": null,
            "size": "large",
            "type": null,
            "expandedKeys": [
                "3"
            ]
        }
    },
}
</script>
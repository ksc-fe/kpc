<template>
    <div>
        <div class="contextmenu-area" @contextmenu="_showMenu">
            right click this area to show context menu
        </div>
        <DropdownMenu v-model="show" 
            :of="event"
            :position="{my: 'left+1 top', at: 'right bottom'}"
        >
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem>Option 3</DropdownItem>
        </DropdownMenu>
    </div>
</template>
<script>
import {DropdownMenu, DropdownItem} from 'kpc/components/dropdown';

export default {
    components: {
        DropdownMenu, DropdownItem
    },
    data() {
        return {
            "event": null,
            "show": false
        }
    },
    methods: {
        _showMenu(event) {
            event.preventDefault();
            this.show = true;
            this.event = event;
        },
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
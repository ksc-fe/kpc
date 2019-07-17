<template>
    <div>
        <Dropdown :position="{my: 'left top', at: 'left bottom+5'}">
            <Button type="primary">
                left <Icon class="ion-ios-arrow-down" />
            </Button>
            <DropdownMenu>
                <DropdownItem>item 1</DropdownItem>
                <DropdownItem>item 2</DropdownItem>
                <DropdownItem>item 3</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    
        <Dropdown :position="{my: 'right top', at: 'right bottom+5'}">
            <Button type="primary">
                right <Icon class="ion-ios-arrow-down" />
            </Button>
            <DropdownMenu>
                <DropdownItem>item 1</DropdownItem>
                <DropdownItem>item 2</DropdownItem>
                <DropdownItem>item 3</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    
        <Dropdown :position="{my: 'center bottom-5', at: 'center top'}">
            <Button type="primary">
                top center <Icon class="ion-ios-arrow-down" />
            </Button>
            <DropdownMenu>
                <DropdownItem>item 1</DropdownItem>
                <DropdownItem>item 2</DropdownItem>
                <DropdownItem>item 3</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>
<script>
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import Button from 'kpc/components/button';
import Icon from 'kpc/components/icon';

export default {
    components: {
        Dropdown, DropdownMenu, DropdownItem, Button, Icon
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
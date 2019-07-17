<template>
    <div>
        <Dropdown>
            <Button type="primary">
                hover <Icon class="ion-ios-arrow-down" />
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
<template>
    <div>
        <Dropdown>
            <Button>DropdownItem with Tooltip</Button>
            <DropdownMenu>
                <Tooltip content="item 1">
                    <DropdownItem>item 1</DropdownItem>
                </Tooltip>
                <DropdownItem>item 2</DropdownItem>
                <Tooltip content="disabled">
                    <DropdownItem disabled>item 3</DropdownItem>
                </Tooltip>
                <Dropdown :position="{my: 'left top', at: 'right top'}">
                    <div>
                        <Tooltip content="This is a nested Dropdown.">
                            <DropdownItem>item 4</DropdownItem>
                        </Tooltip>
                    </div>
                    <DropdownMenu>
                        <DropdownItem>item 1</DropdownItem>
                        <Tooltip content="nested DropdownItem">
                            <DropdownItem>item 2</DropdownItem>
                        </Tooltip>
                    </DropdownMenu>
                </Dropdown>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>
<script>
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc-vue/components/dropdown';
import Button from 'kpc-vue/components/button';
import Tooltip from 'kpc-vue/components/tooltip';

export default {
    components: {
        Dropdown, DropdownMenu, DropdownItem, Button, Tooltip
    },
}
</script>
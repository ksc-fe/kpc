<template>
    <div>
        <Dropdown>
            <Button>More ></Button>
            <DropdownMenu class="checkbox-menu">
                <DropdownItem :hideOnSelect="false" @select="_onSelect">
                    <Checkbox v-model="checked" trueValue="1">item 1</Checkbox>
                </DropdownItem>
                <DropdownItem :hideOnSelect="false" @select="_onSelectAndPreventDefault">
                    <Checkbox v-model="checked" trueValue="2">item 2</Checkbox>
                </DropdownItem>
                <DropdownItem :hideOnSelect="false">
                    <Checkbox v-model="checked" trueValue="3">item 3</Checkbox>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>
<script>
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import Checkbox from 'kpc/components/checkbox';
import Button from 'kpc/components/button';

export default {
    components: {
        Dropdown, DropdownMenu, DropdownItem, Checkbox, Button
    },
    data() {
        return {
            "checked": []
        }
    },
    methods: {
        _onSelect(c, e) {
            console.log('allowDefault', e);
        },
        _onSelectAndPreventDefault(c, e) {
            e.preventDefault();
            console.log('preventDefault', e);
        
            const checked = this.checked;
            const index = checked.indexOf('2');
            if (index > -1) {
                checked.splice(index, 1);
            } else {
                checked.push('2');
            }
        },
    },
}
</script>
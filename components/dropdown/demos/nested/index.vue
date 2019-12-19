<template>
    <div>
        <Dropdown trigger="click">
            <Button type="primary">
                click <Icon class="ion-ios-arrow-down" />
            </Button>
            <DropdownMenu>
                <DropdownItem>item 1</DropdownItem>
                <DropdownItem>item 2</DropdownItem>
                <DropdownItem>item 3</DropdownItem>
                <Dropdown :position="{my: 'left top', at: 'right top'}">
                    <DropdownItem>
                        <span>hover</span>
                        <i class="ion-ios-arrow-right"></i>
                    </DropdownItem>
                    <DropdownMenu>
                        <Dropdown :position="{my: 'left top', at: 'right top'}">
                            <DropdownItem>
                                <span>hover</span>
                                <i class="ion-ios-arrow-right"></i>
                            </DropdownItem>
                            <DropdownMenu>
                                <DropdownItem>item 1</DropdownItem>
                                <DropdownItem>item 2</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <DropdownItem>item 1</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown trigger="click" :position="{my: 'left top', at: 'right top'}">
                    <DropdownItem>
                        <span>click</span>
                        <i class="ion-ios-arrow-right"></i>
                    </DropdownItem>
                    <DropdownMenu>
                        <Dropdown trigger="click" :position="{my: 'left top', at: 'right top'}">
                            <DropdownItem>
                                <span>click</span>
                                <i class="ion-ios-arrow-right"></i>
                            </DropdownItem>
                            <DropdownMenu>
                                <DropdownItem>item 1</DropdownItem>
                                <DropdownItem>item 2</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <DropdownItem>item 1</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <DropdownItem>item 3</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>
<script>
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc-vue/components/dropdown';
import Button from 'kpc-vue/components/button';
import Icon from 'kpc-vue/components/icon';

export default {
    components: {
        Dropdown, DropdownMenu, DropdownItem, Button, Icon
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>
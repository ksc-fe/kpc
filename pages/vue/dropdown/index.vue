<template>
    <div class="dropdown-page">
        <Dropdown>
            <Button>hover</Button>
            <DropdownMenu>
                <DropdownItem>content</DropdownItem>
                <DropdownItem>content</DropdownItem>
                <DropdownItem>content</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Dropdown trigger="click">
            <Button>click</Button>
            <DropdownMenu>
                <DropdownItem>content</DropdownItem>
                <DropdownItem disabled>content</DropdownItem>
                <DropdownItem>content</DropdownItem>
                <DropdownItem>content</DropdownItem>
                <DropdownItem>中文</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Dropdown trigger="click">
            <Button @click="log('click')">click with sub dropdown menu</Button>
            <DropdownMenu>
                <DropdownItem @select="log('select')">content</DropdownItem>
                <DropdownItem>content</DropdownItem>
                <DropdownItem>content</DropdownItem>
                <Dropdown :position="{my: 'left top', at: 'right top'}">
                    <DropdownItem>
                        <span class="c-middle" style="margin-right: 10px">嵌套菜单</span>
                        <i class="c-middle ion-ios-arrow-right"></i>
                    </DropdownItem>
                    <DropdownMenu>
                        <Dropdown :position="{my: 'left top', at: 'right top'}">
                            <DropdownItem>
                                <span class="c-middle" style="margin-right: 10px">嵌套菜单</span>
                                <i class="c-middle ion-ios-arrow-right"></i>
                            </DropdownItem>
                            <DropdownMenu>
                                <DropdownItem>子菜单</DropdownItem>
                                <DropdownItem>Sub Menu</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <DropdownItem>Sub Menu</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown name="a" trigger="click" :position="{my: 'left top', at: 'right top'}">
                    <DropdownItem>
                        <span class="c-middle" style="margin-right: 10px">嵌套菜单</span>
                        <i class="c-middle ion-ios-arrow-right"></i>
                    </DropdownItem>
                    <DropdownMenu>
                        <Dropdown trigger="click" :position="{my: 'left top', at: 'right top'}">
                            <DropdownItem>
                                <span class="c-middle" style="margin-right: 10px">嵌套菜单</span>
                                <i class="c-middle ion-ios-arrow-right"></i>
                            </DropdownItem>
                            <DropdownMenu>
                                <DropdownItem>子菜单</DropdownItem>
                                <DropdownItem>Sub Menu</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <DropdownItem>Sub Menu</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <DropdownItem>content</DropdownItem>
                <DropdownItem>中文</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>

<script>
import Dropdown, {DropdownMenu, DropdownItem} from 'components/dropdown';
import Button, {ButtonGroup} from 'components/button';

export default {
    components: {
        Dropdown, DropdownItem, DropdownMenu,
        Button, ButtonGroup
    },

    methods: {
        log(msg) {
            console.log(msg);
        }
    }
}
</script>

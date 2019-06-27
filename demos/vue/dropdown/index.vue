<template>
    <div class="dropdown-page">
        <div class="contextmenu-area" @contextmenu="showMenu"></div>
        <DropdownMenu v-model="show"
            :of="event"
            :position="{my: 'left+1 top', at: 'right bottom'}"
        >
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
        </DropdownMenu>
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
                    <Tooltip content="This is a nested Dropdown.">
                        <DropdownItem>item 4</DropdownItem>
                    </Tooltip>
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

<style lang="stylus">
.contextmenu-area
    height 100px
    background #f0f0f0
    text-align center
    line-height 100px
</style>

<script>
import Dropdown, {DropdownMenu, DropdownItem} from 'components/dropdown';
import Button, {ButtonGroup} from 'components/button';
import Tooltip from 'components/tooltip';

export default {
    components: {
        Dropdown, DropdownItem, DropdownMenu,
        Button, ButtonGroup,
        Tooltip,
    },

    data() {
        return {
            event: null,
            show: false,
        }
    },

    methods: {
        log(msg) {
            console.log(msg);
        },
        showMenu(e) {
            e.preventDefault();
            this.show = true;
            this.event = e;
        }
    }
}
</script>

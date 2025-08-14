import {createApp, render} from 'vue';
import {mount, unmount, dispatchEvent, getElement, wait} from '@/test/utils';
import {Table, TableColumn, Input, Drawer, Button, Form, FormItem} from '../../';

describe('Misc', () => {
    it('test', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        const vue = createApp({
            template: `
                <div>
                    <h1>King Design Demo</h1>
                    <Button @click="handleCreate">新增</Button>
                    <Button @click="handleEdit">更新</Button>
                    <Button @click="handleView">查看</Button>

                    <Drawer v-model="state.showDrawer" :title="state.drawerTitle">
                        <Form labelWidth="200" starOnRequired>
                            <FormItem
                                label="需求名称:"
                                :value="brachItem.name"
                                :rules="{ required: true }"
                            >
                                <span v-if="state.mode === 'view'">{{ brachItem.name }}</span>
                                <Input v-else v-model="brachItem.name" />
                            </FormItem>
                        </Form>
                        <template v-slot:footer>
                            <div class="float-right" v-if="state.mode !== 'view'">
                                <Button type="primary" style="margin-right: 10px">确定</Button>
                                <Button @click="state.showDrawer = false">取消</Button>
                            </div>
                            <div class="float-right" v-else>
                                <Button type="primary" @click="state.showDrawer = false">确定</Button>
                            </div>
                        </template>
                    </Drawer>
                </div>
            `,
            components: {
                Button, Drawer, Input, Form, FormItem
            },
            data() {
                return {
                    state: {
                        mode: 'create',
                        showDrawer: false,
                        drawerTitle: '新建需求',
                    },
                    brachItem: {}
                }
            },
            methods: {
                handleCreate() {
                    let item = {
                        name: 'add_item',
                    };

                    this.brachItem.value = { ...item };
                    const state = this.state;
                    state.mode = 'create';
                    state.drawerTitle = '新建需求';
                    state.showDrawer = true;
                },
                handleEdit() {
                    let item = {
                        name: 'edit_item',
                    };

                    this.brachItem.value = { ...item };
                    const state = this.state;
                    state.mode = 'edit';
                    state.drawerTitle = '编辑需求';
                    state.showDrawer = true;
                },
                handleView() {
                    let item = {
                        name: 'edit_item',
                    };

                    this.brachItem.value = { ...item };
                    const state = this.state;
                    state.mode = 'view';
                    state.drawerTitle = '查看需求';
                    state.showDrawer = true;
                }
            }
        }).mount(container);

        render(null, container);
        document.body.removeChild(container);
    });
});

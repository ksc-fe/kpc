import {createApp, render} from 'vue';
import {mount, unmount, dispatchEvent, getElement, wait} from '@/test/utils';
import {Table, TableColumn, Input} from '../../';

describe('Table', () => {
    it('should update Input in children rows', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        const vue = createApp({
            template: `
                <Table ref="table" :data="data" checkType="none">
                    <TableColumn key="discount" title="折扣">
                        <template v-slot="[data]">
                            <Input v-model="data.discount" />
                        </template>
                    </TableColumn>
                </Table>
            `,
            components: {
                Table, TableColumn, Input 
            },
            data() {
                return {
                    data: [
                        {
                            discount: "3.5",
                            children: [
                                {
                                    discount: "4.5",
                                },
                            ],
                        },
                    ],
                }
            }
        }).mount(container);

        const table = vue.$refs.table as Table;
        table.set('spreadKeys', [0]);
        await wait();

        const [, input] = document.querySelectorAll('input');
        dispatchEvent(input, 'focus');
        input.value = 'a';
        dispatchEvent(input, 'input')
        await wait();
        dispatchEvent(input, 'blur');

        await wait();
        expect(input.value).to.eql('a');

        render(null, container);
        document.body.removeChild(container);
    });
});

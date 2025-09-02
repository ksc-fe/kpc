import {createApp, render, defineComponent} from 'vue';
import {mount, unmount, dispatchEvent, getElement, wait, fakeError} from '@/test/utils';
import {Table, TableColumn, Editable, Tooltip} from '../../';

describe('Editable', () => {
    it('should correctly mount Input on editing ', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        const vue = createApp({
            template: `
                <Table :data="data">
                    <TableColumn key="a">
                        <template v-slot:template="[data]">
                            <Tooltip content="test">
                                <Editable v-model="data.a" ref="editable">
                                    <span>{{ data.a }}</span>
                                </Editable>
                            </Tooltip>
                        </template>
                    </TableColumn>
                </Table>
            `,
            components: {
                Table, TableColumn, Editable, Tooltip
            },
            data() {
                return {
                    data: [{a: 1}]
                }
            },
        }).mount(container);
        await wait();

        container.querySelector<HTMLDivElement>('.k-icon')!.click();
        await wait();

        const input = container.querySelector('.k-input-inner') as HTMLInputElement;
        expect(input.selectionStart).to.eql(0);
        expect(input.selectionEnd).to.eql(1);

        render(null, container);
        document.body.removeChild(container);
    });
});

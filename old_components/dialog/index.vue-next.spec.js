import {renderVue, unmountVue, wait} from '../../test/utils';
import Dialog from 'kpc/components/dialog';

describe('Dialog', () => {
    let vm;

    afterEach(() => unmountVue(vm));

    it('should handle v-if and v-model at the same time correctly in Vue', async () => {
        const Test = {
            template: `<Dialog v-model="show" v-if="show" ref="dialog">test</Dialog>`,
            components: {
                Dialog
            },
            data() {
                return {
                    show: false,
                }
            },
        };
        vm = renderVue({
            template: `<Test ref="test" />`,
            components: {Test}
        });

        vm.$refs.test.show = true;
        await wait();

        // close dialog
        vm.$refs.test.$refs.dialog.close();
        await wait();
    });
});

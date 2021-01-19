import {renderVue, unmountVue, wait} from '../../test/utils';
import Tooltip from 'kpc/components/tooltip';
import Radio from 'kpc/components/radio';

describe('Tooltip', () => {
    let vm;

    afterEach(() => unmountVue(vm));

    it('should change value on click when we use tooltip on radio in Vue', async () => {
        vm = renderVue({
            template: `
                <div>
                    <Tooltip content="hello">
                        <Radio v-model="a" trueValue="1">test</Radio>
                    </Tooltip>
                    <Tooltip content="hello">
                        <Radio v-model="a" trueValue="2">test</Radio>
                    </Tooltip>
                </div>
            `,
            components: {
                Tooltip, Radio,
            },
            data() {
                return {a: '1'};
            }
        });

        const [radio1, radio2] = vm.$el.querySelectorAll('input');
        radio2.click();
        expect(vm.a).to.eql('2');
    });
});

import BasicDemo from '~/components/treeSelect/demos/basic';
import MultipleDemo from '~/components/treeSelect/demos/multiple';
import CheckboxDemo from '~/components/treeSelect/demos/checkbox';
import FilterDemo from '~/components/treeSelect/demos/filter';
import TreeSelect from 'kpc/components/treeSelect';
import {Form, FormItem} from 'kpc/components/form';
import Intact from 'intact';
import {mount, unmount, dispatchEvent, wait, getElement} from 'test/utils';

describe('TreeSelect', () => {
    let instance;

    afterEach(() => unmount(instance));

    it('should select value correctly', async () => {
        instance = mount(BasicDemo);

        const trigger = instance.element.querySelector('.k-wrapper');
        trigger.click();
        const dropdown = getElement('.k-tree-select-dropdown');
        expect(dropdown.innerHTML).to.matchSnapshot();

        dropdown.querySelector('.k-text').click();
        expect(instance.get('value')).to.eql('1');

        await wait(100);
        expect(getElement('.k-tree-select-dropdown')).to.be.undefined;
    });

    it('multiple', async () => {
        instance = mount(MultipleDemo);

        instance.element.querySelector('.k-wrapper').click();
        const dropdown = getElement('.k-tree-select-dropdown');
        const [node1, node2] = dropdown.querySelectorAll('.k-text');
        node1.click();
        node2.click();
        expect(instance.get('values')).to.eql(['1', '1.1']);
        node1.click();
        expect(instance.get('values')).to.eql(['1.1']);

        instance.set('values', ['1']);
        await wait(300)
        expect(dropdown.innerHTML).to.matchSnapshot();
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('checkbox', () => {
        instance = mount(CheckboxDemo);

        instance.element.querySelector('.k-wrapper').click();
        const dropdown = getElement('.k-tree-select-dropdown');
        const texts = dropdown.querySelectorAll('.k-text');
        const text211 = texts[5];
        const text212 = texts[6];
        text211.click();
        expect(instance.get('values')).to.eql(['2.1.1']);
        text212.click();
        expect(instance.get('values')).to.eql(['2']);

        instance.set('values', []);
        expect(dropdown.innerHTML).to.matchSnapshot();
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('filterable', async () => {
        instance = mount(FilterDemo);

        instance.element.querySelector('.k-wrapper').click();
        const dropdown = getElement('.k-tree-select-dropdown');
        const input = instance.element.querySelector('.k-inner');
        input.value = 'first';
        dispatchEvent(input, 'input');
        await wait(300);
        expect(dropdown.innerHTML).to.matchSnapshot();

        const [, text2] = dropdown.querySelectorAll('.k-text');
        text2.click();
        expect(instance.get('value')).to.eql('2');
    });

    it('should not validate when click arrow', async () => {
        class Demo extends Intact {
            @Intact.template()
            static template = `
                <Form>
                    <FormItem rules={{ {required: true} }} model="value">
                        <TreeSelect data={{ [{label: 'test', key: 'test'}] }} v-model="value" />
                    </FormItem>
                </Form>
            `;

            _init() {
                this.Form = Form;
                this.FormItem = FormItem;
                this.TreeSelect = TreeSelect;
            }
        }

        instance = mount(Demo);
        const element = instance.element.querySelector('.k-wrapper');
        dispatchEvent(element, 'click');
        dispatchEvent(element, 'focusout');

        await wait(300);
        expect(instance.element.querySelector('.k-error')).to.be.null;

        dispatchEvent(element, 'click');
        await wait(300);
        expect(instance.element.querySelector('.k-error')).not.to.be.null;
    });
});

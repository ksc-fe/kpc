import BasicDemo from '~/components/treeSelect/demos/basic';
import MultipleDemo from '~/components/treeSelect/demos/multiple';
import CheckboxDemo from '~/components/treeSelect/demos/checkbox';
import FilterDemo from '~/components/treeSelect/demos/filter';
import {TreeSelect} from './';
import {Form, FormItem} from '../form';
import {Component} from 'intact';
import {mount, unmount, dispatchEvent, wait, getElement} from '../../test/utils';

describe('TreeSelect', () => {
    afterEach(() => unmount());

    it('should select value correctly', async () => {
        const [instance, element] = mount(BasicDemo);

        element.click();
        await wait();
        const dropdown = getElement('.k-tree-select-menu')!;
        expect(dropdown.innerHTML).to.matchSnapshot();

        (dropdown.querySelector('.k-tree-text') as HTMLElement).click();
        expect(instance.get('value')).to.eql('1');

        await wait(400);
        expect(getElement('.k-tree-select-menu')).to.be.undefined;
    });

    it('multiple', async () => {
        const [instance, element] = mount(MultipleDemo);

        element.click();
        await wait();
        const dropdown = getElement('.k-tree-select-menu')!;
        const [node1, node2] = dropdown.querySelectorAll('.k-tree-text') as unknown as HTMLElement[];
        node1.click();
        node2.click();
        expect(instance.get('values')).to.eql(['1', '1.1']);
        node1.click();
        expect(instance.get('values')).to.eql(['1.1']);

        instance.set('values', ['1']);
        await wait(400)
        expect(dropdown.innerHTML).to.matchSnapshot();
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('checkbox', async () => {
        const [instance, element] = mount(CheckboxDemo);

        element.click();
        await wait();
        const dropdown = getElement('.k-tree-select-menu')!;
        const texts = dropdown.querySelectorAll('.k-tree-text');
        const text211 = texts[5] as HTMLElement;
        const text212 = texts[6] as HTMLElement;
        text211.click();
        expect(instance.get('values')).to.eql(['2.1.1']);
        text212.click();
        expect(instance.get('values')).to.eql(['2']);

        instance.set('values', []);
        await wait();
        expect(dropdown.innerHTML).to.matchSnapshot();
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('filterable', async () => {
        const [instance, element] = mount(FilterDemo);

        element.click();
        await wait();
        const dropdown = getElement('.k-tree-select-menu')!;
        const input = element.querySelector('.k-input-inner') as HTMLInputElement;
        input.value = 'first';
        dispatchEvent(input, 'input');
        await wait(400);
        expect(dropdown.innerHTML).to.matchSnapshot();

        const [, text2] = dropdown.querySelectorAll('.k-tree-text');
        (text2 as HTMLElement).click();
        expect(instance.get('value')).to.eql('2');
    });

    it('should not validate when click arrow of Tree', async () => {
        class Demo extends Component {
            static template = `
                const {Form, FormItem, TreeSelect} = this;
                <Form>
                    <FormItem rules={{required: true}} value={this.get('value')}>
                        <TreeSelect data={[{label: 'test', key: 'test'}]} v-model="value" />
                    </FormItem>
                </Form>
            `;

            private Form = Form;
            private FormItem = FormItem;
            private TreeSelect = TreeSelect;
        }

        const [instance, element] = mount(Demo);
        const select = element.querySelector('.k-select') as HTMLElement;
        dispatchEvent(select, 'click');
        await wait();
        dispatchEvent(select, 'focusout');

        await wait(400);
        expect(element.querySelector('.k-form-error')).to.be.null;

        dispatchEvent(select, 'click');
        await wait(400);
        expect(element.querySelector('.k-form-error')).not.to.be.null;
    });
});

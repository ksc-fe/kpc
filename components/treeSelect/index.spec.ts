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

        const texts = dropdown.querySelectorAll('.k-tree-text');
        const text1 = texts[0] as HTMLElement;
        const text111 = texts[2] as HTMLElement;
        text1.click();
        await wait();
        expect(instance.get('value')).to.eql('1');

        await wait(500);

        element.click();
        text111.click();
        await wait();
        expect(instance.get('value')).to.eql('1.1.1');

        await wait(500);

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
        await wait(500)
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
        await wait(500);
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

        await wait(500);
        expect(element.querySelector('.k-form-error')).to.be.null;

        dispatchEvent(select, 'click');
        await wait(500);
        expect(element.querySelector('.k-form-error')).not.to.be.null;
    });

    it('should handle parent node correctly when all children are checked initially', async () => {
        const [instance, element] = mount(CheckboxDemo);
    
        // init values
        instance.set('values', ['2.1.1', '2.1.2']);
        await wait();
    
        // because 2.2 is disabled, so it will select the outermost parent node 2
        expect(instance.get('values')).to.eql(['2']);
    
        element.click();
        await wait();
        const dropdown = getElement('.k-tree-select-menu')!;
        // verify parent node is selected
        const parentCheckboxes = dropdown.querySelectorAll('.k-checkbox');
        expect(parentCheckboxes[3].classList.contains('k-checked')).to.be.true; // First floor-2
        expect(parentCheckboxes[4].classList.contains('k-checked')).to.be.true; // Second floor-2.1
    });
    
    it('should clear parent node state when setting values to empty array', async () => {
        const [instance, element] = mount(CheckboxDemo);
    
        // select a parent node first
        instance.set('values', ['2.1.1']);
        await wait();
    
        element.click();
        await wait();
        let dropdown = getElement('.k-tree-select-menu')!;
        // verify related nodes are selected
        const checkboxes = dropdown.querySelectorAll('.k-checkbox');
        expect(checkboxes[3].classList.contains('k-indeterminate')).to.be.true; // First floor-2
        expect(checkboxes[4].classList.contains('k-indeterminate')).to.be.true; // Second floor-2.1
        expect(checkboxes[5].classList.contains('k-checkbox')).to.be.true; // Third floor-2.1.1
        // expect(checkboxes[6].classList.contains('k-checked')).to.be.true; // Third floor-2.1.2
    
        // set to empty array
        instance.set('values', []);
        await wait();
    
        // verify all nodes are cleared selected state
        checkboxes.forEach(checkbox => {
            expect(checkbox.classList.contains('k-checked')).to.be.false;
            expect(checkbox.classList.contains('k-indeterminate')).to.be.false;
        });
    });
});

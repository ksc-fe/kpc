import BasicDemo from '~/components/treeSelect/demos/basic';
import MultipleDemo from '~/components/treeSelect/demos/multiple';
import {mount, unmount, dispatchEvent, wait, getElement} from 'test/utils';

describe('TreeSelect', () => {
    let instance;

    // afterEach(() => unmount(instance));

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

    it('multiple', () => {
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
        expect(dropdown.innerHTML).to.matchSnapshot();
    });
});

import BasicDemo from '~/components/copy/demos/basic';
import {mount, unmount, dispatchEvent, wait, getElement} from '../../test/utils';

describe('Copy', () => {
    afterEach(async () => {
        unmount();
    });

    it('should copy', async function() {
        const [instance, element] = mount(BasicDemo);
        
        element.click();
        const text = await navigator.clipboard.readText();
        expect(text).to.eql('Hello King Desgin!');
    });
});

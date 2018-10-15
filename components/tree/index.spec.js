import BasicDemo from '~/components/tree/demos/basic';
import {mount, unmount} from 'test/utils';

describe('Tree', () => {
    let instance;

    it('expand and shrink', (done) => {
        instance = mount(BasicDemo);

        const element = instance.element;
        const [, icon1, icon2] = element.querySelectorAll('.k-icon');

        icon2.click();
        expect(element.outerHTML).to.matchSnapshot();

        icon1.click();
        setTimeout(() => {
            expect(element.outerHTML).to.matchSnapshot();

            icon1.click();
            expect(element.outerHTML).to.matchSnapshot();

            done();
        }, 500);
    });
});

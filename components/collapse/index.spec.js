import BasicDemo from '~/components/collapse/demos/basic';
import AccordionDemo from '~/components/collapse/demos/accordion';
import {mount, unmount, dispatchEvent} from 'test/utils';

describe('Collapse', () => {
    let instance;

    afterEach(() => unmount(instance));

    it('should toggle expand', (done) => {
        instance = mount(BasicDemo);

        const [title1, title2, title3] = instance.element.querySelectorAll('.k-title');
        title2.click();
        setTimeout(() => {
            expect(instance.element.innerHTML).to.matchSnapshot();

            title1.click();
            setTimeout(() => {
                expect(instance.element.innerHTML).to.matchSnapshot();

                title3.click();
                expect(instance.element.innerHTML).to.matchSnapshot();

                done();
            }, 500)
        }, 500);
    });

    it('should expand only one panel', (done) => {
        instance = mount(AccordionDemo);

        const [title1, title2] = instance.element.querySelectorAll('.k-title');
        title2.click();
        setTimeout(() => {
            expect(instance.element.innerHTML).to.matchSnapshot();

            title2.click();
            setTimeout(() => {
                expect(instance.element.innerHTML).to.matchSnapshot();

                done();
            }, 500)
        }, 500);
    });
});

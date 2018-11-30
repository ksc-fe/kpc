import ClosableDemo from '~/components/tabs/demos/closable';
import {mount, unmount, dispatchEvent} from 'test/utils';

describe('Tabs', () => {
    let instance;

    // afterEach(() => {
        // unmount(instance);
    // });

    it('closable', function(done) {
        this.enableTimeouts(false);
        instance = mount(ClosableDemo);

        instance.element.style.width = '500px';
        const tabs = instance.element.querySelector('.k-tabs');

        // add tab
        instance._add();
        setTimeout(() => {
            expect(tabs.outerHTML).to.matchSnapshot();

            // prev & next
            const prev = tabs.querySelector('.k-prev');
            const next = tabs.querySelector('.k-next');
            prev.click();
            expect(tabs.outerHTML).to.matchSnapshot();
            next.click();
            expect(tabs.outerHTML).to.matchSnapshot();

            // close
            const icon = tabs.querySelector('.k-tab .k-btn');
            icon.click();
            expect(tabs.outerHTML).to.matchSnapshot();

            done();
        }, 300)
    });
});

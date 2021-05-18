import ClosableDemo from '~/components/tabs/demos/closable';
import BeforeChangeDemo from '~/components/tabs/demos/beforeChange';
import {mount, unmount, dispatchEvent, wait} from 'test/utils';

describe('Tabs', () => {
    let instance;

    afterEach(() => {
        unmount(instance);
    });

    it('closable', async function() {
        this.enableTimeouts(false);
        instance = mount(ClosableDemo);

        instance.element.style.width = '500px';
        const tabs = instance.element.querySelector('.k-tabs');

        // add tab
        instance._add();
        await wait(300);
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
    });
    
    it('beforeChange', async function() {
        let ret = false;
        BeforeChangeDemo.prototype.beforeChange = () => ret;

        instance = mount(BeforeChangeDemo);
        const tab = instance.element.querySelector('.k-tab');
        tab.click();
        await wait(50);
        expect(instance.get('tab')).to.eql('ruleout');

        ret = true;
        tab.click();
        await wait(50);
        expect(instance.get('tab')).to.eql('rulein');
    });
});

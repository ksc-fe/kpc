import ClosableDemo from '~/components/tabs/demos/closable';
import BeforeChangeDemo from '~/components/tabs/demos/beforeChange';
import {mount, unmount, dispatchEvent, wait} from '../../test/utils';

describe('Tabs', () => {
    afterEach(() => unmount());

    it('closable', async function() {
        this.timeout(0);
        const [instance, element] = mount(ClosableDemo);

        element.style.width = '400px';
        const tabs = element.querySelector('.k-tabs') as HTMLElement;

        // add tab
        instance._add();
        await wait(400);
        expect(tabs.outerHTML).to.matchSnapshot();

        // prev & next
        const prev = tabs.querySelector('.k-tabs-prev') as HTMLElement;
        const next = tabs.querySelector('.k-tabs-next') as HTMLElement;
        prev.click();
        await wait();
        expect(tabs.outerHTML).to.matchSnapshot();
        next.click();
        await wait();
        expect(tabs.outerHTML).to.matchSnapshot();

        // close
        const icon = tabs.querySelector('.k-tab-close') as HTMLElement;
        icon.click();
        await wait();
        expect(tabs.outerHTML).to.matchSnapshot();
    });
    
    it('beforeChange', async function() {
        let ret = false;
        BeforeChangeDemo.prototype.beforeChange = () => ret as any;

        const [instance, element] = mount(BeforeChangeDemo);
        const tab = element.querySelector('.k-tab') as HTMLElement;
        tab.click();
        await wait(50);
        expect(instance.get('tab')).to.eql('ruleout');

        ret = true;
        tab.click();
        await wait(50);
        expect(instance.get('tab')).to.eql('rulein');
    });
});

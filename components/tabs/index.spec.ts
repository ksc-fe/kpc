import ClosableDemo from '~/components/tabs/demos/closable';
import BeforeChangeDemo from '~/components/tabs/demos/beforeChange';
import {mount, unmount, dispatchEvent, wait} from '../../test/utils';
import { Tabs, Tab } from './';
import { Component } from 'intact';

describe('Tabs', () => {
    afterEach(() => unmount());

    it('closable', async function() {
        this.timeout(0);
        const [instance, element] = mount(ClosableDemo);

        element.style.width = '400px';
        const tabs = element.querySelector('.k-tabs') as HTMLElement;

        // add tab
        instance._add();
        await wait(500);
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

    it('vertical scroll', async () => {
        class Demo extends Component {
            static template = `
                const { Tabs, Tab } = this;
                <Tabs v-model="tab" vertical style="height: 200px;">
                    <Tab v-for={new Array(10).fill(0)} value={$key}>
                        {$key}
                    </Tab>
                </Tabs>
            `
            Tabs = Tabs
            Tab = Tab

            static defaults() {
                return {
                    tab: 0
                }
            }
        }

        const [instance, element] = mount(Demo);
        await wait(100);
        expect(element.innerHTML).to.matchSnapshot();

        const prev = element.querySelector('.k-tabs-prev') as HTMLElement;
        const next = element.querySelector('.k-tabs-next') as HTMLElement;
        next.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        prev.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
    });
});

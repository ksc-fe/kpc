import BasicDemo from '~/components/collapse/demos/basic';
import AccordionDemo from '~/components/collapse/demos/accordion';
import {mount, unmount, dispatchEvent, wait} from '../../test/utils';
import {Component} from 'intact';
import {Collapse, CollapseItem} from './';

describe('Collapse', () => {
    afterEach(() => unmount());

    it('should toggle expand', async function() {
        this.timeout(0);
        const [instance, element] = mount(BasicDemo);

        const [title1, title2, title3] = element.querySelectorAll<HTMLElement>('.k-collapse-title');
        title2.click();
        await wait(500);
        // the innerHTML is different on travis and local environment
        expect(element.innerHTML.replace(/ style=""/g, '')).to.matchSnapshot();
        expect(instance.get('value')).to.eql(['$0', '$1']);

        title1.click();
        await wait(500);
        const html = element.innerHTML.replace(/ style=""/g, '');
        expect(html).to.matchSnapshot();
        expect(instance.get('value')).to.eql(['$1']);

        title3.click();
        await wait(500);
        expect(element.innerHTML.replace(/ style=""/g, '')).to.eql(html);
        expect(instance.get('value')).to.eql(['$1']);
    });

    it('should expand only one panel', async () => {
        const [instance, element] = mount(AccordionDemo);

        const [title1, title2] = element.querySelectorAll<HTMLElement>('.k-collapse-title');
        title2.click();
        await wait(500);
        expect(element.innerHTML.replace(/ style=""/g, '')).to.matchSnapshot();
        expect(instance.get('value')).to.eql(['$1']);

        title2.click();
        await wait(500);
        expect(element.innerHTML.replace(/ style=""/g, '')).to.matchSnapshot();
        expect(instance.get('value')).to.eql([]);
    });
});

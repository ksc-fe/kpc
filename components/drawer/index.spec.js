import BasicDemo from '~/components/drawer/demos/basic';
import PlacementDemo from '~/components/drawer/demos/placement';
import overlayDemo from '~/components/drawer/demos/overlay';

import {mount, unmount, dispatchEvent, getElement, wait} from 'test/utils';

describe('Drawer', () => {
    let instance;

    afterEach((done) => {
        unmount(instance);
        setTimeout(done, 400);
    });

    it('should show drawer correctly', async function() {
        this.enableTimeouts(false);
        instance = mount(BasicDemo);

        const trigger = instance.element.querySelector('.k-btn');
        trigger.click();
        expect(instance.element.outerHTML).to.matchSnapshot();
        const drawer = getElement('.k-dialog');
        expect(drawer.innerHTML).to.matchSnapshot();
        
        await wait(400);
        //hide
        dispatchEvent(document, 'click');
        await wait(400);
        expect(getElement('.k-drawer .k-dialog')).to.be.undefined;
    });

    it('should show drawer from different placement correctly', async function() {
        this.enableTimeouts(false);
        instance = mount(PlacementDemo);

        const [top, bottom, left, right] = instance.element.querySelectorAll('.k-btn');
        dispatchEvent(top, 'click');
        let className1 = getElement('.k-drawer').className;
        expect(className1).to.include('k-top');
        await wait(200);
        dispatchEvent(document, 'click');
        await wait(500);
        expect(getElement('.k-drawer .k-dialog')).to.be.undefined;
        dispatchEvent(bottom, 'click');
        let className2 = getElement('.k-drawer').className;
        expect(className2).to.include('k-bottom');
        await wait(200);
        dispatchEvent(document, 'click');
        await wait(500);
        expect(getElement('.k-drawer .k-dialog')).to.be.undefined;
        dispatchEvent(left, 'click');
        let className3 = getElement('.k-drawer').className;
        expect(className3).to.include('k-left');
        await wait(200);
        dispatchEvent(document, 'click');
        await wait(500);
        expect(getElement('.k-drawer .k-dialog')).to.be.undefined;
        dispatchEvent(right, 'click');
        let className4 = getElement('.k-drawer').className;
        expect(className4).to.include('k-right');
        await wait(200);
        dispatchEvent(document, 'click');
        await wait(500);
        expect(getElement('.k-drawer .k-dialog')).to.be.undefined;
    });

    it('should show no overlay', async () => {
        instance = mount(overlayDemo);

        const trigger = instance.element.querySelector('.k-btn');
        trigger.click();
        const overlay = getElement('.k-overlay');
        expect(overlay).to.be.undefined;
        await wait(200);
        dispatchEvent(document, 'click');
        await wait(400);
        const dialog = getElement('.k-dialog');
        expect(dialog.innerHTML).to.matchSnapshot();

        const btn = getElement('.k-footer .k-primary');
        btn.click();
        await wait(400);
        expect(getElement('.k-drawer .k-dialog')).to.be.undefined;
    });
});

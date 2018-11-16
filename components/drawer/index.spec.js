import BasicDemo from '~/components/drawer/demos/basic';
import PlacementDemo from '~/components/drawer/demos/placement';
import overlayDemo from '~/components/drawer/demos/overlay';

import {mount, unmount, dispatchEvent, getElement} from 'test/utils';

describe('Drawer', () => {
    let instance;

    // afterEach((done) => {
    //     unmount(instance);
    //     setTimeout(done, 400);
    // });

    it('should show drawer correctly', function(done) {
        this.enableTimeouts(false);
        instance = mount(BasicDemo);

        const trigger = instance.element.querySelector('.k-btn');
        trigger.click();
        expect(instance.element.outerHTML).to.matchSnapshot();
        const drawer = getElement('.k-dialog');
        expect(drawer.innerHTML).to.matchSnapshot();
        
        
        setTimeout(() => {
            //hide
            dispatchEvent(document, 'click');
            setTimeout(() => {
                expect(getElement('.k-drawer .k-dialog')).to.be.undefined;
                done();
            }, 300)
        }, 300);
    });

    it('should show drawer from different placement correctly', function(done) {
        this.enableTimeouts(false);
        instance = mount(PlacementDemo);

        const [top, bottom, left, right] = instance.element.querySelectorAll('.k-btn');
        dispatchEvent(top, 'click');
        let className1 = getElement('.k-drawer').className;
        expect(className1).to.include('k-top');
        setTimeout(() =>{
            dispatchEvent(document, 'click');
            setTimeout(() => {
                expect(getElement('.k-drawer .k-dialog')).to.be.undefined;
                dispatchEvent(bottom, 'click');
                let className2 = getElement('.k-drawer').className;
                expect(className2).to.include('k-bottom');
                setTimeout(()=> {
                    dispatchEvent(document, 'click');
                    setTimeout(() => {
                        expect(getElement('.k-drawer .k-dialog')).to.be.undefined;
                        dispatchEvent(left, 'click');
                        let className3 = getElement('.k-drawer').className;
                        expect(className3).to.include('k-left');
                        setTimeout(() => {
                            dispatchEvent(document, 'click');
                            setTimeout(() => {
                                expect(getElement('.k-drawer .k-dialog')).to.be.undefined;
                                dispatchEvent(right, 'click');
                                let className4 = getElement('.k-drawer').className;
                                expect(className4).to.include('k-right');
                                setTimeout(() => {
                                    dispatchEvent(document, 'click');
                                    setTimeout(() => {
                                        expect(getElement('.k-drawer .k-dialog')).to.be.undefined;
                                        done();
                                    }, 500)
                                }, 200)
                            }, 500)
                        }, 200)
                    }, 500)
                }, 200);
            }, 500)
        }, 200)
        
    });

    it('should show no overlay', (done) => {
        instance = mount(overlayDemo);

        const trigger = instance.element.querySelector('.k-btn');
        trigger.click();
        const overlay = getElement('.k-overlay');
        expect(overlay).to.be.undefined;
        setTimeout(() =>{
            dispatchEvent(document, 'click');
            setTimeout(() => {
                const dialog = getElement('.k-dialog');
                expect(dialog.innerHTML).to.matchSnapshot();
    
                const btn = getElement('.k-footer .k-primary');
                btn.click();
                setTimeout(() => {
                    expect(getElement('.k-drawer .k-dialog')).to.be.undefined;
                    done();
                }, 400)
            }, 400)
        }, 200)
        
    })
})
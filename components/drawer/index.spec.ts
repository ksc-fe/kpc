import BasicDemo from '~/components/drawer/demos/basic';
import PlacementDemo from '~/components/drawer/demos/placement';
import overlayDemo from '~/components/drawer/demos/overlay';
import {mount, unmount, dispatchEvent, getElement, wait, getElements} from '../../test/utils';
import {Component} from 'intact';
import {Drawer} from '.';
import {Dialog} from '../dialog';

describe('Drawer', () => {
    afterEach((done) => {
        unmount();
        setTimeout(done, 500);
    });

    it('should show drawer correctly', async function() {
        this.timeout(0);
        const [instance, element] = mount(BasicDemo);

        const trigger = element.querySelector('.k-btn') as HTMLElement;
        trigger.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        const drawer = getElement('.k-dialog-wrapper')!;
        expect(drawer.innerHTML).to.matchSnapshot();
        
        await wait(500);
        //hide
        getElement('.k-dialog-overlay')!.click();
        await wait(500);
        expect(getElement('.k-drawer')).to.be.undefined;
    });

    it('should show drawer from different placement correctly', async function() {
        this.timeout(0);
        const [instance, element] = mount(PlacementDemo);

        const [top, bottom, left, right] = element.querySelectorAll<HTMLElement>('.placement-btn');
        const test = async (btn: HTMLElement, className: string) => {
            dispatchEvent(btn, 'click');
            await wait();
            const classNames = getElement('.k-drawer')!.className;
            expect(classNames).to.include(className);
            await wait(200);
            getElement('.k-dialog-overlay')!.click();
            await wait(500);
            expect(getElement('.k-drawer')).to.be.undefined;
        };
        await test(top, 'k-top');
        await test(bottom, 'k-bottom');
        await test(left, 'k-left');
        await test(right, 'k-right');
    });

    it('should show no overlay', async () => {
        const [instance, element] = mount(overlayDemo);

        const trigger = element.querySelector('.k-btn') as HTMLElement;
        trigger.click();
        await wait();
        const overlay = getElement('.k-dialog-overlay')!;
        expect(overlay).to.be.undefined;
        await wait(200);
        dispatchEvent(document, 'click');
        await wait(500);
        const dialog = getElement('.k-dialog-wrapper')!;
        expect(dialog.innerHTML).to.matchSnapshot();

        const btn = dialog.querySelector('.k-dialog-ok') as HTMLElement;
        btn.click();
        await wait(500);
        expect(getElement('.k-drawer')).to.be.undefined;
    });

    it('nested dialog', async () => {
        class Demo extends Component {
            static template = `
                const {Dialog, Drawer} = this;
                <Drawer value={true}>
                    <Dialog value={true} ref="dialog">Dialog</Dialog>
                </Drawer>
            `;
            private Dialog = Dialog;
            private Drawer = Drawer;
        }
        const [instance, element] = mount(Demo);

        await wait();
        // expect(instance.refs.dialog.dialogRef.value.parentElement.parentElement).to.eql(document.body);
        const [dialog1, dialog2] = getElements('.k-dialog');
        expect(dialog2.querySelector('.k-dialog-body')!.textContent).to.eql('Dialog');
    });

    it('should show resize bar when resizable is true', async function() {
        class Demo extends Component {
            static template = `
                const {Drawer} = this;
                <Drawer value={true} resizable={true} placement="right">
                    <div>Content</div>
                </Drawer>
            `;
            private Drawer = Drawer;
        }
        const [instance, element] = mount(Demo);
        await wait();
        expect(getElement('.k-drawer-resize')).to.not.be.undefined;
    });

    it('should update width when dragging', async function() {
        class Demo extends Component {
            static template = `
                const {Drawer} = this;
                <Drawer value={true} resizable={true} placement="right" ref="drawer">
                    <div>Content</div>
                </Drawer>
            `;
            private Drawer = Drawer;
        }
        const [instance, element] = mount(Demo);
        await wait();

        const drawer = instance.refs.drawer.dialogRef.value;
        const initialWidth = drawer.offsetWidth;
        const resizeBar = getElement('.k-drawer-resize') as HTMLElement;

        const startX = resizeBar.getBoundingClientRect().left;
        dispatchEvent(resizeBar, 'mousedown', { clientX: startX, which: 1 });
        await wait();
        dispatchEvent(document, 'mousemove', { clientX: startX - 50 });
        await wait();
        dispatchEvent(document, 'mouseup');
        await wait(100);

        expect(drawer.offsetWidth).to.be.greaterThan(initialWidth);
    });
});

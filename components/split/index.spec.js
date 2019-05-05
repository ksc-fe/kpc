import BasicDemo from '~/components/split/demos/basic';
import VerticalDemo from '~/components/split/demos/vertical';
import RangeDemo from '~/components/split/demos/range';
import {mount, unmount, dispatchEvent, render} from 'test/utils';
import Intact from 'intact';
import Split from 'kpc/components/split';

describe('Split', () => {
    let instance;

    // afterEach(() => unmount(instance));

    it('should fix leftSize and rightSize', () => {
        const instance = render(Split, {lastSize: '10px', firstSize: '10px'});
        expect(instance.element.outerHTML).to.matchSnapshot();
        instance.destroy();
    });

    it('should drag to resize horizontal panel', () => {
        instance = mount(BasicDemo); 

        const [, demo1, demo2] = instance.element.querySelectorAll('.k-split');

        let dragLine = demo1.querySelector('.k-line-wrapper');
        // right click does not work
        dispatchEvent(dragLine, 'mousedown', {which: 2});
        expect(demo1.outerHTML).to.matchSnapshot();
        // moveStart
        dispatchEvent(dragLine, 'mousedown', {which: 1, clientX: 80, clientY: 0});
        // move 
        dispatchEvent(document, 'mousemove', {clientX: 100, clientY: 0});
        expect(demo1.outerHTML).to.matchSnapshot();
        // move to max
        dispatchEvent(document, 'mousemove', {clientX: 1000, clientY: 0});
        expect(demo1.outerHTML).to.matchSnapshot();
        // move to min
        dispatchEvent(document, 'mousemove', {clientX: -1, clientY: 0});
        expect(demo1.outerHTML).to.matchSnapshot();
        // moveEnd
        dispatchEvent(document, 'mouseup');

        dragLine = demo2.querySelector('.k-line-wrapper');
        // moveStart
        dispatchEvent(dragLine, 'mousedown', {which: 1, clientX: 714, clientY: 0});
        // move 
        dispatchEvent(document, 'mousemove', {clientX: 600, clientY: 0});
        expect(demo1.outerHTML).to.matchSnapshot();
        // move to max
        dispatchEvent(document, 'mousemove', {clientX: -1, clientY: 0});
        expect(demo1.outerHTML).to.matchSnapshot();
        // move to min
        dispatchEvent(document, 'mousemove', {clientX: 1000, clientY: 0});
        expect(demo1.outerHTML).to.matchSnapshot();
        // moveEnd
        dispatchEvent(document, 'mouseup');
    });

    it('should drag to resize vertical panel for lastSize', () => {
        instance = mount(VerticalDemo); 

        let dragLine = instance.element.querySelector('.k-line-wrapper');
        // moveStart
        dispatchEvent(dragLine, 'mousedown', {which: 1, clientX: 0, clientY: 994});
        // move 
        dispatchEvent(document, 'mousemove', {clientX: 0, clientY: 800});
        expect(instance.element.outerHTML).to.matchSnapshot();
        // move to max
        dispatchEvent(document, 'mousemove', {clientX: 0, clientY: -1});
        expect(instance.element.outerHTML).to.matchSnapshot();
        // move to min
        dispatchEvent(document, 'mousemove', {clientX: 0, clientY: 1100});
        expect(instance.element.outerHTML).to.matchSnapshot();
        // moveEnd
        dispatchEvent(document, 'mouseup');
    });

    it('should drag to resize vertical panel for firstSize', () => {
        class Demo extends Intact {
            @Intact.template()
            static template = `<Split mode="vertical" firstSize="80px">
                <b:first><div class="panel">top</div></b:first>
                <b:last><div class="panel">bottom</div></b:last>
            </Split>`;
            _init() {this.Split = Split;}
        }
        instance = mount(Demo); 

        let dragLine = instance.element.querySelector('.k-line-wrapper');
        // moveStart
        dispatchEvent(dragLine, 'mousedown', {which: 1, clientX: 0, clientY: 80});
        // move 
        dispatchEvent(document, 'mousemove', {clientX: 0, clientY: 800});
        expect(instance.element.outerHTML).to.matchSnapshot();
        // move to max
        dispatchEvent(document, 'mousemove', {clientX: 0, clientY: 1100});
        expect(instance.element.outerHTML).to.matchSnapshot();
        // move to min
        dispatchEvent(document, 'mousemove', {clientX: 0, clientY: -1});
        expect(instance.element.outerHTML).to.matchSnapshot();
        // moveEnd
        dispatchEvent(document, 'mouseup');
    });

    it('should not drag out of the min/max range', () => {
        instance = mount(RangeDemo);

        let dragLine = instance.element.querySelector('.k-line-wrapper');
        // moveStart
        dispatchEvent(dragLine, 'mousedown', {which: 1, clientX: 80});
        // move to max
        dispatchEvent(document, 'mousemove', {clientX: 800});
        expect(instance.element.outerHTML).to.matchSnapshot();
        // move to min
        dispatchEvent(document, 'mousemove', {clientX: 0});
        expect(instance.element.outerHTML).to.matchSnapshot();
        // moveEnd
        dispatchEvent(document, 'mouseup');
    });
});

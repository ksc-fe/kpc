import BasicDemo from '~/components/split/demos/basic';
import VerticalDemo from '~/components/split/demos/vertical';
import RangeDemo from '~/components/split/demos/range';
import {mount, unmount, dispatchEvent, wait} from '../../test/utils';
import {render, createVNode as h, Component, VNodeComponentClass} from 'intact';
import {Split} from './';

const test = ((sizes: [string, string], split: Split) => {
    // @ts-ignore
    const {firstSize, lastSize} = split.size;
    expect(firstSize.value).to.eq(sizes[0]);
    expect(lastSize.value).to.eq(sizes[1]);
});

describe('Split', () => {
    afterEach(() => unmount());

    it('should fix leftSize and rightSize', () => {
        class Demo extends Component {
            static template = () => h(Split, {lastSize: '10px', firstSize: '10px'});
        }
        const [instance, element] = mount(Demo);
        expect(element.outerHTML).to.matchSnapshot();
    });

    it('should drag to resize horizontal panel', async () => {
        const [instance, element] = mount(BasicDemo); 

        const [, {children: split1}, {children: split2}] = instance.$lastInput!.children as VNodeComponentClass<Split>[];
        const [, demo1, demo2] = element.querySelectorAll<HTMLElement>('.k-split');

        let dragLine = demo1.querySelector('.k-split-line-wrapper') as HTMLElement;
        // right click does not work
        dispatchEvent(dragLine, 'mousedown', {which: 2});
        await wait();
        // @ts-ignore
        expect(split1.drag.dragging.value).to.be.false;
        expect(demo1.outerHTML).to.matchSnapshot();
        // moveStart
        dispatchEvent(dragLine, 'mousedown', {which: 1, clientX: 80, clientY: 0});
        // move 
        dispatchEvent(document, 'mousemove', {clientX: 100, clientY: 0});
        await wait();
        expect(demo1.outerHTML).to.matchSnapshot();
        test(['100px', 'auto'], split1!);
        // move to max
        dispatchEvent(document, 'mousemove', {clientX: 1000, clientY: 0});
        await wait();
        expect(demo1.outerHTML).to.matchSnapshot();
        test(['794px', 'auto'], split1!);
        // move to min
        dispatchEvent(document, 'mousemove', {clientX: -1, clientY: 0});
        await wait();
        expect(demo1.outerHTML).to.matchSnapshot();
        test(['0px', 'auto'], split1!);
        // moveEnd
        dispatchEvent(document, 'mouseup');

        dragLine = demo2.querySelector('.k-split-line-wrapper') as HTMLElement;
        // moveStart
        dispatchEvent(dragLine, 'mousedown', {which: 1, clientX: 714, clientY: 0});
        // move 
        dispatchEvent(document, 'mousemove', {clientX: 600, clientY: 0});
        await wait();
        expect(demo2.outerHTML).to.matchSnapshot();
        test(['auto', `${800 - 600 - 6}px`], split2!);
        // move to max
        dispatchEvent(document, 'mousemove', {clientX: -1, clientY: 0});
        await wait();
        expect(demo2.outerHTML).to.matchSnapshot();
        test(['auto', `${800 - 6}px`], split2!);
        // move to min
        dispatchEvent(document, 'mousemove', {clientX: 1000, clientY: 0});
        expect(demo2.outerHTML).to.matchSnapshot();
        test(['auto', `0px`], split2!);
        // moveEnd
        dispatchEvent(document, 'mouseup');
    });

    it('should drag to resize vertical panel for lastSize', async () => {
        const [instance, element] = mount(VerticalDemo); 
        const split = instance.$lastInput!.children as Split;

        let dragLine = element.querySelector('.k-split-line-wrapper') as HTMLElement;
        // moveStart
        dispatchEvent(dragLine, 'mousedown', {which: 1, clientX: 0, clientY: 994});
        // move 
        dispatchEvent(document, 'mousemove', {clientX: 0, clientY: 800});
        expect(element.outerHTML).to.matchSnapshot();
        test(['auto', `${1080 - 800 - 6}px`], split);
        // move to max
        dispatchEvent(document, 'mousemove', {clientX: 0, clientY: -1});
        expect(element.outerHTML).to.matchSnapshot();
        test(['auto', `${1080 - 6}px`], split);
        // move to min
        dispatchEvent(document, 'mousemove', {clientX: 0, clientY: 1100});
        expect(element.outerHTML).to.matchSnapshot();
        test(['auto', `0px`], split);
        // moveEnd
        dispatchEvent(document, 'mouseup');
    });

    it('should drag to resize vertical panel for firstSize', async () => {
        class Demo extends Component {
            static template = `
                const {Split} = this;
                <Split mode="vertical" firstSize="80px">
                    <b:first><div class="panel">top</div></b:first>
                    <b:last><div class="panel">bottom</div></b:last>
                </Split>
            `;
            private Split = Split;
        }
        const [instance, element] = mount(Demo); 
        const split = instance.$lastInput!.children as Split;

        let dragLine = element.querySelector('.k-split-line-wrapper') as HTMLElement;
        // moveStart
        dispatchEvent(dragLine, 'mousedown', {which: 1, clientX: 0, clientY: 80});
        // move 
        dispatchEvent(document, 'mousemove', {clientX: 0, clientY: 800});
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        test(['800px', 'auto'], split);
        // move to max
        dispatchEvent(document, 'mousemove', {clientX: 0, clientY: 1100});
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        test([`${1080 - 6}px`, 'auto'], split);
        // move to min
        dispatchEvent(document, 'mousemove', {clientX: 0, clientY: -1});
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        test([`0px`, 'auto'], split);
        // moveEnd
        dispatchEvent(document, 'mouseup');
    });

    it('should not drag out of the min/max range', async () => {
        const [instance, element] = mount(RangeDemo);
        const split = instance.$lastInput!.children as Split;

        let dragLine = element.querySelector('.k-split-line-wrapper') as HTMLElement;
        // moveStart
        dispatchEvent(dragLine, 'mousedown', {which: 1, clientX: 80});
        // move to max
        dispatchEvent(document, 'mousemove', {clientX: 800});
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        test(['410px', 'auto'], split);
        // move to min
        dispatchEvent(document, 'mousemove', {clientX: 0});
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        test(['40px', 'auto'], split);
        // moveEnd
        dispatchEvent(document, 'mouseup');
    });
});

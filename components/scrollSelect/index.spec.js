import {mount, unmount, dispatchEvent, wait} from 'test/utils';
import BasicDemo from '~/components/scrollSelect/demos/basic';

describe('ScrollSelect', () => {
    let instance;

    afterEach(() => unmount(instance));

    it('should select by scroll', async () => {
        instance = mount(BasicDemo);

        // scroll
        dispatchEvent(instance.element.firstChild, 'wheel', {deltaY: 1});
        await wait(100);
        expect(instance.get('value')).to.eql(1);
        
        dispatchEvent(instance.element.firstChild, 'wheel', {deltaY: -1});
        await wait(100);
        expect(instance.get('value')).to.eql(0);
    });

    it('should select by click', () => {
        instance = mount(BasicDemo);

        instance.element.querySelector('.k-scroll-item').click();
        expect(instance.element.innerHTML).to.matchSnapshot();
        expect(instance.get('value')).to.eql(3);
    });

    it('should select by drag', () => {
        instance = mount(BasicDemo);

        dispatchEvent(instance.element.firstChild, 'mousedown', {which: 1, clientY: 0});
        dispatchEvent(document, 'mousemove', {clientY: -40});
        expect(instance.get('value')).eql(1);
        // do not change value if the distance is too short
        dispatchEvent(document, 'mousemove', {clientY: -30});
        expect(instance.get('value')).eql(1);
        dispatchEvent(document, 'mousemove', {clientY: 0});
        expect(instance.get('value')).eql(0);
        dispatchEvent(document, 'mouseup');
    });
});

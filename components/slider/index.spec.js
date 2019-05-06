import BasicDemo from '~/components/slider/demos/basic';
import RangeDemo from '~/components/slider/demos/range';
import DisabledDemo from '~/components/slider/demos/disabled';
import {mount, unmount, dispatchEvent} from 'test/utils';
import Slider from 'kpc/components/slider';
import Intact from 'intact';

describe('Slider', () => {
    let instance;

    afterEach(() => {
        unmount(instance);
    });

    it('basic test', () => {
        instance = mount(BasicDemo);

        const [, slider] = instance.element.querySelectorAll('.k-slider');

        // drag
        const handle = slider.querySelector('.k-handle');
        dispatchEvent(handle, 'mousedown');
        dispatchEvent(handle, 'focusin');
        dispatchEvent(document, 'mousemove');
        expect(instance.get('value2')).eql(50);
        // move to boundary
        dispatchEvent(document, 'mousemove', {clientX: -10});
        expect(instance.get('value2')).eql(50);
        dispatchEvent(document, 'mouseup', {clientX: 999999});
        expect(instance.get('value2')).eql(500);

        // click
        const wrapper = slider.querySelector('.k-slider-wrapper .k-wrapper');
        const width = wrapper.getBoundingClientRect().width;
        dispatchEvent(wrapper, 'click', {clientX: width / 2});
        expect(instance.get('value2')).eql((500 + 50) / 2);

        // set value
        instance.set('value2', 135 + 50);
        const bar = slider.querySelector('.k-bar');
        expect(bar.style.width).eql('30%');
        instance.set('value2', -10);
        expect(bar.style.width).eql('0%');
        instance.set('value2', 1000);
        expect(bar.style.width).eql('100%');
    });

    it('range test', () => {
        instance = mount(RangeDemo);

        const windowWidth = 800; //document.documentElement.clientWidth;
        const [first, second] = instance.element.querySelectorAll('.k-handle');

        // drag
        dispatchEvent(first, 'mousedown');
        dispatchEvent(first, 'focusin');
        dispatchEvent(first, 'mousemove', {clientX: windowWidth * 0.8});
        expect(instance.element.innerHTML).to.matchSnapshot();
        dispatchEvent(first, 'mouseup', {clientX: windowWidth * 0.8});
        expect(instance.element.innerHTML).to.matchSnapshot();
        expect(instance.get('values')).eql([76, 80]);

        dispatchEvent(second, 'mousedown');
        dispatchEvent(second, 'focusin');
        dispatchEvent(second, 'mousemove', {clientX: windowWidth * 0.6});
        expect(instance.element.innerHTML).to.matchSnapshot();
        dispatchEvent(second, 'mouseup', {clientX: windowWidth * 0.6});
        expect(instance.element.innerHTML).to.matchSnapshot();
        expect(instance.get('values')).eql([60, 76]);

        // click
        const wrapper = instance.element.querySelector('.k-slider-wrapper .k-wrapper');
        dispatchEvent(wrapper, 'click', {clientX: windowWidth * 0.5});
        expect(instance.element.innerHTML).to.matchSnapshot();
        expect(instance.get('values')).eql([50, 76]);

        dispatchEvent(wrapper, 'click', {clientX: windowWidth * 0.7});
        expect(instance.element.innerHTML).to.matchSnapshot();
        expect(instance.get('values')).eql([50, 70]);

        // set invalid value
        instance.set('values', 1);
        expect(instance.get('values')).eql([0, 0]);
    });

    it('keyboard operation for basic', () => {
        instance = mount(BasicDemo);

        const [, slider] = instance.element.querySelectorAll('.k-slider');
        const handle = slider.querySelector('.k-handle');

        dispatchEvent(handle, 'focusin');
        dispatchEvent(handle, 'keydown', {keyCode: 37});
        expect(slider.innerHTML).to.matchSnapshot();
        dispatchEvent(handle, 'keydown', {keyCode: 39});
        expect(slider.innerHTML).to.matchSnapshot();
        dispatchEvent(handle, 'focusout');
        expect(slider.innerHTML).to.matchSnapshot();
    });

    it('keyboard operation for range', () => {
        instance = mount(RangeDemo);

        const [first, second] = instance.element.querySelectorAll('.k-handle');
        
        instance.set('values', [50, 51]);
        dispatchEvent(first, 'focusin');
        dispatchEvent(first, 'keydown', {keyCode: 39});
        expect(instance.element.innerHTML).to.matchSnapshot();
        dispatchEvent(first, 'keydown', {keyCode: 39});
        expect(instance.element.innerHTML).to.matchSnapshot();
        dispatchEvent(second, 'keydown', {keyCode: 39});
        expect(instance.element.innerHTML).to.matchSnapshot();
        dispatchEvent(second, 'focusout');

        instance.set('values', [50, 51]);
        dispatchEvent(second, 'focusin');
        dispatchEvent(second, 'keydown', {keyCode: 37});
        expect(instance.element.innerHTML).to.matchSnapshot();
        dispatchEvent(second, 'keydown', {keyCode: 37});
        expect(instance.element.innerHTML).to.matchSnapshot();
        dispatchEvent(first, 'keydown', {keyCode: 37});
        expect(instance.element.innerHTML).to.matchSnapshot();
        dispatchEvent(first, 'focusout');
    });

    it('disabled', () => {
        instance = mount(DisabledDemo);

        // cannot drag
        const slider = instance.element.querySelector('.k-slider');
        const handle = slider.querySelector('.k-handle');
        dispatchEvent(handle, 'mousedown');
        dispatchEvent(handle, 'focusin');
        dispatchEvent(document, 'mousemove', {clientX: 0});
        dispatchEvent(handle, 'mouseup', {clientX: 0});
        expect(slider.innerHTML).to.matchSnapshot();

        // keyboard
        dispatchEvent(handle, 'keydown', {keyCode: 37});
        dispatchEvent(handle, 'focusout');
        expect(slider.innerHTML).to.matchSnapshot();

        // click
        const wrapper = slider.querySelector('.k-slider-wrapper .k-wrapper');
        dispatchEvent(wrapper, 'click', {clientX: 0});
        expect(slider.innerHTML).to.matchSnapshot();
    });

    it('min/max/step is undefined', () => {
        class Component extends Intact {
            @Intact.template()
            static template = `<Slider min={{ undefined }}
                max={{ undefined }}
                step={{ undefined }}
                value={{ 1 }}
            />`;
            _init() {
                this.Slider = Slider;
            }
        }
        instance = mount(Component);

        expect(instance.element.innerHTML).to.matchSnapshot();
    });
});

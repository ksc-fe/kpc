import BasicDemo from '~/components/slider/demos/basic';
import RangeDemo from '~/components/slider/demos/range';
import DisabledDemo from '~/components/slider/demos/disabled';
import StepDemo from '~/components/slider/demos/step';
import TooltipDemo from '~/components/slider/demos/tooltip';
import {mount, unmount, dispatchEvent, getElement, wait, getElements} from 'test/utils';
import Slider from 'kpc/components/slider';
import Intact from 'intact';
import DynamicStepDemo from '~/components/slider/demos/dynamicStep';

describe('Slider', () => {
    let instance;

    afterEach(() => unmount(instance));

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

    it('should log error when max < min', () => {
         class Component extends Intact {
            @Intact.template()
            static template = `<Slider min={{ 20 }}
                max={{ 0 }}
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

    it('should input any value even if it has step', () => {
        instance = mount(StepDemo);

        const input = instance.element.querySelector('input');
        input.value = 1;
        dispatchEvent(input, 'input');
        expect(input.value).to.eql('1');
        input.value = 11;
        dispatchEvent(input, 'input');
        expect(input.value).to.eql('11');
        expect(instance.get('value1')).to.eql(10);
        dispatchEvent(input, 'change');
        expect(input.value).to.eql('10');
    });

    it('should show tooltip', () => {
        instance = mount(TooltipDemo);

        instance.set('value2', 11);
        const content = getElements('.k-tooltip-content')[0];
        expect(content.textContent).to.matchSnapshot();
    });

    it('should locate at the end if start value is equal to end value', () => {
        class Component extends Intact {
            @Intact.template()
            static template = `<div>
                <Slider min={{ 1 }} max={{ 1 }} value={{ 1 }} />
                <Slider min={{ 1 }} max={{ 1 }} isRange />
            </div>`;
            _init() {
                this.Slider = Slider;
            }
        }
        instance = mount(Component);
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('should trigger change event correctly', () => {
        const spy = sinon.spy();
        class Component extends Intact {
            @Intact.template()
            static template = `<Slider ev-change={{ self._onChange }} v-model="value" />`;
            defaults() {
                return {value: 0};
            }
            _init() {
                this.Slider = Slider;
            }
            _onChange(v) {
                console.log('change', v);
                spy(v);
            }
        }
        instance = mount(Component);

        const handle = instance.element.querySelector('.k-handle');
        const bar = instance.element.querySelector('.k-bar-wrapper');

        // keyboard
        dispatchEvent(handle, 'focusin');
        dispatchEvent(handle, 'keydown', {keyCode: 39});
        expect(spy.callCount).to.eql(0);
        dispatchEvent(handle, 'keydown', {keyCode: 39});
        expect(spy.callCount).to.eql(0);
        dispatchEvent(handle, 'keyup', {keyCode: 13});
        expect(spy.callCount).to.eql(0);
        dispatchEvent(handle, 'keyup', {keyCode: 39});
        expect(spy.callCount).to.eql(1);
        expect(spy.calledWith(2)).to.be.true;
        dispatchEvent(handle, 'keydown', {keyCode: 39});
        expect(spy.callCount).to.eql(1);
        dispatchEvent(handle, 'keyup', {keyCode: 39});
        expect(spy.callCount).to.eql(2);
        expect(spy.calledWith(3)).to.be.true;

        // drag
        const width = bar.getBoundingClientRect().width;
        dispatchEvent(handle, 'mousedown');
        dispatchEvent(document, 'mousemove', {clientX: 0.1 * width});
        expect(spy.callCount).to.eql(2);
        dispatchEvent(document, 'mouseup', {clientX: 0.1 * width});
        expect(spy.callCount).to.eql(3);
        expect(spy.calledWith(10)).to.be.true;

        // click
        dispatchEvent(bar, 'click', {clientX: 0.2 * width});
        expect(spy.callCount).to.eql(4);
        expect(spy.calledWith(20)).to.be.true;

        // click end
        const start = instance.element.querySelector('.k-box span');
        start.click();
        expect(spy.callCount).to.eql(5);
        expect(spy.calledWith(0)).to.be.true;

        // spinner
        const input = instance.element.querySelector('input');
        input.value = 1;
        dispatchEvent(input, 'input');
        expect(spy.callCount).to.eql(6);
        expect(spy.calledWith(1)).to.be.true;
        const btn = instance.element.querySelector('.k-btn');
        btn.click();
        expect(spy.callCount).to.eql(7);
        expect(spy.calledWith(0)).to.be.true;
    });

    it('should set init value to min value', async () => {
        class Component extends Intact {
            @Intact.template()
            static template = `<div>
                <Slider min={{ -1 }} max={{ 1 }} v-model="a"/>
                <Slider min={{ -1 }} max={{ 1 }} isRange v-model="b" />
            </div>`;
            _init() {
                this.Slider = Slider;
            }
        }
        instance = mount(Component);

        expect(instance.get('a')).to.eql(-1);
        expect(instance.get('b')).to.eql([-1, -1]);
    });

    it('should set value by `min + step * n`', async () => {
        class Component extends Intact {
            @Intact.template()
            static template = `<div>
                <Slider min={{ -6 }} max={{ 20 }} v-model="value" step={{ 5 }} isShowStop />
            </div>`;
            _init() {
                this.Slider = Slider;
            }
        }
        instance = mount(Component);

        instance.set('value', 0);
        expect(instance.get('value'), -1);

        await wait(300);
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('dynamic step', () => {
        instance = mount(DynamicStepDemo);
        const handle = instance.element.querySelector('.k-handle');
        const model = `value${index}`;
        instance.set(model, 100);

        dispatchEvent(handle, 'focusin');

        dispatchEvent(handle, 'keydown', {keyCode: 37});
        expect(instance.get(model)).to.eql(90);

        dispatchEvent(handle, 'keydown', {keyCode: 39});
        expect(instance.get(model)).to.eql(100);

        dispatchEvent(handle, 'keydown', {keyCode: 39});
        expect(instance.get(model)).to.eql(150);

        dispatchEvent(handle, 'keydown', {keyCode: 37});
        expect(instance.get(model)).to.eql(100);

        dispatchEvent(handle, 'focusout');
    });
});

import BasicDemo from '~/components/slider/demos/basic';
import RangeDemo from '~/components/slider/demos/range';
import DisabledDemo from '~/components/slider/demos/disabled';
import StepDemo from '~/components/slider/demos/step';
import TooltipDemo from '~/components/slider/demos/tooltip';
import {mount, unmount, dispatchEvent, getElement, wait, getElements, fakeError} from 'test/utils';
import {Slider} from './';
import {Component} from 'intact';
import DynamicStepDemo from '~/components/slider/demos/dynamicStep';

describe('Slider', () => {
    // afterEach(() => unmount());

    it('basic test', async () => {
        const [instance, element] = mount(BasicDemo);

        const [, slider] = element.querySelectorAll<HTMLElement>('.k-slider');

        // drag
        const handle = slider.querySelector('.k-slider-thumb') as HTMLElement;
        dispatchEvent(handle, 'mousedown', {which: 1});
        dispatchEvent(handle, 'focusin');
        dispatchEvent(document, 'mousemove', {clientX: 0});
        expect(instance.get('value2')).eql(50);
        // move to boundary
        dispatchEvent(document, 'mousemove', {clientX: -10});
        expect(instance.get('value2')).eql(50);
        dispatchEvent(document, 'mousemove', {clientX: 999999});
        expect(instance.get('value2')).eql(500);
        dispatchEvent(document, 'mouseup');

        // click
        const wrapper = slider.querySelector('.k-slider-track-wrapper') as HTMLElement;
        const width = wrapper.getBoundingClientRect().width;
        dispatchEvent(wrapper, 'click', {clientX: width / 2});
        expect(instance.get('value2')).eql((500 + 50) / 2);

        // set value
        const bar = slider.querySelector('.k-slider-bar') as HTMLElement;
        instance.set('value2', 135 + 50);
        await wait();
        expect(bar.style.width).eql('30%');
        instance.set('value2', -10);
        await wait();
        expect(bar.style.width).eql('0%');
        instance.set('value2', 1000);
        await wait();
        expect(bar.style.width).eql('100%');
    });

    it('range test', async () => {
        const [instance, element] = mount(RangeDemo);

        const windowWidth = 800; //document.documentElement.clientWidth;
        const [first, second] = element.querySelectorAll<HTMLElement>('.k-slider-thumb');

        // drag
        dispatchEvent(first, 'mousedown', {which: 1});
        dispatchEvent(first, 'focusin');
        dispatchEvent(first, 'mousemove', {clientX: windowWidth * 0.8});
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('values')).eql([76, 80]);
        dispatchEvent(first, 'mouseup');

        dispatchEvent(second, 'mousedown', {which: 1});
        dispatchEvent(second, 'focusin');
        dispatchEvent(second, 'mousemove', {clientX: windowWidth * 0.6});
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('values')).eql([60, 76]);
        dispatchEvent(first, 'mouseup');

        // click
        const wrapper = element.querySelector('.k-slider-track-wrapper') as HTMLElement;
        dispatchEvent(wrapper, 'click', {clientX: windowWidth * 0.5});
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('values')).eql([50, 76]);

        dispatchEvent(wrapper, 'click', {clientX: windowWidth * 0.7});
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('values')).eql([50, 70]);

        // set invalid value
        instance.set<number>('values', 1);
        await wait();
        expect(instance.get('values')).eql([1, 1]);
    });

    it('keyboard operation for basic', async () => {
        const [instance, element] = mount(BasicDemo);

        const [, slider] = element.querySelectorAll<HTMLElement>('.k-slider');
        const handle = slider.querySelector('.k-slider-thumb') as HTMLElement;

        dispatchEvent(handle, 'focusin');
        dispatchEvent(handle, 'keydown', {keyCode: 37});
        await wait();
        expect(slider.innerHTML).to.matchSnapshot();
        expect(instance.get('value2')).to.eql(276);
        dispatchEvent(handle, 'keydown', {keyCode: 39});
        await wait();
        expect(slider.innerHTML).to.matchSnapshot();
        expect(instance.get('value2')).to.eql(277);
        dispatchEvent(handle, 'focusout');
        await wait();
        expect(slider.innerHTML).to.matchSnapshot();
    });

    it('keyboard operation for range', async () => {
        const [instance, element] = mount(RangeDemo);

        const [first, second] = element.querySelectorAll<HTMLElement>('.k-slider-thumb');

        instance.set('values', [50, 51]);
        await wait();
        dispatchEvent(first, 'focusin');
        dispatchEvent(first, 'keydown', {keyCode: 39});
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('values')).to.eql([51, 51]);
        dispatchEvent(first, 'keydown', {keyCode: 39});
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('values')).to.eql([51, 52]);
        dispatchEvent(second, 'keydown', {keyCode: 39});
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('values')).to.eql([51, 53]);
        dispatchEvent(second, 'focusout');

        instance.set('values', [50, 51]);
        await wait();
        dispatchEvent(second, 'focusin');
        dispatchEvent(second, 'keydown', {keyCode: 37});
        await wait();
        expect(instance.get('values')).to.eql([50, 50]);
        expect(element.innerHTML).to.matchSnapshot();
        dispatchEvent(second, 'keydown', {keyCode: 37});
        await wait();
        expect(instance.get('values')).to.eql([49, 50]);
        expect(element.innerHTML).to.matchSnapshot();
        dispatchEvent(first, 'keydown', {keyCode: 37});
        await wait();
        expect(instance.get('values')).to.eql([48, 50]);
        expect(element.innerHTML).to.matchSnapshot();
        dispatchEvent(first, 'focusout');
    });

    it('disabled', async () => {
        const [instance, element] = mount(DisabledDemo);
        const slider = instance.refs.__test as Slider;

        // cannot drag
        const sliderDom = element.querySelector('.k-slider') as HTMLElement;
        const handle = sliderDom.querySelector('.k-slider-thumb') as HTMLElement;
        dispatchEvent(handle, 'mousedown', {which: 1});
        dispatchEvent(handle, 'focusin');
        dispatchEvent(document, 'mousemove', {clientX: 0});
        dispatchEvent(handle, 'mouseup', {clientX: 0});
        await wait();
        expect(sliderDom.innerHTML).to.matchSnapshot();
        expect(slider.get('value')).to.eql(50);

        // keyboard
        dispatchEvent(handle, 'keydown', {keyCode: 37});
        dispatchEvent(handle, 'focusout');
        await wait();
        expect(sliderDom.innerHTML).to.matchSnapshot();
        expect(slider.get('value')).to.eql(50);

        // click
        const wrapper = sliderDom.querySelector('.k-slider-track-wrapper') as HTMLElement;
        dispatchEvent(wrapper, 'click', {clientX: 0});
        await wait();
        expect(sliderDom.innerHTML).to.matchSnapshot();
        expect(slider.get('value')).to.eql(50);
    });

    it('min/max/step is undefined', () => {
        class Demo extends Component {
            static template = `const {Slider} = this; <Slider min={undefined}
                max={undefined}
                step={undefined}
                value={1}
            />`;
            private Slider = Slider;
        }
        const [instance, element] = mount(Demo);

        expect(element.innerHTML).to.matchSnapshot();
    });

    it('should log error when max < min', () => {
         class Demo extends Component {
            static template = `const {Slider} = this; <Slider min={20}
                max={0}
                step={undefined}
                value={1}
            />`;
            private Slider = Slider;
        }
        const error = fakeError();
        const [instance, element] = mount(Demo);
        expect(element.innerHTML).to.matchSnapshot();
        error('[Slider] min must less than or equal to max, but got min: 20 max: 0');
    });

    it('should input any value even if it has step', async () => {
        const [instance, element] = mount(StepDemo);

        const input = element.querySelector('input') as HTMLInputElement;
        input.value = '1';
        dispatchEvent(input, 'input');
        await wait();
        expect(input.value).to.eql('1');
        input.value = '11';
        dispatchEvent(input, 'input');
        await wait();
        expect(input.value).to.eql('11');
        expect(instance.get('value1')).to.eql(10);
        dispatchEvent(input, 'change');
        await wait();
        expect(input.value).to.eql('10');

        instance.set<number>('value1', 13);
        await wait();
        expect(instance.get('value1')).to.eql(15);

        // disable forceStep
        const slider = instance.refs.__test as Slider;
        slider.set('forceStep', false);
        instance.set<number>('value1', 13);
        await wait();
        expect(instance.get('value1')).to.eql(13);
    });

    it('should show tooltip', async () => {
        const [instance, element] = mount(TooltipDemo);

        instance.set('value2', 11);
        await wait();
        const content = getElements('.k-tooltip-content')[0];
        expect(content.textContent).to.eql('满2年，优惠4个月');

        instance.set('value2', 5);
        await wait();
        expect(content.textContent).to.eql('');
    });

    it('should locate at the end if start value is equal to end value', () => {
        class Demo extends Component {
            static template = `const {Slider} = this; <div>
                <Slider min={1} max={1} value={1} />
                <Slider min={1} max={1} isRange />
            </div>`;
            private Slider = Slider;
        }
        const [instance, element] = mount(Demo);
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('should trigger change event correctly', async () => {
        const spy = sinon.spy();
        class Demo extends Component {
            static template = `const Slider = this.Slider; <Slider ev-change={this._onChange} v-model="value" />`;
            static defaults() {
                return {value: 0};
            }
            private Slider = Slider;
            _onChange(v) {
                console.log('change', v);
                spy(v);
            }
        }
        const [instance, element] = mount(Demo);

        const handle = element.querySelector('.k-slider-thumb') as HTMLElement;
        const bar = element.querySelector('.k-slider-track-wrapper') as HTMLElement;

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
        dispatchEvent(handle, 'mousedown', {which: 1});
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
        const start = element.querySelector('.k-slider-ends span') as HTMLElement;
        start.click();
        expect(spy.callCount).to.eql(5);
        expect(spy.calledWith(0)).to.be.true;

        // spinner
        const input = element.querySelector('input') as HTMLInputElement;
        input.value = '1';
        dispatchEvent(input, 'input');
        await wait();
        expect(spy.callCount).to.eql(6);
        expect(spy.calledWith(1)).to.be.true;
        const btn = element.querySelector('.k-btn') as HTMLElement;
        btn.click();
        await wait();
        expect(spy.callCount).to.eql(7);
        expect(spy.calledWith(0)).to.be.true;
    });

    // it('should set init value to min value', async () => {
        // class Demo extends Component<{a: number, b: number}> {
            // static template = `const {Slider} = this; <div>
                // <Slider min={-1} max={1} v-model="a"/>
                // <Slider min={-1} max={1} isRange v-model="b" />
            // </div>`;
            // private Slider = Slider;
        // }
        // const [instance, element] = mount(Demo);

        // expect(instance.get('a')).to.eql(-1);
        // expect(instance.get('b')).to.eql([-1, -1]);
    // });

    it('should set value by `min + step * n`', async () => {
        class Demo extends Component<{value: number}> {
            static template = `const {Slider} = this; <div>
                <Slider min={-6} max={20} v-model="value" step={5} points />
            </div>`;
            private Slider = Slider;
        }
        const [instance, element] = mount(Demo);

        instance.set('value', 0);
        await wait();
        expect(instance.get('value')).to.eql(-1);
    });

    it('dynamic step', async () => {
        const [instance, element] = mount(DynamicStepDemo);
        const handle = element.querySelector('.k-slider-thumb') as HTMLElement;
        const model = `value1`;
        instance.set<number>(model, 100);
        await wait();

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

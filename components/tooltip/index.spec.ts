import {findDomFromVNode, Component} from 'intact';
import BasicDemo from '~/components/tooltip/demos/basic';
import PositionDemo from '~/components/tooltip/demos/position';
import TriggerDemo from '~/components/tooltip/demos/trigger';
import ContentDemo from '~/components/tooltip/demos/content';
import ConfirmDemo from '~/components/tooltip/demos/confirm';
import AlwaysDemo from '~/components/tooltip/demos/always';
import {Tooltip} from './';
import {Radio} from '../radio';
import {mount, unmount, dispatchEvent, getElement, wait} from '../../test/utils';

describe('Tooltip', () => {
    afterEach((done) => {
        unmount();
        setTimeout(done, 500);
    });

    it('should show and hide content correctly', async () => {
        const [, element] = mount(BasicDemo);

        const [first, , second, , disabled] = Array.from<HTMLElement>(element.querySelectorAll('span'));
        dispatchEvent(first, 'mouseenter');
        await wait(0);
        let content = getElement('.k-tooltip-content')!;
        expect(content.textContent).eql('hello');

        // should not show
        dispatchEvent(second, 'mouseenter');
        await wait(0);
        let content1 = getElement('.k-tooltip-content');
        expect(content1).eql(content);

        // should not show if disabled
        dispatchEvent(disabled, 'mouseenter');
        await wait(0);
        let content2 = getElement('.k-tooltip-content');
        expect(content2).eql(content);

        // should hide
        dispatchEvent(first, 'mouseleave');
        await wait(600);
        expect(content.style.display).to.eql('none');
    });

    it('should position correctly', async () => {
        const [instance, element] = mount(PositionDemo);

        const tooltipContent = getElement('.k-tooltip-content')!;
        const arrow = tooltipContent.querySelector<HTMLElement>('.k-tooltip-arrow')!;
        const at = element.querySelector('.opera .k-btn') as HTMLElement;
        const {width, height, left, top} = at.getBoundingClientRect();
        const contains = (name: string) => expect(arrow.classList.contains(name)).to.be.true;
        const eql = (a: number, b: number) => {
            a = Math.floor(a);
            b = Math.floor(b);
            // Don't be entangled with the difference of 1 to 2 pixels
            expect(a >= b - 1 && a <= b + 1).to.be.true;
        };

        
        instance.set('position', 'left');
        await wait();
        contains('k-right');
        eql(arrow.offsetTop, Math.round(tooltipContent.offsetHeight / 2 - arrow.offsetHeight / 2));

        instance.set('position', 'right');
        await wait();
        contains('k-left');
        eql(arrow.offsetTop, Math.round(tooltipContent.offsetHeight / 2 - arrow.offsetHeight / 2));

        instance.set('position', 'top');
        await wait();
        contains('k-bottom');
        eql(arrow.offsetLeft, Math.round(tooltipContent.offsetWidth / 2 - arrow.offsetWidth / 2));

        instance.set('position', 'bottom');
        await wait();
        contains('k-top');
        eql(arrow.offsetLeft, Math.round(tooltipContent.offsetWidth / 2 - arrow.offsetWidth / 2));

        instance.set('position', 'custom');
        await wait();
        instance.getPosition = () => ({my: 'left bottom', at: 'left top'});
        instance.forceUpdate();
        await wait();
        eql(arrow.offsetLeft, Math.round(width / 2 - arrow.offsetWidth / 2));

        instance.getPosition = () => ({my: 'left+100 bottom', at: 'left top'});
        instance.forceUpdate();
        await wait();
        eql(arrow.offsetLeft, 1);

        instance.getPosition = () => ({my: 'left top', at: 'right top'});
        instance.forceUpdate();
        await wait();
        eql(arrow.offsetTop, Math.floor(tooltipContent.offsetHeight / 2 - arrow.offsetHeight / 2));

        instance.getPosition = () => ({my: 'left top+30', at: 'right top'});
        instance.forceUpdate();
        await wait();
        eql(arrow.offsetTop, 1);
    });

    it('should trigger correctly', async () => {
        const [, element] = mount(TriggerDemo);

        const [, click, ] = element.querySelectorAll<HTMLElement>('.k-btn');
        click.click();
        await wait();
        let content = getElement('.k-tooltip-content')!;
        expect(content.textContent).to.matchSnapshot();

        // should not hide
        content.click();
        await wait();
        let content1 = getElement('.k-tooltip-content');
        expect(content).eql(content1);

        // should hide when click document
        document.body.click();
        await wait(500);
        expect(content.style.display).to.eql('none')
    });

    it('should be hoverable', async function() {
        this.timeout(0);

        const [, element] = mount(TriggerDemo);
        const [, , canHover] = Array.from(element.querySelectorAll('.k-btn'));
        dispatchEvent(canHover, 'mouseenter');
        await wait();
        dispatchEvent(canHover, 'mouseleave');
        await wait(500);
        const content = getElement('.k-tooltip-content')!;
        dispatchEvent(content, 'mouseenter');
        await wait(500);
        const content1 = getElement('.k-tooltip-content');

        //  should not hide when move mouse from button to tooltip content    
        expect(content1).eql(content);

        dispatchEvent(canHover, 'mouseleave');
        await wait(800);
        expect(content.style.display).to.eql('none')
    });

    it('should custom content correctly', async () => {
        const [, element] = mount(ContentDemo);

        const [btn] =  Array.from<HTMLElement>(element.querySelectorAll('.k-btn'));
        btn.click();
        await wait(500);
        const content = getElement('.k-tooltip-content') as HTMLElement;
        // ignore the arrow, because it may change className to adapt to the direction
        expect(content.querySelector<HTMLElement>('.k-slider')!.outerHTML).to.matchSnapshot();
    });

    it('should handle confirm tooltip corectly', async () => {
        const [instance, element] = mount(ConfirmDemo);

        const cancelCb = sinon.spy();
        const okCb = sinon.spy();

        instance.refs.__test.on('cancel', cancelCb);
        instance.refs.__test.on('ok', okCb);

        dispatchEvent(element.children[0], 'click');
        await wait();
        let content = getElement('.k-tooltip-content')!;
        expect((content.querySelector('.k-tooltip-buttons') as HTMLElement).outerHTML).to.matchSnapshot();

        (content.querySelector('.k-btn') as HTMLElement).click();
        await wait(500);
        expect(content.style.display).eql('none');

        dispatchEvent(element.firstElementChild!, 'click');
        await wait();
        content = getElement('.k-tooltip-content')!;
        const [, btn] = Array.from<HTMLElement>(content.querySelectorAll('.k-btn'));
        btn.click();

        await wait(500);
        expect(content.style.display).eql('none');
        expect(cancelCb.callCount).eql(1);
        expect(okCb.callCount).eql(1);
    });

    it('should always show tooltip', async () => {
        const [, element] = mount(AlwaysDemo);

        const content = getElement('.k-tooltip-content')!;
        expect(content.textContent).eql('hello');

        document.body.click();
        await wait(500);
        expect(getElement('.k-tooltip-content')).eql(content);

        (element.querySelector('span') as HTMLElement).click();
        await wait(500);
        expect(getElement('.k-tooltip-content')).eql(content);

        dispatchEvent(content, 'mouseleave');
        await wait(600);
        expect(getElement('.k-tooltip-content')).eql(content);
    });

    // it('should hide tooltip when v-show is false in Vue', async () => {
    //     interface IData {
    //         show: boolean
    //     }
    //     const Test = {
    //         template: `
    //             <div>
    //                 <Tooltip content="hello" v-show="show">
    //                     <div style="font-size: 12px;">hover</div>
    //                 </Tooltip>
    //             </div>
    //         `,
    //         components: {
    //             Tooltip: Tooltip as any
    //         },
    //         data(): IData {
    //             return {show: true};
    //         }
    //     };

    //     const container = document.createElement('div');
    //     document.body.appendChild(container);

    //     const app = new Vue({
    //         render: h => h(
    //             'Test', 
    //             {ref: 'test'}),
    //         components: {Test},
    //     }).$mount(container);

    //     expect(app.$el.outerHTML).to.matchSnapshot();

    //     (app.$refs.test as any).show = true;
    //     await wait();
    //     expect(app.$el.innerHTML).to.matchSnapshot();

    //     (app.$refs.test as any).show = false;
    //     await wait();
    //     expect(app.$el.innerHTML).to.matchSnapshot();

    //     app.$destroy();
    //     document.body.removeChild(app.$el);
    // });

    // it('should change value on click when we use tooltip on radio in Vue', async () => {
    //     const container = document.createElement('div');
    //     document.body.appendChild(container);

    //     const app = new Vue({
    //         template: `
    //             <div>
    //                 <Tooltip content="hello">
    //                     <Radio v-model="a" trueValue="1">test</Radio>
    //                 </Tooltip>
    //                 <Tooltip content="hello">
    //                     <Radio v-model="a" trueValue="2">test</Radio>
    //                 </Tooltip>
    //             </div>
    //         `,
    //         components: {
    //             Tooltip:  Tooltip as any, 
    //             Radio: Radio as any,
    //         },
    //         data: {
    //             a: '1',
    //         }
    //     }).$mount(container);

    //     const [, radio2] = Array.from<HTMLElement>(app.$el.querySelectorAll('input'));
    //     // If we run call click on label, the snapshots of demos is very weird.
    //     // I don't known why. So we call it on input.
    //     radio2.click();
    //     expect(app.a).to.eql('2');

    //     await wait();
    //     app.$destroy();
    //     document.body.removeChild(app.$el);
    // });

    it('should hide layer when we have disabled Tooltip and also hide on next updating', async () => {
        class Demo extends Component<{disabled: boolean}> {
            static template = `
                const Tooltip = this.Tooltip;
                <div>
                    <Tooltip disabled={this.get('disabled')}
                        content="hello"
                    >
                        <div ref="test">test</div>
                    </Tooltip>
                </div>
            `;
            static defaults = () => ({disabled: false});
            Tooltip = Tooltip;
        }

        const [i] = mount(Demo);

        dispatchEvent(i.refs.test, 'mouseenter');
        await wait();
        let content = getElement('.k-tooltip-content');
        expect(content!.textContent).eql('hello');

        i.set('disabled', true);
        await wait(500);
        content = getElement('.k-tooltip-content');
        expect(content).eql(undefined);

        i.set('disabled', false);
        await wait()
        content = getElement('.k-tooltip-content');
        expect(content).eql(undefined);
    });

    it('should not detect collison when target is not in viewport', async () => {
        class Demo extends Component<{show: boolean}> {
            static template = `
                const Tooltip = this.Tooltip;
                <div>
                    <Tooltip v-model="show" content="hello">
                        <div ref="test">test</div>
                    </Tooltip>
                </div>
            `;
            static defaults = () => ({show: false});
            Tooltip = Tooltip;
            mounted() {
                const element = findDomFromVNode(this.$lastInput!, true) as Element;
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                (element.parentNode as HTMLElement).style.height = `${windowHeight * 2}px`;
            }
        }

        const [i] = mount(Demo);

        await wait(500);
        window.scrollTo(0, 10000);

        i.set('show', true);

        await wait(500);
        const content = getElement('.k-tooltip-content')!;
        console.log(content.outerHTML);
        console.log(JSON.stringify(content.getBoundingClientRect()));
        expect(content.getBoundingClientRect().top < 0).to.be.true;
    });
});

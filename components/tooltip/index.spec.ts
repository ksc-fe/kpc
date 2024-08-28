import {findDomFromVNode, Component} from 'intact';
import BasicDemo from '~/components/tooltip/demos/basic';
import PositionDemo from '~/components/tooltip/demos/position';
import TriggerDemo from '~/components/tooltip/demos/trigger';
import ContentDemo from '~/components/tooltip/demos/content';
import AlwaysDemo from '~/components/tooltip/demos/always';
import {Tooltip} from './';
import {Dialog} from '../dialog';
import {mount, unmount, dispatchEvent, getElement, wait} from '../../test/utils';
import { tooltip as tooltipTheme } from './styles';
import { Select, Option } from '../select';

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

        const [btn1] =  Array.from<HTMLElement>(element.querySelectorAll('.k-btn'));
        btn1.click();
        await wait(500);
        const content = getElement('.k-tooltip-content') as HTMLElement;
        // ignore the arrow, because it may change className to adapt to the direction
        expect(content.querySelector<HTMLElement>('.k-slider')!.outerHTML).to.matchSnapshot();
    });

    it('Internal dropdown closing should not affect tooltip', async () => {
        const [, element] = mount(ContentDemo);

        const [, btn2] =  Array.from<HTMLElement>(element.querySelectorAll('.k-btn'));
        btn2.click();
        await wait(500);
        const content = getElement('.k-tooltip-content') as HTMLElement;
        const trigger = content.querySelector('.k-select') as HTMLElement;
        trigger.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        const dropdown = getElement('.k-select-menu')!;
        expect(dropdown.innerHTML).to.matchSnapshot();
        const item = dropdown.querySelector('.k-dropdown-item') as HTMLElement;
        item.click();
        await wait(500);
        expect(content.style.display).to.eql('')
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
                const element = findDomFromVNode(this.$lastInput!, true) as HTMLElement;
                const style = element.style;
                style.position = 'fixed';
                style.top = '-200px';
                // const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                // (element.parentNode as HTMLElement).style.height = `${windowHeight * 2}px`;
            }
        }

        const [i] = mount(Demo);

        // await wait(500);
        // window.scrollTo(0, 10000);

        i.set('show', true);

        await wait(500);
        const content = getElement('.k-tooltip-content')!;
        console.log(content.outerHTML);
        console.log(JSON.stringify(content.getBoundingClientRect()));
        expect(content.getBoundingClientRect().top < 0).to.be.true;
    });

    it('should add className', async () => {
        class Demo extends Component {
            static template = `
                const Tooltip = this.Tooltip;
                <div>
                    <Tooltip content="hello" class="a">
                        <div ref="test" class="b">test</div>
                    </Tooltip>
                </div>
            `;
            Tooltip = Tooltip;
        }

        const [instance, element] = mount(Demo);
        const trigger = instance.refs.test;
        expect(trigger.className).to.eql('b a');

        dispatchEvent(trigger, 'mouseenter');
        await wait();
        const dropdown = getElement('.k-tooltip-content')!;
        expect(dropdown.classList.contains('a')).to.be.true;
    });

    it('should fix the width in small container', async () => {
        class Demo extends Component {
            static template = `
                const {Tooltip, Dialog} = this;
                <div style="text-align: right; position: relative; width: 350px;">
                    <Tooltip content="这是一段很长的描述文字，这是一段很长的描述文字，这是一段很长的描述文字" container={dom => dom}>
                        <span class="trigger">test</span>
                    </Tooltip>
                </div>
            `
            private Tooltip = Tooltip;
            private Dialog = Dialog;
        }

        const [instance, element] = mount(Demo);
        const trigger = element.querySelector<HTMLDivElement>('.trigger')!;
        const expecedWidth = parseInt(tooltipTheme.maxWidth);

        dispatchEvent(trigger, 'mouseenter');
        await wait();
        const content = getElement('.k-tooltip-content')!;
        const width = content.offsetWidth;
        expect(width).to.eql(expecedWidth);

        dispatchEvent(trigger, 'mouseleave');
        await wait();
        dispatchEvent(trigger, 'mouseenter');
        await wait();
        const newWidth = content.offsetWidth;
        expect(newWidth).to.eql(width);
    });

    it('should not impact select when wrap select with tooltip', async () => {
        class Demo extends Component {
            static template = `
                const {Tooltip, Select, Option} = this;
                <Tooltip>
                    <Select>
                        <Option value="1">Option 1</Option>
                        <Option value="2">Option 2</Option>
                    </Select>
                </Tooltip>
            `
            private Tooltip = Tooltip;
            private Select = Select;
            private Option = Option;
        }

        const [instance, element] = mount(Demo);
        dispatchEvent(element, 'mouseenter');
        await wait();
        dispatchEvent(element, 'click');
        await wait();

        const menu = getElement(".k-select-menu")!;
        dispatchEvent(element, 'mouseleave');
        await wait(500);

        expect(menu.style.display).to.eql('');
    });
});

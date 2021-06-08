import {findDomFromVNode, Component} from 'intact';
import BasicDemo from '~/components/tooltip/demos/basic';
// import PositionDemo from '~/components/tooltip/demos/position';
import TriggerDemo from '~/components/tooltip/demos/trigger';
import ContentDemo from '~/components/tooltip/demos/content';
import ConfirmDemo from '~/components/tooltip/demos/confirm';
import AlwaysDemo from '~/components/tooltip/demos/always';
// import Vue from 'vue';
import Tooltip from 'kpc/components/tooltip';
import Radio from 'kpc/components/radio';
// import Intact from 'intact';
import {mount, unmount, dispatchEvent, getElement, wait} from 'test/utils';

describe('Tooltip', () => {
    let instance;

    // afterEach((done) => {
        // if (instance) {
            // unmount(instance);
            // instance = null;
        // }
        // setTimeout(done, 500);
    // });

    it('should show and hide content correctly', async () => {
        instance = mount(BasicDemo);

        const element = findDomFromVNode(instance.$lastInput);
        const [first, , second, , disabled] = element.querySelectorAll('span');
        dispatchEvent(first, 'mouseenter');
        await wait(0);
        let content = getElement('.k-tooltip-content');
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
        await wait(300);
        content = getElement('.k-tooltip-content');
        expect(content).be.undefined;
    });

    // it('should position correctly', () => {
        // instance = mount(PositionDemo);

        // const tooltipContent = instance.element.querySelector('.k-tooltip-content');
        // const arrow = tooltipContent.querySelector('.k-arrow');
        // const at = instance.element.querySelector('.opera .k-btn');
        // const {width, height, left, top} = at.getBoundingClientRect();
        // const contains = (name) => expect(arrow.classList.contains(name)).to.be.true;
        // const eql = (a, b) => expect(Math.round(a)).to.eql(Math.round(b));

        // instance.set('position', 'left');
        // contains('k-right');
        // eql(arrow.offsetTop, tooltipContent.offsetHeight / 2 - arrow.offsetHeight / 2);

        // instance.set('position', 'right');
        // contains('k-left');
        // eql(arrow.offsetTop, tooltipContent.offsetHeight / 2 - arrow.offsetHeight / 2);

        // instance.set('position', 'top');
        // contains('k-bottom');
        // eql(arrow.offsetLeft, tooltipContent.offsetWidth / 2 - arrow.offsetWidth / 2);

        // instance.set('position', 'bottom');
        // contains('k-top');
        // eql(arrow.offsetLeft, tooltipContent.offsetWidth / 2 - arrow.offsetWidth / 2);

        // instance.set('position', 'custom');
        // instance.getPosition = () => ({my: 'left bottom', at: 'left top'});
        // instance.update();
        // eql(arrow.offsetLeft, width / 2 - arrow.offsetWidth / 2);

        // instance.getPosition = () => ({my: 'left+100 bottom', at: 'left top'});
        // instance.update();
        // eql(arrow.offsetLeft, 1);

        // instance.getPosition = () => ({my: 'left top', at: 'right top'});
        // instance.update();
        // eql(arrow.offsetTop, tooltipContent.offsetHeight / 2 - arrow.offsetHeight / 2);

        // instance.getPosition = () => ({my: 'left top+30', at: 'right top'});
        // instance.update();
        // eql(arrow.offsetTop, 1);
    // });

    it('should trigger correctly', async () => {
        instance = mount(TriggerDemo);

        const element = findDomFromVNode(instance.$lastInput);
        const [hover, click, canHover] = element.querySelectorAll('.k-btn');
        click.click();
        await wait();
        let content = getElement('.k-tooltip-content');
        expect(content.textContent).to.matchSnapshot();

        // should not hide
        content.click();
        await wait();
        let content1 = getElement('.k-tooltip-content');
        expect(content).eql(content1);

        // should hide when click document
        document.body.click();
        await wait(300);
        let content2 = getElement('.k-tooltip-content');
        expect(content2).not.eql(content);
    });

    it('should hoverable', async () => {
        instance = mount(TriggerDemo);

        const element = findDomFromVNode(instance.$lastInput);
        const [, , canHover] = element.querySelectorAll('.k-btn');
        dispatchEvent(canHover, 'mouseenter');
        await wait();
        dispatchEvent(canHover, 'mouseleave');
        await wait();
        const content = getElement('.k-tooltip-content');
        dispatchEvent(content, 'mouseenter');
        await wait(300);
        const content1 = getElement('.k-tooltip-content');
        expect(content1).eql(content);

        dispatchEvent(canHover, 'mouseleave');
        await wait(500);
        const content2 = getElement('.k-tooltip-content');
        expect(content2).be.undefined;
    });

    // it('should custom content correctly', () => {
        // instance = mount(ContentDemo);

        // const element = findDomFromVNode(instance.$lastInput);
        // const [btn] = element.querySelectorAll('.k-btn');
        // btn.click();
        // const content = getElement('.k-tooltip-content');
        // // ignore the arrow, because it may change className to adapt to the direction
        // expect(content.children[1].outerHTML).to.matchSnapshot();
    // });

    it('should handle confirm tooltip corectly', async () => {
        instance = mount(ConfirmDemo);

        const cancelCb = sinon.spy();
        const okCb = sinon.spy();

        instance.refs.__test.on('cancel', cancelCb);
        instance.refs.__test.on('ok', okCb);

        const element = findDomFromVNode(instance.$lastInput);
        dispatchEvent(element.children[0], 'click');
        await wait();
        let content = getElement('.k-tooltip-content');
        // expect(content.querySelector('.k-tooltip-buttons').outerHTML).to.matchSnapshot();

        content.querySelector('.k-btn').click();
        await wait(300);
        expect(content.style.display).eql('none');

        dispatchEvent(element.children[0], 'click');
        await wait(0);
        content = getElement('.k-tooltip-content');
        const [, btn] = content.querySelectorAll('.k-btn');
        btn.click();

        await wait(300);
        expect(content.style.display).eql('none');
        expect(cancelCb.callCount).eql(1);
        expect(okCb.callCount).eql(1);
    });

    it('should always show tooltip', async () => {
        instance = mount(AlwaysDemo);

        const element = findDomFromVNode(instance.$lastInput);
        const content = getElement('.k-tooltip-content');
        expect(content.textContent).eql('hello');

        document.body.click();
        await wait(300);
        expect(getElement('.k-tooltip-content')).eql(content);

        element.querySelector('span').click();
        await wait(300);
        expect(getElement('.k-tooltip-content')).eql(content);

        dispatchEvent(content, 'mouseleave');
        await wait(500);
        expect(getElement('.k-tooltip-content')).eql(content);
    });

    // it('should hide tooltip when v-show is false in Vue', async () => {
        // const Test = {
            // template: `
                // <div>
                    // <Tooltip content="hello" v-show="show">
                        // <div style="font-size: 12px;">hover</div>
                    // </Tooltip>
                // </div>
            // `,
            // components: {
                // Tooltip
            // },
            // data() {
                // return {show: false};
            // }
        // };

        // const container = document.createElement('div');
        // document.body.appendChild(container);

        // const app = new Vue({
            // render: h => h('Test', {ref: 'test'}),
            // components: {Test},
        // }).$mount(container);

        // expect(app.$el.innerHTML).to.matchSnapshot();

        // app.$refs.test.show = true;
        // await wait();
        // expect(app.$el.innerHTML).to.matchSnapshot();

        // app.$refs.test.show = false;
        // await wait();
        // expect(app.$el.innerHTML).to.matchSnapshot();

        // app.$destroy();
        // document.body.removeChild(app.$el);
    // });

    // it('should change value on click when we use tooltip on radio in Vue', async () => {
        // const container = document.createElement('div');
        // document.body.appendChild(container);

        // const app = new Vue({
            // template: `
                // <div>
                    // <Tooltip content="hello">
                        // <Radio v-model="a" trueValue="1">test</Radio>
                    // </Tooltip>
                    // <Tooltip content="hello">
                        // <Radio v-model="a" trueValue="2">test</Radio>
                    // </Tooltip>
                // </div>
            // `,
            // components: {
                // Tooltip, Radio,
            // },
            // data: {
                // a: '1',
            // }
        // }).$mount(container);

        // const [radio1, radio2] = app.$el.querySelectorAll('input');
        // // If we run call click on label, the snapshots of demos is very weird.
        // // I don't known why. So we call it on input.
        // radio2.click();
        // expect(app.a).to.eql('2');

        // await wait();
        // app.$destroy();
        // document.body.removeChild(app.$el);
    // });

    it('should hide layer when we have disabled Tooltip and also hide on next update', async () => {
        class Demo extends Component {
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
            static defaults = {disabled: false};
            init() {
                this.Tooltip = Tooltip;
            }
        }

        instance = mount(Demo);

        dispatchEvent(instance.refs.test, 'mouseenter');
        await wait();
        let content = getElement('.k-tooltip-content');
        expect(content.textContent).eql('hello');

        instance.set('disabled', true);
        await wait(300);
        content = getElement('.k-tooltip-content');
        expect(content).eql(undefined);

        instance.set('disabled', false);
        await wait()
        content = getElement('.k-tooltip-content');
        expect(content).eql(undefined);
    });

    // it('should not detect collison when target is not in viewport', async () => {
        // class Demo extends Intact {
            // @Intact.template()
            // static template = `
                // <div>
                    // <Tooltip v-model="show"content="hello">
                        // <div ref="test">test</div>
                    // </Tooltip>
                // </div>
            // `;
            // defaults() {
                // this.Tooltip = Tooltip;
                // return {show: false};
            // }
            // _mount() {
                // const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                // this.element.parentNode.style.height = `${windowHeight * 2}px`;
            // }
        // }

        // instance = mount(Demo);

        // await wait(500);
        // window.scrollTo(0, 10000);

        // instance.set('show', true);

        // await wait(500);
        // const content = getElement('.k-tooltip-content');
        // expect(content.getBoundingClientRect().top < 0).to.be.true;
    // });
});

import BasicDemo from '~/components/tooltip/demos/basic';
import PositionDemo from '~/components/tooltip/demos/position'; 
import TriggerDemo from '~/components/tooltip/demos/trigger';
import ContentDemo from '~/components/tooltip/demos/content';
import ConfirmDemo from '~/components/tooltip/demos/confirm';
import AlwaysDemo from '~/components/tooltip/demos/always';
import Vue from 'vue';
import Tooltip from 'kpc/components/tooltip';
import Radio from 'kpc/components/radio';
import Intact from 'intact';
import {mount, unmount, dispatchEvent, getElement, wait} from 'test/utils';

describe('Tooltip', () => {
    let instance;

    afterEach((done) => {
        unmount(instance);
        setTimeout(done, 500);
    });

    it('should show and hide content correctly', async () => {
        instance = mount(BasicDemo);

        const [first, second, , disabled] = instance.element.querySelectorAll('.k-tooltip');
        dispatchEvent(first, 'mouseenter');
        let content = getElement('.k-tooltip-content');
        expect(content.textContent).eql('hello');

        // should not show
        dispatchEvent(second, 'mouseenter');
        let content1 = getElement('.k-tooltip-content');
        expect(content1).eql(content);

        // should not show if disabled
        dispatchEvent(disabled, 'mouseenter');
        let content2 = getElement('.k-tooltip-content');
        expect(content2).eql(content);

        // should hide
        dispatchEvent(first, 'mouseleave');
        await wait(500);
        content = getElement('.k-tooltip-content');
        expect(content).be.undefined;
    });

    it('should position correctly', () => {
        instance = mount(PositionDemo);

        const [left, right, top, bottom] = instance.element.querySelectorAll('.k-btn');
        dispatchEvent(left, 'mouseenter');
        let content = getElement('.k-tooltip-content');
        expect(content.textContent).eql('left');

        dispatchEvent(right, 'mouseenter');
        content = getElement('.k-tooltip-content');
        expect(content.textContent).eql('right');

        dispatchEvent(top, 'mouseenter');
        content = getElement('.k-tooltip-content');
        expect(content.textContent).eql('top');

        dispatchEvent(bottom, 'mouseenter');
        content = getElement('.k-tooltip-content');
        expect(content.textContent).eql('bottom');
    });

    it('should trigger correctly', async () => {
        instance = mount(TriggerDemo);

        const [hover, click, canHover] = instance.element.querySelectorAll('.k-btn');
        click.click();
        let content = getElement('.k-tooltip-content');
        expect(content.textContent).to.matchSnapshot();
        // should not hide
        content.click();
        let content1 = getElement('.k-tooltip-content');
        expect(content).eql(content1);
        // should hide when click document
        document.body.click();
        await wait(1000);
        let content2 = getElement('.k-tooltip-content');
        expect(content2).not.eql(content);
    });

    it('should can hover', async () => {
        instance = mount(TriggerDemo);

        const [hover, click, canHover] = instance.element.querySelectorAll('.k-btn');
        dispatchEvent(canHover, 'mouseenter');
        dispatchEvent(canHover, 'mouseleave');
        const content = getElement('.k-tooltip-content');
        dispatchEvent(content, 'mouseenter');
        await wait(600);
        const content1 = getElement('.k-tooltip-content');
        expect(content1).eql(content); 

        dispatchEvent(canHover, 'mouseenter');
        dispatchEvent(canHover, 'mouseleave');
        await wait(600);
        const content2 = getElement('.k-tooltip-content');
        expect(content2).be.undefined;
    });

    it('should custom content correctly', () => {
        instance = mount(ContentDemo);

        const [btn] = instance.element.querySelectorAll('.k-btn');
        btn.click();
        const content = getElement('.k-tooltip-content');
        // ignore the arrow, because it may change className to adapt to the direction
        expect(content.children[1].outerHTML).to.matchSnapshot();
    });

    it('should handle confirm tooltip corectly', async () => {
        instance = mount(ConfirmDemo);

        const cancelCb = sinon.spy();
        const okCb = sinon.spy();

        instance.refs.__test.on('cancel', cancelCb);
        instance.refs.__test.on('ok', okCb);

        dispatchEvent(instance.element.children[0], 'click');
        let content = getElement('.k-tooltip-content');
        expect(content.querySelector('.k-buttons').outerHTML).to.matchSnapshot();

        content.querySelector('.k-btn').click();
        await wait(500);
        expect(content.style.display).eql('none');

        dispatchEvent(instance.element.children[0], 'click');
        content = getElement('.k-tooltip-content');
        const [, btn] = content.querySelectorAll('.k-btn');
        btn.click();

        await wait(500);
        expect(content.style.display).eql('none');
        expect(cancelCb.callCount).eql(1);
        expect(okCb.callCount).eql(1);
    });

    it('should always show tooltip', async () => {
        instance = mount(AlwaysDemo);

        const content = getElement('.k-tooltip-content');
        expect(content.textContent).eql('hello');

        document.body.click();
        expect(getElement('.k-tooltip-content')).eql(content);

        instance.element.querySelector('.k-tooltip').click();
        expect(getElement('.k-tooltip-content')).eql(content);
    });

    it('should hide tooltip when v-show is false in Vue', async () => {
        const Test = {
            template: `
                <div>
                    <Tooltip content="hello" v-show="show">
                        <div style="font-size: 12px;">hover</div>
                    </Tooltip>
                </div>
            `,
            components: {
                Tooltip
            },
            data() {
                return {show: false};
            }
        };

        const container = document.createElement('div');
        document.body.appendChild(container);

        const app = new Vue({
            render: h => h('Test', {ref: 'test'}),
            components: {Test},
        }).$mount(container);

        expect(app.$el.innerHTML).to.matchSnapshot();
        
        app.$refs.test.show = true;
        await wait();
        expect(app.$el.innerHTML).to.matchSnapshot();
        

        app.$refs.test.show = false;
        await wait();
        expect(app.$el.innerHTML).to.matchSnapshot();

        document.body.removeChild(app.$el);
    });

    it('should change value on click when we use tooltip on radio in Vue', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        const app = new Vue({
            template: `
                <div>
                    <Tooltip content="hello">
                        <Radio v-model="a" trueValue="1">test</Radio>
                    </Tooltip>
                    <Tooltip content="hello">
                        <Radio v-model="a" trueValue="2">test</Radio>
                    </Tooltip>
                </div>
            `,
            components: {
                Tooltip, Radio,
            },
            data: {
                a: '1',
            }
        }).$mount(container);

        const [radio1, radio2] = app.$el.querySelectorAll('.k-radio');
        radio2.click();
        expect(app.a).to.eql('2');

        app.$destroy();
        document.body.removeChild(app.$el);
    });
});

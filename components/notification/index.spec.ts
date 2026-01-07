import TypesDemo from '~/components/notification/demos/types';
import EventDemo from '~/components/notification/demos/events';
import {mount, unmount, dispatchEvent, getElement, wait, nextFrame} from '../../test/utils';
import {Notification} from './';
import {createVNode as h} from 'intact';

describe('Notification', () => {
    afterEach(() => {unmount()});

    it('show basic notification', async () => {
        Notification.notice({
            title: 'Hello, Kingcloud Design!',
            content: '这是一条基础用法的通知'
        });
    
        await wait();
        const notification = getElement('.k-notification')!;
        expect(notification.outerHTML).to.matchSnapshot();
    });

    it('show notifications with different types', async () => {
        const [instance, element] = mount(TypesDemo);

        const [info, error, warning, success] = element.querySelectorAll<HTMLElement>('.k-btn');
        
        info.click();
        await wait();
        let notification = getElement('.k-notification')!;
        expect(notification.outerHTML).to.matchSnapshot();

        error.click();
        await wait();
        expect(getElement('.k-notification')!.outerHTML).to.matchSnapshot();

        warning.click();
        await wait();
        expect(getElement('.k-notification')!.outerHTML).to.matchSnapshot();

        success.click();
        await wait();
        expect(getElement('.k-notification')!.outerHTML).to.matchSnapshot();
    });

    it('set duration', async function() {
        this.timeout(0);

        Notification.info({
            title: '测试标题',
            content: '测试内容',
            duration: 500
        });

        await wait();
        const notification = getElement('.k-notification')!;
        expect(notification.outerHTML).to.matchSnapshot();
        
        // should not remove when mouseenter
        dispatchEvent(notification, 'mouseenter');
        await wait(1000);
        let notification1 = getElement('.k-notification');
        expect(notification1).eql(notification);

        dispatchEvent(notification, 'mouseleave');
        await wait(500);
        notification1 = getElement('.k-notification');
        expect(notification1).eql(notification);

        await wait(700);
        notification1 = getElement('.k-notification');
        expect(notification1).not.eql(notification);
    });

    it('set duration to 0 should not auto close', async function() {
        this.timeout(0);

        Notification.warning({
            title: '不会自动关闭',
            content: '这条通知不会自动关闭',
            duration: 0
        });

        await wait();
        const notification = getElement('.k-notification')!;
        
        // wait for a long time, should still exist
        await wait(2000);
        const notification1 = getElement('.k-notification');
        expect(notification1).eql(notification);
    });

    it('hide close button when closable is false', async () => {
        Notification.info({
            title: '隐藏关闭按钮',
            content: '这条通知隐藏了关闭按钮',
            closable: false
        });

        await wait();
        const notification = getElement('.k-notification')!;
        const closeButton = notification.querySelector('.k-notification-close');
        expect(closeButton).to.be.null;
        expect(notification.outerHTML).to.matchSnapshot();
    });

    it('should not show icon when type is empty string and icon is not provided', async () => {
        Notification.notice({
            title: '无类型通知',
            content: '这条通知没有类型，不应该显示图标',
            type: ''
        });

        await wait();
        const notification = getElement('.k-notification')!;
        const icon = notification.querySelector('.k-notification-icon');
        expect(icon).to.be.null;
        expect(notification.outerHTML).to.matchSnapshot();
    });

    it('show notification at different positions', async () => {
        const positions: Array<'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft' | 'top' | 'bottom'> = 
            ['topRight', 'topLeft', 'bottomRight', 'bottomLeft', 'top', 'bottom'];

        for (const position of positions) {
            Notification.info({
                title: '位置测试',
                content: `通知出现在${position}位置`,
                position
            });
            await wait();
            
            const containers = document.querySelectorAll(`.k-notifications`);
            const container = containers[containers.length - 1] as HTMLElement;
            expect(container).to.exist;
            
            const notification = container?.querySelector(`.k-notification.k-position-${position}`);
            expect(notification).to.exist;
            expect(notification!.outerHTML).to.matchSnapshot();
        }
    });

    it('should trigger onClose callback when notification auto closes', async function() {
        this.timeout(0);
        const onCloseSpy = sinon.spy();
        
        Notification.info({
            title: '自动关闭测试',
            content: '这条通知会自动关闭',
            onClose: onCloseSpy,
            duration: 500
        });

        await wait();
        const notification = getElement('.k-notification')!;
        expect(notification).to.exist;
        
        // 等待自动关闭
        await wait(700);
        
        expect(onCloseSpy.callCount).to.eql(1);
        expect(onCloseSpy.calledOnce).to.be.true;
    });

    it('test notification click and close event', async () => {
        const [instance, element] = mount(EventDemo);
    
        const [btn] = element.querySelectorAll<HTMLElement>('.k-btn');
        
        btn.click();
        await wait();
        let notification = document.querySelector('.event-test')!;
        dispatchEvent(notification, 'click');
        await wait(500);
        let message1 = document.querySelector('.k-info') as HTMLElement;
        expect(message1.outerHTML).to.matchSnapshot();
        await wait(500);
        const closeButton = notification.querySelector<HTMLElement>('.k-notification-close')!;
        closeButton.click();
        await wait(500);
        let message2 = document.querySelector('.k-warning') as HTMLElement;
        expect(message2.outerHTML).to.matchSnapshot();
    });

    it('should support VNode as title and content', async () => {
        Notification.info({
            title: h('div', {class: 'custom-title'}, '自定义标题'),
            content: h('div', {class: 'custom-content'}, [
                h('span', {style: 'color: red;'}, '这是'),
                '一段',
                h('strong', null, '自定义内容')
            ]),
            className: 'custom-notification'
        });
    
        await wait(100);
        const notification = document.querySelector('.custom-notification') as HTMLElement;
        expect(notification.outerHTML).to.matchSnapshot();
        
        const titleContainer = notification.querySelector('.k-notification-title');
        expect(titleContainer).to.exist;
        const title = titleContainer!.querySelector('.custom-title');
        expect(title).to.exist;
        expect(title!.textContent).to.eql('自定义标题');
        
        const contentContainer = notification.querySelector('.k-notification-body');
        expect(contentContainer).to.exist;
        const content = contentContainer!.querySelector('.custom-content');
        expect(content).to.exist;
        expect(content!.querySelector('span')).to.exist;
        expect(content!.querySelector('strong')).to.exist;
    });
});
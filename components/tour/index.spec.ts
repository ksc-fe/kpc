import { Component } from 'intact';
import BasicDemo from '~/components/tour/demos/basic';
import DeclarativeDemo from '~/components/tour/demos/declarative';
import ClosableDemo from '~/components/tour/demos/closable';
import CustomTextDemo from '~/components/tour/demos/customText';
import BeforeChangeDemo from '~/components/tour/demos/beforeChange';
import EventsDemo from '~/components/tour/demos/events';
import MaskClosableDemo from '~/components/tour/demos/maskClosable';
import NotargetDemo from '~/components/tour/demos/notarget';
import { mount, unmount, dispatchEvent, getElement, wait } from '../../test/utils';
import { Tour, TourStep } from './';

describe('Tour', () => {
    afterEach(() => {unmount()});

    it('should show and hide tour correctly', async () => {
        const [instance, element] = mount(BasicDemo);
        
        let tourContent = getElement('.k-tour-step');
        expect(tourContent).to.be.undefined;
        
        const buttons = element.querySelectorAll('.k-btn');
        const startBtn = Array.from(buttons).find(btn => btn.textContent?.includes('启动引导')) as HTMLElement;
        startBtn.click();
        await wait();
        
        tourContent = getElement('.k-tour-step');
        expect(tourContent).to.exist;
        
        expect(tourContent!.querySelector('.k-tour-step-title')!.textContent).to.eql('第一步');
        
        const indicator = tourContent!.querySelector('.k-tour-step-indicator');
        expect(indicator!.textContent!.trim()).to.eql('1 / 2');
        
        const nextBtn = tourContent!.querySelector('.k-tour-step-buttons .k-primary') as HTMLElement;
        nextBtn.click();
        await wait();
        
        const updatedContent = getElement('.k-tour-step');
        expect(updatedContent!.querySelector('.k-tour-step-title')!.textContent).to.eql('第二步');
        
        const doneBtn = updatedContent!.querySelector('.k-tour-step-buttons .k-primary') as HTMLElement;
        doneBtn.click();
        await wait();
        
        expect(getElement('.k-tour-step')).to.be.undefined;
    });

    it('should work with declarative TourStep components', async () => {
        const [instance, element] = mount(DeclarativeDemo);
        
        const buttons = element.querySelectorAll('.k-btn');
        const startBtn = Array.from(buttons).find(btn => btn.textContent?.includes('启动引导')) as HTMLElement;
        startBtn.click();
        await wait(50);
        
        const tourContent = getElement('.k-tour-step');
        expect(tourContent).to.exist;
        
        expect(tourContent!.querySelector('.k-tour-step-title')!.textContent).to.eql('第一步');
        expect(tourContent!.querySelector('.k-tour-step-body')!.textContent).to.include('子组件方式的第一步');

        const nextBtn = tourContent!.querySelector('.k-tour-step-buttons .k-primary') as HTMLElement;
        nextBtn.click();
        await wait(50);
        
        const updatedContent = getElement('.k-tour-step');
        expect(updatedContent!.querySelector('.k-tour-step-title')!.textContent).to.eql('第二步');
        expect(updatedContent!.querySelector('.k-tour-step-body')!.textContent).to.include('子组件方式的第二步');
    });

    it('should handle closable property correctly', async () => {
        const [instance, element] = mount(ClosableDemo);
        
        const buttons = element.querySelectorAll('.k-btn');
        const startBtn = Array.from(buttons).find(btn => btn.textContent?.includes('启动引导')) as HTMLElement;
        startBtn.click();
        await wait(50);
        
        (instance as any).set('closable', true);
        await wait(50);
        const tourContent = getElement('.k-tour-step');
        expect(tourContent).to.exist;
        
        const closeIcon = tourContent!.querySelector('.k-tour-step-close');
        expect(closeIcon).to.be.null;
    });

    it('should handle beforeChange correctly', async () => {
        const [instance, element] = mount(BeforeChangeDemo);
        
        const buttons = element.querySelectorAll('.k-btn');
        const startBtn = Array.from(buttons).find(btn => btn.textContent?.includes('启动引导')) as HTMLElement;
        startBtn.click();
        await wait();
        
        expect((instance as any).get('currentStep')).to.eql(0);
        
        let tourContent = getElement('.k-tour-step');
        let nextBtn = tourContent!.querySelector('.k-tour-step-buttons .k-primary') as HTMLElement;
        nextBtn.click();
        await wait();
        
        expect((instance as any).get('currentStep')).to.eql(1);
        
        tourContent = getElement('.k-tour-step');
        nextBtn = tourContent!.querySelector('.k-tour-step-buttons .k-primary') as HTMLElement;
        nextBtn.click();
        await wait();
        
        expect((instance as any).get('currentStep')).to.eql(2);

        tourContent = getElement('.k-tour-step');
        nextBtn = tourContent!.querySelector('.k-tour-step-buttons .k-primary') as HTMLElement;
        nextBtn.click();
        await wait();

        const input = element.querySelector('.step3-input .k-input-inner') as HTMLInputElement;
        input.value = 'next';
        dispatchEvent(input, 'input');
        await wait();
        
        tourContent = getElement('.k-tour-step');
        nextBtn = tourContent!.querySelector('.k-tour-step-buttons .k-primary') as HTMLElement;
        nextBtn.click();
        await wait();
        console.log('currentStep', (instance as any).get('currentStep'));
        expect((instance as any).get('currentStep')).to.eql(3);
    });

    it('should trigger events correctly', async () => {
        const [instance, element] = mount(EventsDemo);
        
        const prevSpy = sinon.spy(instance, 'handlePrev');
        const nextSpy = sinon.spy(instance, 'handleNext');
        const finishSpy = sinon.spy(instance, 'handleFinish');
        
        const buttons = element.querySelectorAll('.k-btn');
        const startBtn = Array.from(buttons).find(btn => btn.textContent?.includes('开始引导')) as HTMLElement;
        startBtn.click();
        await wait();
        
        const tourContent = getElement('.k-tour-step');
        const nextBtn = tourContent!.querySelector('.k-tour-step-buttons .k-primary') as HTMLElement;
        nextBtn.click();
        await wait();
        
        expect(nextSpy.callCount).to.eql(1);
        
        const prevBtn = getElement('.k-tour-step')!.querySelector('.k-tour-step-buttons .k-btn:not(.k-primary)') as HTMLElement;
        prevBtn.click();
        await wait();
        
        expect(prevSpy.callCount).to.eql(1);
        
        nextBtn.click();
        await wait();
        nextBtn.click();
        await wait();
        const doneBtn = getElement('.k-tour-step')!.querySelector('.k-tour-step-buttons .k-primary') as HTMLElement;
        doneBtn.click();
        await wait();
        
        console.log('finishSpy.callCount', finishSpy.callCount);
        expect(finishSpy.callCount).to.eql(0);
    });

    it('should handle maskClosable correctly', async () => {
        const [instance, element] = mount(MaskClosableDemo);
        
        const buttons = element.querySelectorAll('.k-btn');
        const startBtn = Array.from(buttons).find(btn => btn.textContent?.includes('启动引导')) as HTMLElement;
        startBtn.click();
        await wait(50);
        
        const highlight = getElement('.k-tour-target-highlight');
        expect(highlight).to.exist;
        
        dispatchEvent(document, 'click');
        await wait(50);
        
        expect(getElement('.k-tour-step')).to.be.undefined;
        
        startBtn.click();
        await wait(50);
        (instance as any).set('maskClosable', false);
        await wait(50);
        
        dispatchEvent(document, 'click');
        await wait(50);
        
        expect(getElement('.k-tour-step')).to.exist;
    });

    it('should handle custom text correctly', async () => {
        const [instance, element] = mount(CustomTextDemo);
        
        const buttons = element.querySelectorAll('.k-btn');
        const startBtn = Array.from(buttons).find(btn => btn.textContent?.includes('开始自定义按钮引导')) as HTMLElement;
        startBtn.click();
        await wait(50);
        
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('should handle target correctly', async () => {
        const [instance, element] = mount(NotargetDemo);
        
        const btn = element.querySelector('.k-btn') as HTMLElement;
        btn.click();
        await wait(50);
        
        expect(element.innerHTML).to.matchSnapshot();
    });

    // it('should handle theme correctly', async () => {
    //     interface DemoProps {
    //         theme: string;
    //         tourData: any[];
    //     }
        
    //     class Demo extends Component<DemoProps> {
    //         static template = `
    //             const { Tour } = this;
    //             <div>
    //                 <Tour
    //                     data={this.get('tourData')}
    //                     visible={true}
    //                     theme={this.get('theme')}
    //                 />
    //             </div>
    //         `;
    //         Tour = Tour;
            
    //         static defaults() {
    //             return {
    //                 theme: 'dark',
    //                 tourData: [
    //                     {
    //                         target: 'body',
    //                         title: '主题测试',
    //                         content: '测试深色主题'
    //                     }
    //                 ]
    //             } as DemoProps;
    //         }
    //     }

    //     const [instance, element] = mount(Demo);
    //     await wait(50);
        
    //     expect(element.innerHTML).to.matchSnapshot();
        
    //     instance.set('theme', 'light');
    //     await wait(50);
        
    //     expect(element.innerHTML).to.matchSnapshot();
    // });
});
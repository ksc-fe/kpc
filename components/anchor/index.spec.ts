import BasicDemo from '~/components/anchor/demos/basic';
import NestedDemo from '~/components/anchor/demos/nested';
import {mount, unmount, wait, dispatchEvent} from '../../test/utils';
import {Anchor, AnchorLink} from './';
import {Component} from 'intact';

// 基础 Demo
class BaseAnchorDemo extends Component {
    static template = `
        const {Anchor, AnchorLink} = this;
        <div style="display: flex; gap: 20px; align-items: flex-start;">
            <div id="scroll-container-test" style="flex: 1; height: 300px; overflow-y: auto;">
                <div id="section1" style="height: 300px; padding: 20px;">Section 1</div>
                <div id="section2" style="height: 300px; padding: 20px;">Section 2</div>
                <div id="section3" style="height: 300px; padding: 20px;">Section 3</div>
            </div>
            <Anchor v-model="value" container="#scroll-container-test" {...this.getAnchorProps()}>
                <AnchorLink href="section1" title="Section 1" />
                <AnchorLink href="section2" title="Section 2" />
                <AnchorLink href="section3" title="Section 3" />
            </Anchor>
        </div>
    `;
    Anchor = Anchor;
    AnchorLink = AnchorLink;
    
    getAnchorProps() {
        return {};
    }
    
    static defaults() {
        return {
            value: 'section1'
        };
    }
}

describe('Anchor', () => {
    afterEach(() => {
        unmount();
    });

    it('should render basic anchor correctly', async () => {
        const [instance, element] = mount(BasicDemo);
        
        await wait(200);
        const anchor = element.querySelector('.k-anchor') as HTMLElement;
        expect(anchor).to.exist;
        expect(anchor.outerHTML).to.matchSnapshot();
    });

    it('should scroll to target position when clicking anchor link', async function() {
        this.timeout(0);
        
        class Demo extends BaseAnchorDemo {}
        
        const [instance, element] = mount(Demo);
        await wait(300);
        
        const container = document.querySelector('#scroll-container-test') as HTMLElement;
        const anchor = element.querySelector('.k-anchor') as HTMLElement;
        const secondLink = anchor.querySelectorAll('.k-tab')[1] as HTMLElement;
        const section2 = document.getElementById('section2')!;
        
        // 先滚动到顶部
        container.scrollTop = 0;
        await wait(100);
        
        const initialScrollTop = container.scrollTop;
        
        // 点击第二个锚点链接
        secondLink.click();
        
        // 等待滚动动画完成
        await wait(800);
        
        // 检查容器是否滚动
        const finalScrollTop = container.scrollTop;
        expect(finalScrollTop).to.be.greaterThan(initialScrollTop);
        
        // 检查 section2 是否在视口内或接近视口顶部
        const rect = section2.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        expect(rect.top).to.be.lessThan(containerRect.bottom);
    });

    it('should update value when scrolling', async function() {
        this.timeout(0);
        
        class Demo extends BaseAnchorDemo {}
        
        const [instance, element] = mount(Demo);
        await wait(300);
        
        const container = document.querySelector('#scroll-container-test') as HTMLElement;
        
        const targetScrollTop = 300;
        container.scrollTop = targetScrollTop;

        dispatchEvent(container, 'scroll');
        await new Promise(resolve => requestAnimationFrame(resolve));
        await wait(100);

        expect(instance.get('value')).to.eql('section2');
    });

    it('should trigger change event', async function() {
        this.timeout(0);
        
        class Demo extends BaseAnchorDemo {
            onChange = sinon.spy();
            
            getAnchorProps() {
                return {
                    'ev-change': this.onChange
                };
            }
        }
        
        const [instance, element] = mount(Demo);
        await wait(300);
        
        const anchor = element.querySelector('.k-anchor') as HTMLElement;
        const secondLink = anchor.querySelectorAll('.k-tab')[1] as HTMLElement;
        
        secondLink.click();
        await wait(300);
        
        expect(instance.onChange.calledOnce).to.be.true;
        expect(instance.onChange.calledWith('section2')).to.be.true;
    });

    it('should render nested anchor links correctly', async () => {
        const [instance, element] = mount(NestedDemo);
        
        await wait(200);
        const anchor = element.querySelector('.k-anchor') as HTMLElement;
        expect(anchor).to.exist;
        
        const nestedLinks = anchor.querySelectorAll('.k-anchor-link-nested');
        expect(nestedLinks.length).to.be.greaterThan(0);
        expect(anchor.outerHTML).to.matchSnapshot();
    });

    it('should support disabled anchor link', async () => {
        class Demo extends BaseAnchorDemo {
            static template = `
                const {Anchor, AnchorLink} = this;
                <div style="display: flex; gap: 20px; align-items: flex-start;">
                    <div id="scroll-container-test" style="flex: 1; height: 300px; overflow-y: auto;">
                        <div id="section1" style="height: 300px; padding: 20px;">Section 1</div>
                        <div id="section2" style="height: 300px; padding: 20px;">Section 2</div>
                    </div>
                    <Anchor v-model="value" container="#scroll-container-test">
                        <AnchorLink href="section1" title="Section 1" />
                        <AnchorLink href="section2" title="Section 2" disabled={true} />
                    </Anchor>
                </div>
            `;
        }
        
        const [instance, element] = mount(Demo);
        await wait(200);
        
        const anchor = element.querySelector('.k-anchor') as HTMLElement;
        const disabledLink = anchor.querySelectorAll('.k-tab')[1] as HTMLElement;
        
        expect(disabledLink.className).to.include('k-disabled');
        expect(anchor.outerHTML).to.matchSnapshot();
    });
});

import {mount, unmount, dispatchEvent, getElement, wait} from '../../test/utils';
import {VirtualList, VirtualListContainer, VirtualListWrapper, VirtualListPhantom} from './';
import {Component} from 'intact';
import BasicDemo from '~/components/virtualList/demos/basic';
import CombinedDemo from '~/components/virtualList/demos/combined';


describe('VirtualList', () => {
    // afterEach(() => unmount());

    it('should render virtual list correctly', async () => {
        const [instance, element] = mount(BasicDemo);

        // check basic structure
        const container = element.querySelector('.k-virtual-container')!;
        expect(container.outerHTML).to.matchSnapshot();

        const wrapper = element.querySelector('.k-virtual-wrapper')!;
        expect(wrapper).to.exist;

        // check render items is less than total
        const items = wrapper.children;
        expect(items.length).to.be.lessThan(100);
    });

    it('should handle scroll correctly', async () => {
        const [instance, element] = mount(BasicDemo);

        const container = element.querySelector('.k-virtual-container')!;
        const wrapper = element.querySelector('.k-virtual-wrapper')!;
        await wait(50);
        container.scrollTop = 400;
        await wait(50);

        // check content is updated
        const currentFirstItem = wrapper.firstElementChild;
        expect(currentFirstItem!.textContent).to.not.equal('测试0');
    });


    it('should update total height when data changes', async () => {
        const [instance, element] = mount(BasicDemo);
        const [, container2] = element.querySelectorAll<HTMLElement>('.k-virtual-container');


        const [, phantom2] = element.querySelectorAll<HTMLElement>('.k-virtual-phantom')!;
        const initialHeight = phantom2.style.height;
        await wait(50);
        container2.scrollTop = 800;
        await wait(50);

        // check phantom height is updated
        expect(phantom2.style.height).to.not.equal(initialHeight);
    });

    it('should work with custom container and wrapper', async () => {
        const [instance, element] = mount(CombinedDemo);
        await wait();

        const container = element.querySelector('.k-virtual-container')!;
        const wrapper = element.querySelector('.k-virtual-wrapper')!;

        expect(container.outerHTML).to.matchSnapshot();
        // check wrapper tag name
        expect(wrapper.tagName.toLowerCase()).to.equal('ul');
    });

    it('should handle dynamic data changes correctly', async () => {
        class Demo extends Component<{list: number[]}> {
            static template = `
                const VirtualList = this.VirtualList;
                <VirtualList style="height: 300px">
                    <div v-for={this.get('list')} key={$value}>Item {$value}</div>
                </VirtualList>
            `;

            static defaults() {
                return {
                    list: Array.from({length: 100}, (_, i) => i)
                }
            }
            private VirtualList = VirtualList;
        }
    
        const [instance] = mount(Demo);
        await wait();
    
        const container = getElement('.k-virtual-container')!;
        const wrapper = getElement('.k-virtual-wrapper')!;
        
        instance.set('list', instance.get('list')!.filter(i => i % 2 === 0));
        await wait();
    
        // check deleted render
        expect(wrapper.children.length).to.be.lessThan(100);
        expect(wrapper.firstElementChild!.textContent).to.equal('Item 0');
    
        container.scrollTop = 300;
        await wait(50);
    
        // check scroll render
        const middleContent = wrapper.firstElementChild!.textContent;
        expect(middleContent).to.not.equal('Item 0');
    
        const newList = [...instance.get('list'), ...Array.from({length: 20}, (_, i) => i + 200)];
        instance.set('list', newList);
        await wait(50);
    
        // check add render position not change
        expect(wrapper.firstElementChild!.textContent).to.equal(middleContent);
    
        const prevScrollTop = container.scrollTop;
        container.scrollTop = prevScrollTop + 200;
        await wait(50);
    
        // check scroll to new content
        expect(wrapper.firstElementChild!.textContent).to.not.equal(middleContent);
    });

    it('should handle visible area data changes', async () => {
        class Demo extends Component<{list: number[]}> {
            static template = `
                const VirtualList = this.VirtualList;
                <VirtualList style="height: 300px">
                    <div v-for={this.get('list')} key={$value}>Item {$value}</div>
                </VirtualList>
            `;
            static defaults() {
                return {
                    list: Array.from({length: 100}, (_, i) => i)
                }
            }
            private VirtualList = VirtualList;
        }

        const [instance, element] = mount(Demo);
        await wait();

        const container = getElement('.k-virtual-container')!;
        const wrapper = getElement('.k-virtual-wrapper')!;

        container.scrollTop = 300;
        await wait(50);

        const visibleFirstItem = wrapper.firstElementChild!.textContent;
        const currentList = instance.get('list');
        
        // delete visible items
        const visibleIndex = parseInt(visibleFirstItem!.replace('Item ', ''));
        const newList = currentList.filter(i => i !== visibleIndex && i !== visibleIndex + 1);
        instance.set('list', newList);
        await wait();

        // check deleted render and position
        expect(wrapper.firstElementChild!.textContent).to.not.equal(visibleFirstItem);
        expect(wrapper.children.length).to.be.greaterThan(0);
    });
});


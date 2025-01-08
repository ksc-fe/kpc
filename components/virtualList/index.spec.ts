import {mount, unmount, dispatchEvent, getElement, wait} from '../../test/utils';
import {VirtualList, VirtualListContainer, VirtualListWrapper, VirtualListPhantom} from './';
import {Component} from 'intact';
import BasicDemo from '~/components/virtualList/demos/basic';
import CombinedDemo from '~/components/virtualList/demos/combined';


describe('VirtualList', () => {
    afterEach(() => unmount());

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

    it('should clean up height cache when items are deleted', async () => {
        class Demo extends Component<{list: number[]}> {
            static template = `
                const VirtualList = this.VirtualList;
                <VirtualList style="height: 300px">
                    <div v-for={this.get('list')} key={$value} style="height: 30px">Item {$value}</div>
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
        
        // first cache some height
        container.scrollTop = 300;
        await wait(50);
    
        // get first visible item
        const wrapper = getElement('.k-virtual-wrapper')!;
        const firstVisibleItem = wrapper.firstElementChild!;
        const firstVisibleIndex = parseInt(firstVisibleItem.textContent!.replace('Item ', ''));
    
        // delete visible items
        const currentList = instance.get('list');
        const newList = currentList.filter(i => i > firstVisibleIndex + 5);
        instance.set('list', newList);
        await wait(50);
    
        // check scroll position is adjusted
        const newFirstItem = wrapper.firstElementChild!;
        expect(parseInt(newFirstItem.textContent!.replace('Item ', ''))).to.be.greaterThan(firstVisibleIndex);
    
        // scroll again to check render is normal
        container.scrollTop += 100;
        await wait(50);
        
        // check new render position is correct
        const afterScrollItem = wrapper.firstElementChild!;
        expect(afterScrollItem.textContent).to.not.equal(newFirstItem.textContent);
    });

    it('should update total height when deleting last items', async () => {
        class Demo extends Component<{list: number[]}> {
            static template = `
                const VirtualList = this.VirtualList;
                <VirtualList style="height: 300px">
                    <div v-for={this.get('list')} key={$value} style="height: 30px">Item {$value}</div>
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
        const phantom = getElement('.k-virtual-phantom')!;
        
        // record initial total height
        const initialHeight = parseInt(phantom.style.height);
        
        // scroll to cache height
        container.scrollTop = 300;
        await wait(50);
        
        // delete last 5 items
        const currentList = instance.get('list');
        const newList = currentList.slice(0, -5);
        instance.set('list', newList);
        await wait(50);
    
        // scroll to trigger update
        container.scrollTop = 0;
        await wait(50);
        
        // check total height is updated
        const finalHeight = parseInt(phantom.style.height);
        expect(finalHeight).to.equal(initialHeight - 5 * 30); // 每项高度30px
    });
});


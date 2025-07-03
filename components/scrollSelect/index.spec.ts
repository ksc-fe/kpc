import {mount, unmount, dispatchEvent, wait} from '../../test/utils';
import BasicDemo from '~/components/scrollSelect/demos/basic';
import {ScrollSelect} from './';
import {Component} from 'intact';

describe('ScrollSelect', () => {
    // afterEach(() => unmount());

    it('should select by scroll', async () => {
        const [instance, element] = mount(BasicDemo);

        // scroll
        dispatchEvent(element.firstElementChild!, 'wheel', {deltaY: 30});
        await wait(100);
        expect(instance.get('value')).to.eql(1);

        dispatchEvent(element.firstElementChild!, 'wheel', {deltaY: -30});
        await wait(100);
        expect(instance.get('value')).to.eql(0);
    });

    it('should select by click', async () => {
        const [instance, element] = mount(BasicDemo);

        element.querySelector<HTMLElement>('.k-scroll-select-item')!.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('value')).to.eql(3);
    });

    it('should select by drag', async () => {
        const [instance, element] = mount(BasicDemo);

        dispatchEvent(element.firstElementChild!, 'mousedown', {which: 1, clientY: 0});
        dispatchEvent(document, 'mousemove', {clientY: -40});
        expect(instance.get('value')).eql(1);
        // do not change value if the distance is too short
        dispatchEvent(document, 'mousemove', {clientY: -30});
        expect(instance.get('value')).eql(1);
        dispatchEvent(document, 'mousemove', {clientY: 0});
        expect(instance.get('value')).eql(0);
        dispatchEvent(document, 'mouseup');
    });

    it('should render correctly even if parent is hidden', async () => {
        class Demo extends Component<{show: boolean}> {
            static template = `
                const {ScrollSelect} = this;
                <div style={{display: this.get('show') ? 'block' : 'none'}}>
                    <ScrollSelect data={this.generateData} v-model="value" count={10} />
                </div>
            `;

            static defaults() {
                return {
                    value: 2018,
                    show: false,
                }
            }

            private ScrollSelect = ScrollSelect;

            generateData(value: number) {
                const start = value - 5;
                return Array.apply(null, {length: 10} as any)
                    .map((v, i) => {
                        const year = start + i;
                        return {
                            label: `${year}年`,
                            value: year
                        };
                    });
            }
        }

        const [instance, element] = mount(Demo);
        expect(element.innerHTML).to.matchSnapshot();
        instance.set('show', true);
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
    });
});

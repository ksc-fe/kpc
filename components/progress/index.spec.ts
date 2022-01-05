import ChildrenDemo from '~/components/progress/demos/children';
import CustomColorDemo from '~/components/progress/demos/customColor';
import {mount, unmount, wait} from 'test/utils';
import {Progress} from 'kpc/components/progress';
import Intact, { Component } from 'intact';

describe('Progress', () => {
    afterEach(() => unmount());

    it('change percent',async () => {
        const [instance, element] = mount(ChildrenDemo);

        instance.set<number>('percent', 100);
        await wait();
        expect(element.outerHTML).to.matchSnapshot();

        instance.set<number>('percent', 110);
        await wait();
        expect(element.outerHTML).to.matchSnapshot();

        instance.set<number>('percent', 90);
        await wait();
        expect(element.outerHTML).to.matchSnapshot();

        instance.set<number>('percent', -10);
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
    });

    it('should use the specified status when status is error', async () => {
        class Demo extends Component<{percent: number | string, status: string}>{
            static template = `
                const Progress = this.Progress;
                <Progress percent={this.get('value')} status="error" />
            `;

            static defaults = () => ({
                value: 100
            })

            private Progress = Progress;

        }

        const [instance, element] = mount(Demo);
        expect(element.classList.contains('k-error')).to.be.true;

        instance.set<number>('value', 90);
        await wait();
        expect(element.classList.contains('k-error')).to.be.true;

        instance.set<number>('value', 100);
        await wait();
        expect(element.classList.contains('k-error')).to.be.true;
    });

    it('should not use the specified status when percent equal 100', async () => {
        
        class Demo extends Component<{percent: number | string, status: string}>{
            static template = `
                const Progress = this.Progress;
                <Progress percent={this.get('value')} status={this.get('status')} />
            `;

            static defaults = () => ({
                value: '100',
                status: 'normal'
            })

            private Progress = Progress;
        }

        const [instance, element] = mount(Demo);
        expect(element.classList.contains('k-success')).to.be.true;

        instance.forceUpdate();
        await wait();
        expect(element.classList.contains('k-success')).to.be.true;

        instance.set<string>('status', 'active');
        await wait();
        expect(element.classList.contains('k-success')).to.be.true;

        instance.set<string>('status', 'warning');
        await wait();
        expect(element.classList.contains('k-success')).to.be.true;

        instance.set<number>('value', 90);
        await wait();
        expect(element.classList.contains('k-warning')).to.be.true;

        instance.set<number>('value', 100);
        await wait();
        expect(element.classList.contains('k-success')).to.be.true;

        instance.set<string>('status', 'error');
        await wait();
        expect(element.classList.contains('k-error')).to.be.true;
    });

    it('should custom colors', async () => {
        const [instance, element] = mount(CustomColorDemo);

        instance.set<number>('percent', 25);
        await wait();
        expect(element.outerHTML).to.matchSnapshot();

        instance.set<number>('percent', 50);
        await wait();
        expect(element.outerHTML).to.matchSnapshot();

        instance.set<number>('percent', 75);
        await wait();
        expect(element.outerHTML).to.matchSnapshot();

        instance.set<number>('percent', 100);
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
    });
});

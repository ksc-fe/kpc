import ChildrenDemo from '~/components/progress/demos/children';
import {mount, wait} from 'test/utils';
import {Progress} from 'kpc/components/progress';
import Intact, { Component } from 'intact';

describe('Progress', () => {
    it('change percent', () => {
        const [instance, element] = mount(ChildrenDemo);

        instance.set<number>('percent', 100);
        expect(element.outerHTML).to.matchSnapshot();

        instance.set<number>('percent', 110);
        expect(element.outerHTML).to.matchSnapshot();

        instance.set<number>('percent', 90);
        expect(element.outerHTML).to.matchSnapshot();

        instance.set<number>('percent', -10);
        expect(element.outerHTML).to.matchSnapshot();
    });

    it('should use the specified status when status is error', () => {
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
        expect(element.classList.contains('k-error')).to.be.true;
        instance.set<number>('value', 100);
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
        expect(element.classList.contains('k-success')).to.be.true;
        instance.set<string>('status', 'active');
        expect(element.classList.contains('k-success')).to.be.true;
        instance.set<string>('status', 'warning');
        expect(element.classList.contains('k-success')).to.be.true;
        instance.set<number>('value', 90);
        await wait(500);
        expect(element.classList.contains('k-warning')).to.be.true;
        instance.set<number>('value', 100);
        await wait(500);
        expect(element.classList.contains('k-success')).to.be.true;
        instance.set<string>('status', 'error');
        await wait(500);
        expect(element.classList.contains('k-error')).to.be.true;
    });
});

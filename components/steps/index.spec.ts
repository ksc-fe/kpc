import ClickableDemo from '~/components/steps/demos/clickable';
import {mount, unmount, dispatchEvent, wait} from '../../test/utils';

describe('Steps', () => {
    afterEach(() => {unmount()});

    it('change step', async () => {
        const [instance, element] = mount(ClickableDemo);

        const [, next] = element.querySelectorAll<HTMLElement>('.k-btn');
        next.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        const [step1, step2] = element.querySelectorAll<HTMLElement>('.k-step');
        step1.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('index')).to.eql(0);

        step2.click();
        expect(instance.get('index')).to.eql(0);
    });
});

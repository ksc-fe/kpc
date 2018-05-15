import ChildrenDemo from '~/components/progress/demos/children';
import {mount, dispatchEvent} from 'test/utils';

describe('Progress', () => {
    let instance;

    afterEach(() => {
        instance.destroy();
        document.body.removeChild(instance.element);
    });

    it('change percent', () => {
        instance = mount(ChildrenDemo);

        instance.set('percent', 100);
        expect(instance.element.outerHTML).to.matchSnapshot();

        instance.set('percent', 110);
        expect(instance.element.outerHTML).to.matchSnapshot();

        instance.set('percent', 90);
        expect(instance.element.outerHTML).to.matchSnapshot();

        instance.set('percent', -10);
        expect(instance.element.outerHTML).to.matchSnapshot();
    });
});

import ChildrenDemo from '~/components/progress/demos/children';
import {mount, unmount, dispatchEvent} from 'test/utils';
import {Progress} from 'kpc/components/progress';
import Intact from 'intact';

describe('Progress', () => {
    let instance;

    afterEach(() => { unmount(instance); });

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

    it('should use the specified status', () => {
        class Demo extends Intact {
            @Intact.template()
            static template = `
                <Progress percent={{ self.get('value') }} status="error" />
            `;
            defaults() {
                return {value: 100}
            }
            _init() {
                this.Progress = Progress;
            }
        }

        instance = mount(Demo);
        expect(instance.element.innerHTML).to.matchSnapshot();
        instance.set('value', 90);
        expect(instance.element.innerHTML).to.matchSnapshot();
        instance.set('value', 100);
        expect(instance.element.innerHTML).to.matchSnapshot();
    });
});

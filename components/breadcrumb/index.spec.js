import Demo from '~/components/breadcrumb/demos/basic';
import {mount, dispatchEvent, unmount} from '../../test/utils';

describe('Breadcrumb', () => {
    let instance;

    afterEach(() => {
        unmount(instance);
    });

    it('should go to the url set by to', () => {
        instance = mount(Demo);

        dispatchEvent(instance.element.children[0].children[0], 'click');
        expect(location.hash).to.eql('#/');
    });
});

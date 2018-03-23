import Demo from '~/components/breadcrumb/demos/basic';
import {mount, dispatchEvent} from '../../test/utils';

describe('Breadcrumb', () => {
    let instance;

    afterEach(() => {
        instance.destroy();
        document.body.removeChild(instance.element);
    });

    it('should go to the url set by to', () => {
        instance = mount(Demo);

        dispatchEvent(instance.element.children[0].children[0], 'click');
        expect(location.hash).to.eql('#/');
    });
});

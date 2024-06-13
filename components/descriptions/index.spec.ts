import BasicDemo from '~/components/descriptions/demos/basic';
import {mount, unmount} from '../../test/utils';

describe('Descriptions', () => {
  
    afterEach(() => unmount());

    it('should render correctly', () => {
        const [instance, element] = mount(BasicDemo);

        expect(element.outerHTML).to.matchSnapshot();


    });

});
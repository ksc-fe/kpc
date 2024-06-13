import CustomDemo from '~/components/descriptions/demos/custom';
import {mount, unmount} from '../../test/utils';

describe('Descriptions', () => {
  
    afterEach(() => unmount());

    it('should render correctly', () => {
        const [instance, element] = mount(CustomDemo);

        expect(element.outerHTML).to.matchSnapshot();
    });

});
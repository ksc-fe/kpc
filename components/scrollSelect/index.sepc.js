import ScrollSelect from 'kpc/components/scrollSelect';
import Intact from 'intact';
import {mount, unmount, dispatchEvent} from 'test/utils';

describe('ScrollSelect', () => {
    let instance;

    class Demo extends Intact {
        @Intact.template()
        static template = `<ScrollSelect></ScrollSelect>`
    }

    it('should select by scroll', () => {
    });
});

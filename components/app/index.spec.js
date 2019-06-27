import BasicDemo from '~/components/app/demos/basic';
import SSRDemo from '~/components/app/demos/ssr';
import {mount, unmount} from 'test/utils';

describe('App', () => {
    let instance;

    afterEach(() => unmount(instance));

    it('should load page', (done) => {
        instance = mount(BasicDemo);

        instance._changePage('a');
        expect(instance.element.outerHTML).to.matchSnapshot();

        instance._changePage('b').then(() => {
            setTimeout(() => {
                expect(instance.element.outerHTML).to.matchSnapshot();
                done();
            }, 500);
        });
        expect(instance.element.outerHTML).to.matchSnapshot();
    });

    it('should handle ssr correctly', (done) => {
        instance = mount(SSRDemo);

        instance._renderString();
        expect(instance.element.outerHTML).to.matchSnapshot();

        instance._changePage('a');
        expect(instance.element.outerHTML).to.matchSnapshot();

        instance._changePage('b');
        expect(instance.element.outerHTML).to.matchSnapshot();
        setTimeout(() => {
            expect(instance.element.outerHTML).to.matchSnapshot();
            done();
        }, 500);
    });
});

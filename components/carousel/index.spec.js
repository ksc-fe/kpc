import AutoplayDemo from '~/components/carousel/demos/autoplay';
import EffectDemo from '~/components/carousel/demos/effect';
import {mount, unmount, wait} from 'test/utils';

describe('Carousel', () => {
    let instance;

    afterEach(() => unmount(instance));

    it('basic test', async function() {
        this.enableTimeouts(false);
        instance = mount(AutoplayDemo);

        const carousel = instance.vdt.vNode.children;

        // should change to next item
        expect(instance.element.innerHTML).to.matchSnapshot();
        carousel._next();
        expect(instance.element.innerHTML).to.matchSnapshot();
        carousel._prev();
        expect(instance.element.innerHTML).to.matchSnapshot();
        carousel._changeValue('$3');
        expect(instance.element.innerHTML).to.matchSnapshot();
        carousel._changeValue('$0');
        expect(instance.element.innerHTML).to.matchSnapshot();

        // change autoplay
        carousel.set('autoplay', 1000);
        await wait(1500);
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('fade effect', async function() {
        instance = mount(EffectDemo);

        const carousel = instance.vdt.vNode.children;

        carousel._next();
        expect(instance.element.innerHTML).to.matchSnapshot();
    });
});

import BasicDemo from '~/components/carousel/demos/basic';
import EffectDemo from '~/components/carousel/demos/effect';
import {mount, unmount, wait, nextFrame} from 'test/utils';

describe('Carousel', () => {
    let instance;

    afterEach(() => unmount(instance));

    it('basic test', async function() {
        this.enableTimeouts(false);
        instance = mount(BasicDemo);

        const carousel = instance.vdt.vNode.children;

        // should change to next item
        expect(instance.element.innerHTML).to.matchSnapshot();
        carousel._next();
        await nextFrame();
        expect(instance.element.innerHTML).to.matchSnapshot();
        carousel._prev();
        await nextFrame();
        expect(instance.element.innerHTML).to.matchSnapshot();
        carousel._setIndex(3);
        await nextFrame();
        expect(instance.element.innerHTML).to.matchSnapshot();
        carousel._setIndex(0);
        await nextFrame();
        expect(instance.element.innerHTML).to.matchSnapshot();
        carousel._prev();
        await nextFrame();
        expect(instance.element.innerHTML).to.matchSnapshot();
        carousel._next();
        await nextFrame();
        expect(instance.element.innerHTML).to.matchSnapshot();

        // change clonedAmount
        carousel.set('clonedAmount', 2);
        await nextFrame();
        expect(instance.element.innerHTML).to.matchSnapshot();

        // change autoplay
        carousel.set('autoplay', 1000);
        await wait(1500);
        // expect(instance.element.innerHTML).to.matchSnapshot();
        carousel.set('autoplay', false);
        await wait(1500);
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('fade effect', async function() {
        instance = mount(EffectDemo);

        const carousel = instance.vdt.vNode.children;

        carousel._next();
        expect(instance.element.innerHTML).to.matchSnapshot();

        // change effect
        carousel.set('effect', 'slide');
        expect(instance.element.innerHTML).to.matchSnapshot();
        carousel.set('effect', 'fade');
        expect(instance.element.innerHTML).to.matchSnapshot();
    });
});

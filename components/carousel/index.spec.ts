import AutoPlayDemo from '~/components/carousel/demos/autoplay';
import EffectDemo from '~/components/carousel/demos/effect';
import {mount, unmount, wait, nextFrame} from '../../test/utils';
import {Carousel} from './';
import {CarouselItem} from './item';
import {Component} from 'intact';

describe('Carousel', () => {

    afterEach(() => {unmount()});

    it('basic test', async function() {
        this.timeout(0);

        class Demo extends Component<{value: string, clonedAmount: number}>{
            static template = `
                const {Carousel, CarouselItem} = this;
                <Carousel v-model='value' clonedAmount={this.get('clonedAmount')}>
                    <CarouselItem>1</CarouselItem>
                    <CarouselItem>2</CarouselItem>
                    <CarouselItem>3</CarouselItem>
                    <CarouselItem>4</CarouselItem> 
                </Carousel>
            `;

            static defaults = () => ({
                value: '$0',
                clonedAmount: 1
            })

            private Carousel = Carousel;
            private CarouselItem = CarouselItem;
        }

        const [instance, element] = mount(Demo);

        const carousel = instance.$lastInput!.children as Carousel;
        expect(element.innerHTML).to.matchSnapshot();
        
        // should change to next item
        carousel.next();
        await nextFrame();
        expect(carousel.get('value')).to.eql('$1');
        expect(element.innerHTML).to.matchSnapshot();
        
        carousel.prev();
        await nextFrame();
        expect(carousel.get('value')).to.eql('$0');
        expect(element.innerHTML).to.matchSnapshot();

        carousel.setIndex(3);
        await nextFrame();
        expect(carousel.get('value')).to.eql('$3');
        expect(element.innerHTML).to.matchSnapshot();
        
        carousel.setIndex(0);
        await nextFrame();
        expect(carousel.get('value')).to.eql('$0');
        expect(element.innerHTML).to.matchSnapshot();
        
        carousel.prev();
        await nextFrame();
        expect(carousel.get('value')).to.eql('$3');
        expect(element.innerHTML).to.matchSnapshot();
        
        carousel.next();
        await nextFrame();
        expect(carousel.get('value')).to.eql('$0');
        expect(element.innerHTML).to.matchSnapshot();

        instance.set<string>('value', '$3');
        await nextFrame();
        expect(element.innerHTML).to.matchSnapshot();

        // change clonedAmount
        instance.set<number>('clonedAmount', 2);
        await wait(0);
        expect(element.innerHTML).to.matchSnapshot();
    });


    it('can auto play', async function() {
        this.timeout(0);
        const [instance] = mount(AutoPlayDemo);

        const carousel = instance.$lastInput!.children as Carousel;
        instance.set<number>('time', 1000);
        await wait(1500);
        expect(carousel.get('value')).to.eql('$1');
        
        await wait(1100);
        expect(carousel.get('value')).to.eql('$2');
        
        await wait(1100);
        expect(carousel.get('value')).to.eql('$3');
        
        instance.set<boolean>('time', false);
        await wait(1100);
        expect(carousel.get('value')).to.eql('$3');
    });

    it('fade effect', async function() {
        const [instance, element] = mount(EffectDemo);

        const carousel = instance.$lastInput!.children as Carousel;

        carousel.next();
        await nextFrame();
        expect(element.innerHTML).to.matchSnapshot();

        // change effect
        instance.set<string>('effect', 'slide');
        await wait(0);
        expect(element.innerHTML).to.matchSnapshot();
        
        instance.set<string>('effect', 'fade');
        await wait(0);
        expect(element.innerHTML).to.matchSnapshot();
    });
});

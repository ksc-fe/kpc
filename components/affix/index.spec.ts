import BasicDemo from '~/components/affix/demos/basic';
import CustomDemo from '~/components/affix/demos/custom';
import {mount, unmount, wait, dispatchEvent} from '../../test/utils';

// const nativeScrollTo = window.scrollTo;
// window.scrollTo = (...args: any[]) => {
    // debugger;

    // nativeScrollTo.call(window, ...args);
// } 

// window.scrollBy = () => {
    // debugger;
// }

// window.addEventListener('scroll', () => {
    // debugger;
// });

describe('Affix', () => {
    // afterEach(() => unmount());

    it('basic test', async function() {
        this.timeout(0);
        const [instance, element] = mount(BasicDemo, {marginTop: '200px'});
        const [affix1, affix2] = element.querySelectorAll<HTMLElement>('.k-affix');
        const [wrapper1, wrapper2] = element.querySelectorAll<HTMLElement>('.k-affix-wrapper');
        const test = (height1: string, style1: string | null, height2: string, style2: string | null) => {
            expect(affix1.style.height).to.eql(height1);
            expect(wrapper1.getAttribute('style')).to.eql(style1);
            expect(affix2.style.height).to.eql(height2);
            expect(wrapper2.getAttribute('style')).to.eql(style2);
        };

        // browser may scroll to the last position of page
        await wait(100);

        window.scrollTo(0, document.scrollingElement!.scrollHeight - 1080);
        await wait(100);
        test(`${wrapper1.offsetHeight}px`, `position: fixed; width: 800px; top: 87px;`, '', null);

        // scroll to the top
        window.scrollTo(0, 0);
        await wait(100);
        test(``, null, '', null);

        // change bottom
        instance.set<number>('bottom', 900);
        await wait(100);
        test(``, null, `${wrapper2.offsetHeight}px`, `position: fixed; width: 800px; bottom: 900px;`);
    });

    it('custom fix rule', async function() {
        this.timeout(0);
        const [instance, element] = mount(CustomDemo, {marginTop: '200px'});
        const [affix1, affix2] = element.querySelectorAll<HTMLElement>('.k-affix');
        const [wrapper1, wrapper2] = element.querySelectorAll<HTMLElement>('.k-affix-wrapper');
        const test = (height1: string, style1: string | null, height2: string, style2: string | null) => {
            expect(affix1.style.height).to.eql(height1);
            expect(wrapper1.getAttribute('style')).to.eql(style1);
            expect(affix2.style.height).to.eql(height2);
            expect(wrapper2.getAttribute('style')).to.eql(style2);
        };

        // browser may scroll to the last position of page
        await wait(100);

        window.scrollTo(0, document.scrollingElement!.scrollHeight - 1080);
        await wait(100);
        test(`${wrapper1.offsetHeight}px`, `position: fixed; width: 800px; top: 150px;`, '', null);

        // scroll to the top
        window.scrollTo(0, 0);
        await wait(100);
        test(``, null, '', null);

        // change bottom
        element.style.marginTop = '900px';
        instance.set<number>('bottom', 500);
        await wait();
        document.scrollingElement!.scrollTop = document.scrollingElement!.scrollHeight;
        await wait(100)
        test(
            `${wrapper1.offsetHeight}px`,
            `position: fixed; width: 800px; top: 150px;`,
            `${wrapper2.offsetHeight}px`,
            `position: fixed; width: 800px; bottom: 500px;`,
        );

        window.scrollTo(0, 0);
        await wait(100);
        test(``, null, '', null);
    });
});

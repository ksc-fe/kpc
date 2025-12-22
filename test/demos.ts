import {mount, testDemos, unmount, wait, nextFrame} from './utils';

const req = require.context('~/components/', true, /^((?!(affix|code)).)*\/demos\/.*index\.ts$/);
// const req = require.context('~/components/', true, /button\/demos\/.*index\.ts$/);
// const vueReq = require.context('~/components/', true, /^((?!(affix|code)).)*\/demos\/.*index\.vue$/);

describe('Demos', () => {
    afterEach(() => unmount());

    describe('Intact', () => {
        testDemos(req, async (Demo) => {
            const [instance, element] = mount(Demo);
            await nextFrame();
            expect(element.outerHTML).to.matchSnapshot();
        });
    });
});


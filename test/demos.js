import {render} from './utils';

const req = require.context('~/components/', true, /demos\/.*index\.js$/);

describe('Demos', () => {
    let demo;

    afterEach(() => {
        demo.destroy();
    });

    req.keys().forEach(item => {
        const paths = item.split('/');
        const name = paths[1];
        const type = paths[3];
        const Demo = req(item).default;

        it(`${name[0].toUpperCase()}${name.substring(1)} ${type}`, () => {
            demo = render(Demo);
            expect(demo.element.outerHTML).to.matchSnapshot();
        });
    });
});


import {mount, dispatchEvent, getElement} from 'test/utils';

describe('Dropdown', () => {
    it('demos test', () => {
        const req = require.context('~/components/dropdown/demos', true, /^((?!async).)*index\.js$/i);
        req.keys().forEach(item => {
            const Demo = req(item).default;
            const i = mount(Demo);

            dispatchEvent(i.element.firstChild, 'click');
            expect(getElement('.k-dropdown-menu').innerHTML).to.matchSnapshot();
            i.destroy();
            document.body.removeChild(i.element);
        });
    });
});

import BasicDemo from '~/components/copy/demos/basic';
import {mount, unmount, dispatchEvent, wait, getElement} from '../../test/utils';
import { Tooltip } from '../tooltip';
import { Component } from 'intact';
import { Copy } from '.';

describe('Copy', () => {
    afterEach(async () => {
        unmount();
    });

    it('should copy', async function() {
        const spy = sinon.spy(navigator.clipboard, 'writeText');
        const [instance, element] = mount(BasicDemo);
        
        element.click();
        await wait();
        expect(spy.calledWith('Hello King Desgin!')).to.be.true;

        spy.restore();
    });

    it('wrap copy with tooltip', async () => {
        const spy = sinon.spy(navigator.clipboard, 'writeText');
        class Demo extends Component {
            static template = `
                const { Tooltip, Copy } = this;
                <Tooltip content="test">
                    <Copy text="test" />
                </Tooltip>
            `;
            Tooltip = Tooltip;
            Copy = Copy;
        }

        const [instance, element] = mount(Demo);

        element.click();
        await wait();
        expect(spy.calledWith('test')).to.be.true;

        spy.restore();
    });
});

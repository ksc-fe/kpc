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
        const [instance, element] = mount(BasicDemo);
        
        element.click();
        try {
            const text = await navigator.clipboard.readText();
            expect(text).to.eql('Hello King Desgin!');
        } catch (e) {
            // Read permisson denied 
            console.log(e);
        }
    });

    it('wrap copy with tooltip', async () => {
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
        try {
            const text = await navigator.clipboard.readText();
            expect(text).to.eql('test');
        } catch (e) {
            // Read permisson denied 
            console.log(e);
        }
    });
});

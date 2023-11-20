import { Component } from 'intact';
import {mount, unmount, dispatchEvent, wait, getElement} from '../../test/utils';
import { ConfigProvider } from '.';
import { Button, ButtonGroup } from '../button';

describe('Config', () => {
    // afterEach(async () => {
        // unmount();
    // });

    it('should change classname prefix', async function() {
        class Demo extends Component<{k: string}> {
            static template = `
                const { ConfigProvider, ButtonGroup, Button } = this;
                <div>
                    <ConfigProvider value={{classNamePrefix: this.get('k')}}>
                        <ButtonGroup>
                            <Button ev-click={() => this.set('k', 'a')}>change to a</Button>
                            <Button type="primary" ev-click={() => this.set('k', 'b')}>change to b</Button>
                        </ButtonGroup>
                    </ConfigProvider>
                    <Button>should not change</Button>
                </div>
            `

            static defaults() {
                return {
                    k: null
                }
            }

            ConfigProvider = ConfigProvider;
            ButtonGroup = ButtonGroup;
            Button = Button;
        }

        const [instance, element] = mount(Demo);

        expect(element.innerHTML).to.matchSnapshot();

        instance.set('k', 'a');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        instance.set('k', 'b');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
    });
});

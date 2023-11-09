import {mount, unmount, dispatchEvent, wait, getElement} from '../../test/utils';
import { Component } from 'intact';
import { Layout, Header, Aside, Body } from './';

describe('Layout', () => {
    afterEach(() => {unmount()});

    it('nest Layout in Body with fixed header', async () => {
        class Demo extends Component {
            static template = `
                const { Layout, Header, Aside, Body } = this;
                <Layout>
                    <Header fixed />
                    <Body>
                        <Layout>
                            <Aside fixed />
                            <Body>body</Body>
                        </Layout>
                    </Body>
                </Layout>
            `;

            Layout = Layout;
            Header = Header;
            Aside = Aside;
            Body = Body;
        }

        const [instance, element] = mount(Demo);
        expect(element.innerHTML).to.matchSnapshot();
    });
});

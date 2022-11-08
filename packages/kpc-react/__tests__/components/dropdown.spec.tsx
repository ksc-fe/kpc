import React, {createRef} from 'react';
import * as ReactDOM from 'react-dom';
import {Dropdown, DropdownMenu, DropdownItem, Tree, Dialog, Layout} from '../../';
import {getElement, wait} from '../../../../test/utils';
import {Component} from 'intact-react';

describe('Dropdown', () => {
    it('should save original events', async () => {
        const click = sinon.spy(() => console.log(1));
        const container = document.createElement('div');
        document.body.appendChild(container);

        const button = createRef<HTMLButtonElement>();
        ReactDOM.render(
            <div>
                <Dropdown>
                    <button onClick={click} ref={button}>hover</button>
                    <DropdownMenu>
                        <DropdownItem>item 1</DropdownItem>
                        <DropdownItem>item 2</DropdownItem>
                        <DropdownItem>item 3</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>,
            container
        );

        button.current!.click();
        expect(click.callCount).to.eql(1);
        await wait();
        expect(getElement('.k-dropdown-menu')).to.be.exist;

        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
    });

    it('reproduce #764', async () => {
        const mounted = sinon.spy(() => console.log('mounted'));
        const updated = sinon.spy(() => console.log('updated'));
        class Demo extends Component<{title: string}> {
            static template = `<div>demo {this.get('title')}</div>`;

            mounted() {
               mounted(); 
            }

            updated() {
                updated();
            }
        }
        const FooDialog: React.FC = () => {
            const [title, setTitle] = React.useState({title: '0'});
            React.useEffect(() => {
                setTitle({title: '1'});
            }, []);

            return <Dialog title={title.title} value={true}>
                <div><Demo title={title.title} /></div>
            </Dialog>
        };
        const Foo: React.FC<{data: any}> = ({data}) => {
            return <div>
                <FooDialog />
            </div>
        };

        let set: any;
        const Test: React.FC = () => {
            const [isFoo, setIsFoo] = React.useState(false);
            const [data, setData] = React.useState<any>([{label: 1, key: 1}]);
            set = setIsFoo;

            return <Layout>
                <div onClick={() => setIsFoo(!isFoo)}>toggle</div>
                {isFoo ? <Foo key="foo" data={data} /> : <div>test</div>}
            </Layout>
        };

        const container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Test />, container);

        set(true);

        await wait(0)

        expect(getElement('.k-dialog')).to.be.exist;
        expect(mounted.calledBefore(updated)).to.be.true;

        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
    });
});

import React from 'react';
import ReactDOM from 'react-dom';
import {mount, unmount} from '../../test/utils';
import {Table, TableColumn} from 'kpc/components/table';
import {Switch} from 'kpc/components/switch';
import {Tooltip} from 'kpc/components/tooltip';

describe('Table', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        // ReactDOM.render(null, container);
        document.body.removeChild(container);
    });

    it('render component in template', () => {
        ReactDOM.render(
            <Table data={[{}]}>
                <TableColumn
                    key="a"
                    title="test"
                    template={(data) => {
                        return <div>
                            <Switch />
                        </div>
                    }}
                />
            </Table>,
            container
        );
    });

    it('render Tooltip in template, and it does not exist first time', () => {
        class Demo extends React.Component {
            state = {data: []};
            render() {
                window.test = this;
                return <Table data={this.state.data}>
                    <TableColumn
                        key="a"
                        title="test"
                        template={(data) => {
                            return <Tooltip content="test">{data.a}</Tooltip>
                        }}
                    />
                </Table>
            }
        }
        ReactDOM.render(<Demo />, container);
    });
});

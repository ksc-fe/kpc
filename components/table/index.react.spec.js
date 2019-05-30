import React from 'react';
import ReactDOM from 'react-dom';
import {mount, unmount} from '../../test/utils';
import {Table, TableColumn} from 'kpc/components/table';
import {Switch} from 'kpc/components/switch';

describe('Table', () => {
    it('render component in template', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

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

        document.body.removeChild(container);
    });
});

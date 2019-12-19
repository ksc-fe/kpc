import React from 'react';
import {Table, TableColumn} from 'kpc-react/components/table';
import {Tooltip} from 'kpc-react/components/tooltip';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        const scheme = {
            a: {
                title: (
                    <React.Fragment>
                        <span title="自定义表头内容" className="c-middle title">自定义表头内容</span>
                        <Tooltip content="tooltip content">
                            <i className="ion-ios-help-outline c-middle"></i>
                        </Tooltip>
                    </React.Fragment>
                ), 
                group: [{label: 'test', value: ''}],
                sortable: true,
            },
            b: '表头2'
        };
        const data = [{a: '第一行', b: '哈哈2'}, {a: '第二行', b: '哈哈2'}];
    
        return (
            <div>
                <Table scheme={scheme} data={data} />
                <Table data={data}>
                    <TableColumn key="a"
                        b-title={<React.Fragment>
                            <span title="自定义表头内容" className="c-middle title">自定义表头内容</span>
                            <Tooltip content="tooltip content">
                                <i className="ion-ios-help-outline c-middle"></i>
                            </Tooltip>
                        </React.Fragment>}
                        group={[{label: 'test', value: ''}]}
                        sortable
                    >
                    </TableColumn>
                    <TableColumn key="b" title="表头2" />
                </Table>
            </div>
        )
    }
}
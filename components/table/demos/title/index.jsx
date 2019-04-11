import React from 'react';
import {Table, TableColumn} from 'kpc/components/table';
import {Tooltip} from 'kpc/components/tooltip';

export default class extends React.Component {
    render() {
        const scheme = {
            a: {
                title: (
                    <>
                        <span title="自定义表头内容" className="c-middle title">自定义表头内容</span>
                        <Tooltip content="tooltip content">
                            <i className="ion-ios-help-outline c-middle"></i>
                        </Tooltip>
                    </>
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
                        b-title={<>
                            <span title="自定义表头内容" className="c-middle title">自定义表头内容</span>
                            <Tooltip content="tooltip content">
                                <i className="ion-ios-help-outline c-middle"></i>
                            </Tooltip>
                        </>}
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
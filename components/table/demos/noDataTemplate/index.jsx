import React from 'react';
import Table from 'kpc-react/components/table';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        const scheme = {a: '表头1', b: '表头2'};
        const data = [];
        const tip = <div>这里没有数据(自定义版本)</div>;
    
        return (
            <div className='no-data-template'>
                <Table scheme={scheme} data={data} />
                <Table scheme={scheme} data={data} noDataTemplate={tip} />
                <Table scheme={scheme} data={data}
                    b-no-data={<React.Fragment><div style={{"color":"red"}}>没有数据</div></React.Fragment>}
                >
                </Table>
            </div>
        )
    }
}
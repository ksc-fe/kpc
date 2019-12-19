import React from 'react';
import Table from 'kpc-react/components/table';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "data1": [
                {
                    "a": "赋默认值选中"
                },
                {
                    "a": "不选中"
                }
            ],
            "data2": [
                {
                    "text": "选中",
                    "id": "yes"
                },
                {
                    "text": "不选中",
                    "id": "no"
                }
            ],
            "data3": [
                {
                    "a": "赋默认值选中"
                },
                {
                    "a": "不选中"
                },
                {
                    "a": "赋默认值选中，可设置多个"
                }
            ]
        };
        this.setRowKey = this.setRowKey.bind(this);
    }

    setRowKey(value, index) {
        return value.id;
    }
    
    render() {
        return (
            <div>
                <div className='no-data-template'>
                    <Table scheme={{a: 'radio不指定rowKey'}}
                        data={this.state.data1}
                        checkedKey={0}
                        checkType='radio'
                    />
                    <Table scheme={{text: 'radio指定为item的id'}} 
                        data={this.state.data2} 
                        checkType='radio' 
                        rowKey={this.setRowKey}  
                        checkedKey="yes"
                    />
                </div>
                <div className='no-data-template'>
                    <Table scheme={{a: 'checkbox不指定rowKey'}} 
                        data={this.state.data3} 
                        checkedKeys={[0, 2]}
                    />
                    <Table scheme={{text: 'checkbox指定为item的id'}} 
                        data={this.state.data2} 
                        rowKey={this.setRowKey} 
                        checkedKeys={['yes']}
                    />
                </div>
            </div>
        )
    }
}
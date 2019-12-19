import React from 'react';
import Table from 'kpc-react/components/table';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "data1": [
                {
                    "a": "border类型",
                    "b": "type=\"border\""
                }
            ],
            "data2": [
                {
                    "a": "grid类型",
                    "b": "type=\"grid\""
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <Table scheme={{a: '类型', b: '属性'}}
                    data={this.state.data1}
                    type="border" 
                />
                <Table scheme={{a: '类型', b: '属性'}}
                    data={this.state.data2}
                    type="grid" 
                />
            </div>
        )
    }
}
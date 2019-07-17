import React from 'react';
import Table from 'kpc/components/table';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "scheme": {
                "a": "表头"
            },
            "data1": [
                {
                    "a": "多选1"
                },
                {
                    "a": "多选2"
                }
            ],
            "data2": [
                {
                    "a": "单选1"
                },
                {
                    "a": "单选2"
                }
            ],
            "data3": [
                {
                    "a": "不可选1"
                },
                {
                    "a": "不可选2"
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <Table scheme={this.state.scheme} data={this.state.data1} ref={i => this.__checkbox = i} />
                <Table scheme={this.state.scheme} data={this.state.data2} checkType="radio" ref={i => this.__radio = i} />
                <Table scheme={this.state.scheme} data={this.state.data3} checkType="none" />
            </div>
        )
    }
}
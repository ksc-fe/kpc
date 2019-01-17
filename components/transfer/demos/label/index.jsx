import React from 'react';
import Transfer from 'kpc/components/transfer';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [
                {
                    "name": "主机名0",
                    "desc": "前端服务器0",
                    "ip": "192.168.1.0"
                },
                {
                    "name": "主机名1",
                    "desc": "前端服务器1",
                    "ip": "192.168.1.1"
                },
                {
                    "name": "主机名2",
                    "desc": "前端服务器2",
                    "ip": "192.168.1.2"
                },
                {
                    "name": "主机名3",
                    "desc": "前端服务器3",
                    "ip": "192.168.1.3",
                    "disabled": true
                },
                {
                    "name": "主机名4",
                    "desc": "前端服务器4",
                    "ip": "192.168.1.4"
                }
            ]
        };
        this.filter = this.filter.bind(this);
    }

    filter(data, keywords) {
        return data.name.includes(keywords) || 
            data.desc.includes(keywords) ||
            data.ip.includes(keywords);
    }
    
    render() {
        return (
            <Transfer data={this.state.data}
                b-label={(data, index, type) => {
                    return <>
                        <div>
                            <div>{data.name}</div>
                            <p>{data.desc} | {data.ip}</p>
                        </div>
                    </>
                }}
                filter={this.filter}
                filterable
                keyName="name"
                ref={i => this.__test = i}
            >
            </Transfer>
        )
    }
}
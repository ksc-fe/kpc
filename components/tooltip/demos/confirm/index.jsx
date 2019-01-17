import React from 'react';
import Tooltip from 'kpc/components/tooltip';
import Button from 'kpc/components/button';
import Message from 'kpc/components/message';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.ok = this.ok.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    ok() {
        Message.success('Clicked ok!');
    }
    
    cancel() {
        Message.info('Clicked cancel!');
    }
    
    render() {
        return (
            <div>
                <Tooltip content="确定删除？"
                    confirm
                    trigger="click"
                    onOk={this.ok}
                    onCancel={this.cancel}
                    ref={i => this.__test = i}
                >
                    <Button>删除</Button>
                </Tooltip>
            </div>
        )
    }
}
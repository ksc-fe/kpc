import React from 'react';
import Button from 'kpc/components/button';
import Dialog from 'kpc/components/dialog';

import Message from 'kpc/components/message';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.set = this.set.bind(this);
        this.onOk = this.onOk.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    set(key, value) { this.setState({[key]: value}); }
    
    onOk() {
        Message.success('You clicked ok button.');
    }
    
    onCancel() {
        Message.error('You clicked cancel button.');
    }
    
    render() {
        return (
            <div>
                <Button onClick={this.set.bind(this, 'show', true)}
                    type="primary"
                >Show Dialog</Button>
                <Dialog value={this.state.show} on$change-value={(c, show) => this.setState({show})} title="Dialog Title"
                    onOk={this.onOk}
                    onCancel={this.onCancel}
                >Dialog Body</Dialog>
            </div>
        )
    }
}
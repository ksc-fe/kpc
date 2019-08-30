import React from 'react';
import Button from 'kpc/components/button';
import Dialog from 'kpc/components/dialog';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onClick = this.onClick.bind(this);
        this._terminate = this._terminate.bind(this);
    }

    onClick() {
        this.setState({show: true});
    }
    
    _terminate() {
        Dialog.confirm({
            content: 'Are you sure you want to close the dialog?'
        }).then(() => {
            this.setState({show: false});
        }, () => {});
    }
    
    render() {
        return (
            <div>
                <Button onClick={this.onClick} type="primary">Show Dialog</Button>
                <Dialog value={this.state.show} on$change-value={(c, show) => this.setState({show})} title="Dialog Title" ref={i => this.__demo = i}
                    terminate={this._terminate}
                    cancel={this._terminate}
                >
                    Dialog Body 
                </Dialog>
            </div>
        )
    }
}
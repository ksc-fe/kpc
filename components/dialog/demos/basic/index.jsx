import React from 'react';
import Button from 'kpc/components/button';
import Dialog from 'kpc/components/dialog';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({show: true});
    }
    
    render() {
        return (
            <div>
                <Button onClick={this.onClick} type="primary">Show Dialog</Button>
                <Dialog value={this.state.show} on$change-value={(c, show) => this.setState({show})} title="Dialog Title" ref={i => this.__demo = i}>
                    Dialog Body 
                </Dialog>
            </div>
        )
    }
}
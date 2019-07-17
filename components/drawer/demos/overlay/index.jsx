import React from 'react';
import Drawer from 'kpc/components/drawer';
import {Button, ButtonGroup} from 'kpc/components/button';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.set = this.set.bind(this);
    }

    set(key, value) { this.setState({[key]: value}); }
    
    render() {
        return (
            <div>
                <Button onClick={this.set.bind(this, 'noOverlay', true)}
                    type="primary"
                >Show Drawer Without Overlay</Button>
                <Drawer value={this.state.noOverlay}
                    on$change-value={(c, noOverlay) => this.setState({noOverlay})} 
                    title="Drawer Title"
                    ref={i => this.__demoOne = i}
                    overlay={false}
                >
                    Drawer Without Overlay
                </Drawer>
            </div>
        )
    }
}
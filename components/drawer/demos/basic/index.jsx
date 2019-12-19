import React from 'react';
import Drawer from 'kpc-react/components/drawer';
import {Button, ButtonGroup} from 'kpc-react/components/button';
import {Select, Option} from 'kpc-react/components/select';

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
                <Button onClick={this.set.bind(this, 'showDrawer', true)}
                    type="primary"
                >Show Drawer</Button>
                <Drawer value={this.state.showDrawer} on$change-value={(c, showDrawer) => this.setState({showDrawer})} title="Drawer Title" ref={i => this.__demoOne = i}>
                    <Select>
                        <Option value="1">Option 1</Option>
                        <Option value="2">Option 2</Option>
                    </Select>
            
                    Drawer Body 
                </Drawer>
            </div>
        )
    }
}
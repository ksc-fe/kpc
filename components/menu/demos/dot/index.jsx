import React from 'react';
import {Menu, MenuItem} from 'kpc/components/menu';
import Icon from 'kpc/components/icon';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "expandedKeys": [
                "3"
            ],
            "selectedKey": "3-1"
        };
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(item) {
        console.log('key', item.get('key'));
    }
    
    render() {
        return (
            <Menu
                b-header={<React.Fragment><Icon className="ion-star" />Header</React.Fragment>}
                expandedKeys={this.state.expandedKeys}
                on$change-expandedKeys={(c, expandedKeys) => this.setState({expandedKeys})}
                selectedKey={this.state.selectedKey}
                on$change-selectedKey={(c, selectedKey) => this.setState({selectedKey})}
                dot 
                theme="light"
            >
                <MenuItem key="1" onSelect={this.onSelect}>menu 1</MenuItem>
                <MenuItem key="2" disabled>menu 2</MenuItem>
                <MenuItem key="3" dot={false}>
                    <Icon className="ion-heart" />menu 3
                    <Menu>
                        <MenuItem key="3-1">sub menu 1</MenuItem>
                        <MenuItem key="3-2">sub menu 2</MenuItem>
                        <MenuItem key="3-3" disabled>sub menu 3</MenuItem>
                        <MenuItem key="3-4">sub menu 4</MenuItem>
                    </Menu>
                </MenuItem>
                <MenuItem key="4" to="/">menu 4</MenuItem>
            </Menu>
        )
    }
}
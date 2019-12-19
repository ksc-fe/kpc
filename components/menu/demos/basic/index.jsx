import React from 'react';
import {Menu, MenuItem} from 'kpc-react/components/menu';
import Icon from 'kpc-react/components/icon';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "expandedKeys": [],
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
                expandedKeys={this.state.expandedKeys}
                on$change-expandedKeys={(c, expandedKeys) => this.setState({expandedKeys})} 
                selectedKey={this.state.selectedKey}
                on$change-selectedKey={(c, selectedKey) => this.setState({selectedKey})}
            >
                <MenuItem key="1" onSelect={this.onSelect}>
                    <Icon className="ion-flag" />menu 1
                    <Menu>
                        <MenuItem key="1-1">sub menu 1</MenuItem>
                        <MenuItem key="1-2">sub menu 2</MenuItem>
                        <MenuItem key="1-3" disabled>sub menu 3</MenuItem>
                        <MenuItem key="1-4">sub menu 4</MenuItem>
                    </Menu>
                </MenuItem>
                <MenuItem key="2" disabled><Icon className="ion-star" />menu 2</MenuItem>
                <MenuItem key="3">
                    <i className="k-icon ion-heart"></i>menu 3
                    <Menu>
                        <MenuItem key="3-1">sub menu 1</MenuItem>
                        <MenuItem key="3-2">sub menu 2</MenuItem>
                        <MenuItem key="3-3" disabled>sub menu 3</MenuItem>
                        <MenuItem key="3-4">
                            sub menu 4
                            <Menu>
                                <MenuItem key="3-4-1">Option 1</MenuItem>
                                <MenuItem key="3-4-2">Option 2</MenuItem>
                            </Menu>
                        </MenuItem>
            
                    </Menu>
                </MenuItem>
                <MenuItem key="4" to="/"><Icon className="ion-gear-b" />menu 4</MenuItem>
            </Menu>
        )
    }
}
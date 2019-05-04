import React from 'react';
import {Menu, MenuItem} from 'kpc/components/menu';
import Icon from 'kpc/components/icon';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "expandedKeys": [
                "3"
            ]
        };
    }

    render() {
        return (
            <Menu expandedKeys={this.state.expandedKeys} on$change-expandedKeys={(c, expandedKeys) => this.setState({expandedKeys})} accordion>
                <MenuItem key="1">
                    <Icon className="ion-flag" />menu 1
                    <Menu>
                        <MenuItem key="1-1">sub menu 1</MenuItem>
                        <MenuItem key="1-2">sub menu 2</MenuItem>
                    </Menu>
                </MenuItem>
                <MenuItem key="2" disabled>
                    <Icon className="ion-star" />menu 2
                </MenuItem>
                <MenuItem key="3">
                    <Icon className="ion-heart" />menu 3
                    <Menu>
                        <MenuItem key="3-1">
                            sub menu 1
                            <Menu>
                                <MenuItem key="3-1-1">Option 1</MenuItem>
                            </Menu>
                        </MenuItem>
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
                <MenuItem key="4">
                    <Icon className="ion-gear-b" />menu 4
                    <Menu>
                        <MenuItem key="4-1">sub menu 1</MenuItem>
                        <MenuItem key="4-2">sub menu 2</MenuItem>
                    </Menu>
                </MenuItem>
            </Menu>
        )
    }
}
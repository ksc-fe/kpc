import React from 'react';
import {Menu, MenuItem} from 'kpc-react/components/menu';
import Icon from 'kpc-react/components/icon';

export default class Demo extends React.Component {
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
            <Menu expandedKeys={this.state.expandedKeys} on$change-expandedKeys={(c, expandedKeys) => this.setState({expandedKeys})} theme="light">
                <MenuItem key="1"><Icon className="ion-flag" />menu 1</MenuItem>
                <MenuItem key="2" disabled><Icon className="ion-star" />menu 2</MenuItem>
                <MenuItem key="3">
                    <Icon className="ion-heart" />menu 3
                    <Menu>
                        <MenuItem key="3-1">sub menu 1</MenuItem>
                        <MenuItem key="3-2">sub menu 2</MenuItem>
                        <MenuItem key="3-3" disabled>sub menu 3</MenuItem>
                        <MenuItem key="3-4">sub menu 4</MenuItem>
                    </Menu>
                </MenuItem>
                <MenuItem key="4"><Icon className="ion-gear-b" />menu 4</MenuItem>
            </Menu>
        )
    }
}
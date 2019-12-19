import React from 'react';
import {Menu, MenuItem} from 'kpc-react/components/menu';
import {Switch} from 'kpc-react/components/switch';
import {ButtonGroup, Button} from 'kpc-react/components/button';
import Icon from 'kpc-react/components/icon';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "expandedKeys": [
                "3"
            ],
            "size": "large"
        };
    }

    render() {
        return (
            <div>
                <Switch on="收起" off="展开" value={this.state.isCollapse} on$change-value={(c, isCollapse) => this.setState({isCollapse})} width="60" />
                <Switch on="light" off="dark" value={this.state.theme} on$change-value={(c, theme) => this.setState({theme})} width="60" trueValue="light" falseValue="dark"  />
                <Switch on="horizontal" off="vertical" value={this.state.type} on$change-value={(c, type) => this.setState({type})} width="100" trueValue="horizontal" falseValue="vertical" />
                <ButtonGroup checkType="radio" value={this.state.size} on$change-value={(c, size) => this.setState({size})}>
                    <Button value="large">large</Button>
                    <Button value="default">default</Button>
                    <Button value="small">small</Button>
                </ButtonGroup>
                <br /><br />
                <Menu expandedKeys={this.state.expandedKeys}
                    b-header={<React.Fragment><Icon className="ion-star" />Header</React.Fragment>}
                    on$change-expandedKeys={(c, expandedKeys) => this.setState({expandedKeys})} 
                    collapse={this.state.isCollapse}
                    theme={this.state.theme}
                    size={this.state.size}
                    type={this.state.type}
                >
                    <MenuItem key="1"><Icon className="ion-flag" />menu 1</MenuItem>
                    <MenuItem key="2" disabled dot>menu 2</MenuItem>
                    <MenuItem key="3">
                        <Icon className="ion-heart" />menu 3
                        <Menu>
                            <MenuItem key="3-1">sub menu 1</MenuItem>
                            <MenuItem key="3-2">sub menu 2</MenuItem>
                            <MenuItem key="3-3" disabled>sub menu 3</MenuItem>
                            <MenuItem key="3-4">
                                sub menu 4
                                <Menu>
                                    <MenuItem key="3-4-1">option 1</MenuItem>
                                    <MenuItem key="3-4-2">option 2</MenuItem>
                                </Menu>
                            </MenuItem>
                        </Menu>
                    </MenuItem>
                    <MenuItem key="4"><Icon className="ion-gear-b" />menu 4</MenuItem>
                </Menu>
            </div>
        )
    }
}
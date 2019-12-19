import React from 'react';
import {Layout, Header, Aside, Body, Footer} from 'kpc-react/components/layout';
import {Menu, MenuItem} from 'kpc-react/components/menu';
import Icon from 'kpc-react/components/icon';
import {Breadcrumb, BreadcrumbItem} from 'kpc-react/components/breadcrumb';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "expandedKeys": [],
            "selectedKey": "3-1"
        };
    }

    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo">LOGO</div>
                    <Menu type="horizontal">
                        <MenuItem key="1">menu 1</MenuItem>
                        <MenuItem key="2" disabled>menu 2</MenuItem>
                        <MenuItem key="3">
                            menu 3
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
                        <MenuItem key="4">menu 4</MenuItem>
                    </Menu>
                </Header>
                <Layout>
                    <Aside>
                        <Menu
                            expandedKeys={this.state.expandedKeys}
                            on$change-expandedKeys={(c, expandedKeys) => this.setState({expandedKeys})} 
                            selectedKey={this.state.selectedKey}
                            on$change-selectedKey={(c, selectedKey) => this.setState({selectedKey})}
                            theme="light"
                        >
                            <MenuItem key="1">
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
                                    <MenuItem key="3-4">sub menu 4</MenuItem>
                                </Menu>
                            </MenuItem>
                            <MenuItem key="4"><Icon className="ion-gear-b" />menu 4</MenuItem>
                        </Menu>
                    </Aside>
                    <Body>
                        <Breadcrumb>
                            <BreadcrumbItem>Home</BreadcrumbItem>
                            <BreadcrumbItem>Detail</BreadcrumbItem>
                        </Breadcrumb>
                        <div>content</div>
                    </Body>
                </Layout>
            </Layout>
        )
    }
}
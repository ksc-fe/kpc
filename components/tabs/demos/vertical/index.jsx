import React from 'react';
import {Tabs, Tab} from 'kpc-react/components/tabs';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "tab": "rulein"
        };
    }

    render() {
        return (
            <div>
                <Tabs value={this.state.tab} on$change-value={(c, tab) => this.setState({tab})} vertical>
                    <Tab value="rulein">入站规则</Tab>
                    <Tab value="ruleout">出站规则</Tab>
                    <Tab value="relatedVM">关联云主机</Tab>
                </Tabs>
                <Tabs value={this.state.tab} on$change-value={(c, tab) => this.setState({tab})} vertical type="card">
                    <Tab value="rulein">入站规则</Tab>
                    <Tab value="ruleout">出站规则</Tab>
                    <Tab value="relatedVM">关联云主机</Tab>
                </Tabs>
                <Tabs value={this.state.tab} on$change-value={(c, tab) => this.setState({tab})} vertical type="border-card">
                    <Tab value="rulein">入站规则</Tab>
                    <Tab value="ruleout">出站规则</Tab>
                    <Tab value="relatedVM">关联云主机</Tab>
                </Tabs>
                <Tabs value={this.state.tab} on$change-value={(c, tab) => this.setState({tab})} vertical type="no-border-card">
                    <Tab value="rulein">入站规则</Tab>
                    <Tab value="ruleout">出站规则</Tab>
                    <Tab value="relatedVM">关联云主机</Tab>
                </Tabs>
            </div>
        )
    }
}
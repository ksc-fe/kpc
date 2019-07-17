import React from 'react';
import {Tabs, Tab} from 'kpc/components/tabs';
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
                <Tabs type="card" value={this.state.tab} on$change-value={(c, tab) => this.setState({tab})}>
                    <Tab value="rulein">入站规则</Tab>
                    <Tab value="ruleout">出站规则</Tab>
                    <Tab value="relatedVM">关联云主机</Tab>
                </Tabs>
                <Tabs type="border-card" value={this.state.tab} on$change-value={(c, tab) => this.setState({tab})}>
                    <Tab value="rulein">入站规则</Tab>
                    <Tab value="ruleout">出站规则</Tab>
                    <Tab value="relatedVM">关联云主机</Tab>
                </Tabs>
                <Tabs type="no-border-card" value={this.state.tab} on$change-value={(c, tab) => this.setState({tab})}>
                    <Tab value="rulein">入站规则</Tab>
                    <Tab value="ruleout">出站规则</Tab>
                    <Tab value="relatedVM">关联云主机</Tab>
                </Tabs>
            </div>
        )
    }
}
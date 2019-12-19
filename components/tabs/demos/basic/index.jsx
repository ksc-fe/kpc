import React from 'react';
import {Tabs, Tab} from 'kpc-react/components/tabs';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "tab": "ruleout"
        };
    }

    render() {
        return (
            <div>
                <Tabs value={this.state.tab} on$change-value={(c, tab) => this.setState({tab})}>
                    <Tab value="rulein">入站规则</Tab>
                    <Tab value="ruleout">出站规则</Tab>
                    <Tab value="relatedVM">关联云主机</Tab>
                </Tabs>
            
                <div className="content">
                    {this.state.tab === 'rulein' ?
                        <div>入站规则</div> :
                        this.state.tab === 'ruleout' ?
                            <div>出站规则</div> :
                            <div>关联云主机</div> 
                    }
                </div>
            </div>
        )
    }
}
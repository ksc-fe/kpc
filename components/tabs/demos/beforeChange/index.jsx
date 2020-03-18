import React from 'react';
import {Tabs, Tab} from 'kpc-react/components/tabs';
import './index.styl';
import Dialog from 'kpc-react/components/dialog';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "tab": "ruleout"
        };
        this.beforeChange = this.beforeChange.bind(this);
    }

    beforeChange(value) {
        return new Promise(resolve => {
            Dialog.confirm({
                content: `Are you sure to change to "${value}"`
            }).then(() => {
                resolve(true);
            }, () => {
                resolve(false);
            });
        });
    }
    
    render() {
        return (
            <div>
                <Tabs value={this.state.tab} on$change-value={(c, tab) => this.setState({tab})} beforeChange={this.beforeChange}>
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
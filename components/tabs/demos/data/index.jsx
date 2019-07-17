import React from 'react';
import {Tabs, Tab} from 'components/tabs';
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
                <Tabs 
                    data={[
                        {
                            text: '入站规则',
                            value: 'rulein',
                        },
                        {
                            text: '出站规则',
                            value: 'ruleout',
                        },
                        {
                            text: '关联云主机',
                            value: 'relatedVM',
                        }
                    ]} 
                    value={this.state.tab}
                    on$change-value={(c, tab) => this.setState({tab})}  
                />
            
                <div className="content">
                    {this.state.tab == 'rulein' ?
                        <div>入站规则</div> :
                        this.state.tab == 'ruleout' ?
                            <div>出站规则</div> :
                            <div>关联云主机</div> 
                    }
                </div>
            </div>
        )
    }
}
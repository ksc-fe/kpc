import React from 'react';
import {Tabs, Tab} from 'kpc/components/tabs';
import {Button, ButtonGroup} from 'kpc/components/button';

let id = 3;
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "tab": 1,
            "tabs": [
                {
                    "value": 1,
                    "label": "Tab 1"
                },
                {
                    "value": 2,
                    "label": "Tab 2"
                },
                {
                    "value": 3,
                    "label": "Tab 3"
                }
            ],
            "size": "large"
        };
        this._remove = this._remove.bind(this);
        this._add = this._add.bind(this);
    }

    _remove(value) {
        const tabs = this.state.tabs.slice(0);
        const index = tabs.findIndex(item => item.value === value);
        tabs.splice(index, 1);
    
        // 如果删除当前tab，则切换至下一个
        let tab = this.state.tab;
        if (value === tab) {
            tab = (tabs[index] || tabs[index - 1]).value
        }
    
        this.setState({tabs, tab});
    }
    
    _add() {
        const tabs = this.state.tabs.slice(0);
        id++;
        tabs.push({
            value: id,
            label: `Tab ${id}`,
        });
        this.setState({tabs, tab: id});
    }
    
    render() {
        return (
            <div>
                <ButtonGroup value={this.state.size} on$change-value={(c, size) => this.setState({size})} checkType="radio">
                    {['large', 'default', 'small', 'mini'].map((value, key) => {
                        return (
                            <Button
                                value={value}
                            >{value}</Button>
                        )
                    })}
                </ButtonGroup>
                <br /><br />
                <Button onClick={this._add}>新增Tab</Button>
                {['default', 'card', 'border-card', 'no-border-card'].map((value, key) => {
                    return (
                        <Tabs value={this.state.tab}
                            on$change-value={(c, tab) => this.setState({tab})}
                            closable={this.state.tabs.length > 1}
                            onRemove={this._remove}
                            type={value}
                            size={this.state.size}
                        >
                            {this.state.tabs.map((value, key) => {
                                return (
                                    <Tab
                                        value={value.value}
                                        key={value.value}
                                        closable={value.value !== 10}
                                    >{value.label}</Tab>
                                )
                            })}
                        </Tabs>
                    )
                })}
            </div>
        )
    }
}
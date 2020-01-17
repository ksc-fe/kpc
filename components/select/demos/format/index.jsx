import React from 'react';
import {Select, Option} from 'kpc-react/components/select';
import {Icon} from 'kpc-react/components/icon';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "type": "dashed",
            "icons": [
                "ion-camera"
            ]
        };
        this._classNames = this._classNames.bind(this);
    }

    _classNames(classNames) {
        const ret = [];
        for (let key in classNames) {
            const value = classNames[key];
            if (value) {
                ret.push(key);
            }
        }
        return ret.join(' ');
    }
    
    render() {
        return (
            <div>
                <div>
                    <span className="label">border:</span>
                    <Select value={this.state.type} on$change-value={(c, type) => this.setState({type})}
                        b-value={(value, label) => {
                            return <React.Fragment>
                                <div style={{borderBottom: `1px ${value} #666`}} className="line"></div>
                            </React.Fragment>
                        }}
                    >
                        {['solid', 'dashed', 'dotted'].map((value, key) => {
                            return (
                                <Option
                                    value={value}
                                >
                                    <div style={{borderBottom: `1px ${value} #666`}} className="line"></div>
                                </Option>
                            )
                        })}
                    </Select>
                    <div style={{border: `1px ${this.state.type} #b2b2b2`}} className="rect">
                        Rectangle
                    </div>
                </div>
                <div>
                    <span className="label">multiple:</span>
                    <Select value={this.state.icons} on$change-value={(c, icons) => this.setState({icons})} multiple
                        b-value={(value, label) => {
                            return <React.Fragment>
                                <Icon className={this._classNames(value)} />
                                <span className="c-middle">{value}</span>
                            </React.Fragment>
                        }}
                    >
                        {['ion-chatbubble', 'ion-person-stalker', 'ion-beer', 'ion-camera'].map((value, key) => {
                            return (
                                <Option
                                    value={value}
                                >
                                    <Icon className={this._classNames(value)} />
                                </Option>
                            )
                        })}
                    </Select>
                </div>
            </div>
        )
    }
}
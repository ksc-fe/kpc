import React from 'react';
import Drawer from 'kpc/components/drawer';
import {Button, ButtonGroup} from 'kpc/components/button';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "show": false,
            "showPosition": "right",
            "showList": [
                {
                    "key": "top",
                    "value": "从上侧出现"
                },
                {
                    "key": "bottom",
                    "value": "从下侧出现"
                },
                {
                    "key": "left",
                    "value": "从左侧出现"
                },
                {
                    "key": "right",
                    "value": "从右侧出现"
                }
            ]
        };
        this.showDrawer = this.showDrawer.bind(this);
    }

    showDrawer(value) {
        this.setState({
            'showPosition': value,
            'show': true
        });
    }
    
    render() {
        return (
            <div>
                <ButtonGroup>
                    {this.state.showList.map((value, key) => {
                        return (
                            <Button 
                                onClick={this.showDrawer.bind(this, value.key)}
                            >{value.value}</Button>
                        )
                    })}
                </ButtonGroup>
            
                <Drawer value={this.state.show}
                    on$change-value={(c, show) => this.setState({show})}
                    title='Drawer Title' 
                    ref={i => this.__demoTwo = i} 
                    placement={this.state.showPosition} 
                    size='small'
                >
                    Drawer Body
                </Drawer>
            </div>
        )
    }
}
import React from 'react';
import Message from 'kpc-react/components/message';
import {Button} from 'kpc-react/components/button';
import {Progress} from 'kpc-react/components/progress';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "percent": 10,
            "show": false
        };
        this.set = this.set.bind(this);
        this.add = this.add.bind(this);
    }

    set(key, value) { this.setState({[key]: value}); }
    
    add() {
        this.setState({percent: this.state.percent + 5});
    }
    
    render() {
        return (
            <div>
                <Button onClick={this.set.bind(this, 'show', true)}>custom message</Button>
                <Message value={this.state.show} on$change-value={(c, show) => this.setState({show})} key="message" 
                    hideIcon
                    duration={0} 
                    type={this.state.percent >= 100 ? 'success' : 'info'}
                >
                    <Progress style={{"width":"200px"}} 
                        percent={this.state.percent}
                        onClick={this.add}
                    />
                </Message>
            </div>
        )
    }
}
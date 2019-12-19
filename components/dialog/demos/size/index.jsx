import React from 'react';
import {Button, ButtonGroup} from 'kpc-react/components/button';
import Dialog from 'kpc-react/components/dialog';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.set = this.set.bind(this);
    }

    set(key, value) { this.setState({[key]: value}); }
    
    render() {
        return (
            <div>
                <ButtonGroup>
                    {['large', 'default', 'small', 'mini'].map((value, key) => {
                        return (
                            <React.Fragment>
                                <Button onClick={this.set.bind(this, `show${value}`, true)}>Show {value} Dialog</Button>
                                <Dialog value={this.state[`show${value}`]} on$change-value={(c, v) => this.setState({[`show${value}`]: v})} title="Dialog Title" size={value}>
                                    Size: {value}
                                </Dialog>
                            </React.Fragment>
                        )
                    })}
                </ButtonGroup>
                <br /><br />
                <Button onClick={this.set.bind(this, 'customSize', true)}>Show 300px wide dialog</Button>
                <Dialog value={this.state.customSize} on$change-value={(c, customSize) => this.setState({customSize})} title="Dialog Title" width={300}>
                    width: 300px
                </Dialog>
            </div>
        )
    }
}
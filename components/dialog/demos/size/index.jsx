import React from 'react';
import {Button, ButtonGroup} from 'kpc/components/button';
import Dialog from 'kpc/components/dialog';

export default class extends React.Component {
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
                            <>
                                <Button onClick={this.set.bind(this, `show${value}`, true)}>Show {value} Dialog</Button>
                                <Dialog value={this.state[`show${value}`]} on$change-value={(c, v) => this.setState({[`show${value}`]: v})} title="Dialog Title" size={value}>
                                    Size: {value}
                                </Dialog>
                            </>
                        )
                    })}
                </ButtonGroup>
            </div>
        )
    }
}
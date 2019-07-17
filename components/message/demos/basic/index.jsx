import React from 'react';
import {ButtonGroup, Button} from 'kpc/components/button';

import Message from 'kpc/components/message';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.showMessage = this.showMessage.bind(this);
    }

    showMessage(type) {
        Message[type](type);
    }
    
    render() {
        return (
            <ButtonGroup>
                {['info', 'error', 'warning', 'success'].map((value, key) => {
                    return (
                        <Button
                            onClick={this.showMessage.bind(this, value)}
                        >{value}</Button>
                    )
                })}
            </ButtonGroup>
        )
    }
}
import React from 'react';
import {ButtonGroup, Button} from 'kpc-react/components/button';

import Message from 'kpc-react/components/message';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.showMessage = this.showMessage.bind(this);
    }

    showMessage(type) {
        Message[type]({
            content: type,
            duration: 3000,
            type: type,
            closable: false,
            hideIcon: true,
        });
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
import React from 'react';
import {Button, ButtonGroup} from 'kpc/components/button';
import Dialog from 'kpc/components/dialog';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.showDialog = this.showDialog.bind(this);
    }

    showDialog(type) {
        Dialog[type]({
            content: type,
        }).then(() => {
            console.log('clicked ok button');
        }, () => {
            console.log('clicked cancel button');
        });
    }
    
    render() {
        return (
            <ButtonGroup>
                {['success', 'warning', 'error', 'confirm'].map((value, key) => {
                    return (
                        <Button 
                            onClick={this.showDialog.bind(this, value)}
                        >Show {value[0].toUpperCase() + value.substring(1)} Dialog</Button>
                    )
                })}
            </ButtonGroup>
        )
    }
}
import React from 'react';
import {Button, ButtonGroup} from 'kpc-react/components/button';

import Dialog from 'kpc-react/components/dialog';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.showDialog = this.showDialog.bind(this);
        this.showDialogWithTitle = this.showDialogWithTitle.bind(this);
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
    
    showDialogWithTitle(type) {
        Dialog[type]({
            title: type[0].toUpperCase() + type.substring(1),
            content: type + ' dialog',
        }).then(() => {
            console.log('clicked ok button');
        }, () => {
            console.log('clicked cancel button');
        });
    }
    
    render() {
        return (
            <div>
                <ButtonGroup>
                    {['success', 'warning', 'error', 'confirm'].map((value, key) => {
                        return (
                            <Button 
                                onClick={this.showDialog.bind(this, value)}
                            >Show {value[0].toUpperCase() + value.substring(1)} Dialog</Button>
                        )
                    })}
                </ButtonGroup>
                <br />
                <br />
                <ButtonGroup>
                    {['success', 'warning', 'error', 'confirm'].map((value, key) => {
                        return (
                            <Button 
                                onClick={this.showDialogWithTitle.bind(this, value)}
                            >Show {value[0].toUpperCase() + value.substring(1)} Dialog with Title</Button>
                        )
                    })}
                </ButtonGroup>
            </div>
        )
    }
}
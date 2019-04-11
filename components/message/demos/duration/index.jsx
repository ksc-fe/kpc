import React from 'react';
import {ButtonGroup, Button} from 'kpc/components/button';


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.showMessage1 = this.showMessage1.bind(this);
        this.showMessage2 = this.showMessage2.bind(this);
    }

    showMessage1() {
        Message.info('close after 10s', 10000);
    }
    
    showMessage2() {
        Message.info('stick message', 0);
    }
    
    render() {
        return (
            <ButtonGroup>
                <Button onClick={this.showMessage1}>close after 10s</Button>
                <Button onClick={this.showMessage2}>stick message</Button>
            </ButtonGroup>
        )
    }
}
import React from 'react';
import Badge from 'kpc-react/components/badge';
import Button from 'kpc-react/components/button';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Badge>Message</Badge>
                <Badge>
                    <Button>Message</Button>
                </Badge>
            </div>
        )
    }
}
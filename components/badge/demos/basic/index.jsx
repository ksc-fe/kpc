import React from 'react';
import Badge from 'kpc/components/badge';
import Button from 'kpc/components/button';
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
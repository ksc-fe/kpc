import React from 'react';
import Badge from 'kpc/components/badge';
import Button from 'kpc/components/button';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Badge text="new">Message</Badge>
                <Badge text={19}>
                    <Button>Message</Button>
                </Badge>
                <Badge text={100} max={99}>
                    <Button>Message</Button>
                </Badge>
            </div>
        )
    }
}
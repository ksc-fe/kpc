import React from 'react';
import Badge from 'kpc/components/badge';
import Button from 'kpc/components/button';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Badge disabled>Message</Badge>
                <Badge disabled>
                    <Button>Message</Button>
                </Badge>
                <Badge text={19} disabled>
                    <Button>Message</Button>
                </Badge>
                <Badge text={100} max={99} disabled>
                    <Button>Message</Button>
                </Badge>
            </div>
        )
    }
}
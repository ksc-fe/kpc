import React from 'react';
import Badge from 'kpc/components/badge';
import Button from 'kpc/components/button';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Badge />
                <Badge text="new" />
                <Badge text={19} />
                <Badge text={100} max={99} />
            </div>
        )
    }
}
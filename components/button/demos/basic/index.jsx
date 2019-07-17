import React from 'react';
import Button from 'kpc/components/button';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Button>default</Button>
                <Button type="primary">primay</Button>
                <Button type="secondary">secondary</Button>
                <Button type="warning">warning</Button>
                <Button type="danger">danger</Button>
                <Button type="success">success</Button>
                <Button type="none">none</Button>
                <Button type="link">link</Button>
            </div>
        )
    }
}
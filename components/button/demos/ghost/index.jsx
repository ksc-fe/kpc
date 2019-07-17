import React from 'react';
import Button from 'kpc/components/button';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Button ghost>default</Button>
                <Button type="primary" ghost>primay</Button>
                <Button type="warning" ghost>warning</Button>
                <Button type="danger" ghost>danger</Button>
                <Button type="success" ghost>success</Button>
                <Button type="none" ghost>none</Button>
                <Button type="primary" ghost disabled>primay</Button>
            </div>
        )
    }
}
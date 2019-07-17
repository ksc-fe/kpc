import React from 'react';
import Spinner from 'kpc/components/spinner';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Spinner size="large" />
                <Spinner />
                <Spinner size="small" />
                <Spinner size="mini" />
            </div>
        )
    }
}
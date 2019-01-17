import React from 'react';
import Spinner from 'kpc/components/spinner';

export default class extends React.Component {
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
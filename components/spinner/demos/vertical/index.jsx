import React from 'react';
import Spinner from 'kpc/components/spinner';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Spinner max={5} min={-5} vertical size="large" />
                <Spinner max={5} min={-5} vertical />
                <Spinner max={5} min={-5} vertical size="small" />
                <Spinner max={5} min={-5} vertical size="mini" />
            </div>
        )
    }
}